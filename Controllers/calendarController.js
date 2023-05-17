const { google } = require("googleapis");

// @desc    Does the auth part for google calendar access
// @route    GET /rest/v1/calendar/init
// @access    Public
const initCalendar = async (req, res) => {
    const oauth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      process.env.REDIRECT_URI
    );
  
    try{
      const authUrl = oauth2Client.generateAuthUrl({
          access_type: "offline",
          scope: ["https://www.googleapis.com/auth/calendar.readonly"],
      });
      res.redirect(authUrl);
    }catch(error){
      // TODO:: Error logging to seperate location
      console.error("Error in authorisation", error);
  
      //? INFO :: Sending res as server error
      res.status(500).send({error:"Internal server error"}); 
    }
}

// @desc    Gives the list of all today events for the google account 
// @route    GET /rest/v1/calendar/redirect
// @access    Public
const calendarEvents = async (req, res) => {
    const oauth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      process.env.REDIRECT_URI
    );
  
    const { code } = req.query;
  
    if(!code){
      res.status(400).json({msg:"Authorisation token not present"});
    }else{
      // TODO :: Input validation for code
    }
  
    try {
      const { tokens } = await oauth2Client.getToken(code);
      oauth2Client.setCredentials(tokens);
  
      // Access token obtained, now fetch the list of events
      const calendar = google.calendar({ version: "v3", auth: oauth2Client });
      const { data } = await calendar.events.list({
        calendarId: "primary",
        timeMin: new Date().toISOString(),
        maxResults: 10,
        singleEvents: true,
        orderBy: "startTime",
      });
  
      const events = data.items;
      // Process the events as needed
  
      res.status(200).json(events);
    } catch (error) {
      // TODO:: Error logging to seperate location
      console.error("Error retrieving access token:", error);
  
      res.status(500).json({ error: "Failed to retrieve access token" });
    }
}

module.exports = {initCalendar, calendarEvents};
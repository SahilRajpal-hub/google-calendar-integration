# Google Calendar Integration

This project implements Google Calendar integration using the OAuth2 mechanism and Google Calendar REST API. It allows users to connect their Google Calendar and retrieve their calendar events.

## Project Setup

1. Clone the repository:

```
git clone https://github.com/SahilRajpal-hub/google-calendar-integration.git
```

2. Install dependencies using npm:
```
npm install
```

3.Configuration:
Rename the .env.example file to .env.
Open the .env file and update the following configuration values:
GOOGLE_CLIENT_ID: The client ID obtained from the Google API Console.
GOOGLE_CLIENT_SECRET: The client secret obtained from the Google API Console.
REDIRECT_URI: The redirect URI registered in the Google API Console for OAuth callbacks.

## Usgae
1. Start the application:
    ```node index.js```

2. Open your web browser and navigate to `http://localhost:3000/rest/v1/calendar/init/`. 
    This will initiate the OAuth flow and redirect you to the Google authentication page.

3. Follow the authentication process and grant access to your Google Calendar.

4. After successful authentication, the application will retrieve and display a list of calendar events.

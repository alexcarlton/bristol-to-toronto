# Getting Started
## Setting up the Google Calendar API
### Creating a project
- Go to the [Google Developers Console](https://console.developers.google.com/apis/dashboard)
- Create a new project from the project dropdown
- Once the project is created, select the project from the projects dropdown

### Enabling Google Calendar API
- Once the project is created, select "+ ENABLE APIS AND SERVICES"
- Search for and enable the Google Calendar API

### Creating an OAuth Client
#### Setting up the consent screen
- Navigate to the API dashboard, then the credentials tab 
- Select "CREATE CREDENTIALS" then "OAuth Client ID"
- Click "Configure consent screen"
- Select "User Type: External"
- Fill out the "Edit app registration" form and click "Save and Continue"
- Select "+ ADD OR REMOVE SCOPES" and add the following scopes
  - `.../auth/userinfo.email`
  - `.../auth/userinfo.profile`
  - `.../auth/calendar.readonly`
  - `.../auth/calendar.calendarlist.readonly`
  - `.../auth/calendar.calendars.readonly`
  - `.../auth/calendar.events.readonly`
  - `.../auth/calendar.events.public.readonly`
- Click "+ ADD USERS" to add your email as a test user
- Go back to the API dashboard
#### Creating your Client ID
- Select "CREATE CREDENTIALS" then "OAuth Client ID"
- Select Application Type - Web application
- Add `http://localhost:3000` to the "Authorised JavaScript origins"
- Click create and note your `Client ID`

### Creating a API Key
- Navigate to the API dashboard, then the credentials tab 
- Click "+ CREATE CREDENTIALS" and select API Key
- Take note of your `API Key`

## Environment Variables

Clone the `.env.local.example` file, remove `.example`, and fill out the values:

- `NEXT_PUBLIC_CALENDAR_API_KEY`: Your Google Calendar API Key
- `NEXT_PUBLIC_CALENDAR_API_CLIENT_ID`: Your Google Calendar OAuth 2.0 Client ID

## Installation

First install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The site has been tested on the latest version of Chrome.

## Testing
To run the tests:
```bash
npm run test
```

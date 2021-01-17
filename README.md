# Getting Started

## Environment Variables

Clone the `.env.local.example` file and fill out the values:

- `NEXT_PUBLIC_CALENDAR_API_KEY`: Your Google Calendar API Key
- `NEXT_PUBLIC_CALENDAR_API_CLIENT_ID`: Your Google Calendar OAuth 2.0 Client ID

Authorize `http://localhost:3000` as a allowed JavaScript origin in the [credentials tab](https://console.developers.google.com/apis/credentials) for your client ID.

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

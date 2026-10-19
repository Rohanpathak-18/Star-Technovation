# Star Technovation

A responsive MERN marketing site and admin workspace for an algorithmic trading software studio. The interface uses a custom skeuomorphic visual system in lavender, chartreuse, tomato, and warm paper tones.

## Project structure

```text
client/
  index.html        Vite HTML entry point
  vite.config.js    Client dev server and API proxy
  src/
    components/     Shared UI and homepage section components
    data/           Product, pricing, and editorial content
    pages/          Home, admin, legal, and journal article pages
    services/       Frontend API client
    App.jsx         Page entry point
    main.jsx        React bootstrap
    styles.css      Responsive theme and component styles
server/
  config/           Database connection
  controllers/      Request handlers
  middleware/       Authentication and authorization
  models/           Mongoose schemas
  routes/           Express route modules
  services/         Local fallback storage
  index.js          Express app bootstrap and production static server
package.json        Shared scripts and dependencies
```

## Run locally

1. Install Node.js 18 or newer.
2. Run `npm install`.
3. Copy `.env.example` to `.env` and set `ADMIN_EMAIL` to the email that will own the admin account. Change `JWT_SECRET` before exposing the site beyond your machine.
4. Run `npm run dev` and open `http://localhost:5173`.

`npm run dev` starts both the client and server. Do not also run `npm start` in another terminal at the same time. To run them separately, start the backend with `npm start` and the client with `npm run dev:client`. The default backend port is `5003`; if you change `PORT` in `.env`, update the client proxy target in `client/vite.config.js` to the same port.

The server connects to the local MongoDB database named `star_technovation` when MongoDB is available. If it is not running, it writes demo records to `server/local-data.json`. Install MongoDB locally to use the MERN database path.

The admin account is created by registering the address configured in `ADMIN_EMAIL`. The public admin route is `/admin`. Contact enquiries, booking requests, newsletter subscriptions, and registrations are persisted locally.

## Integration points

- **Online payment:** pricing and plan selection are present. Add a provider such as Stripe or Razorpay and credentials before collecting payments; checkout is not charged in this demo.
- **WhatsApp:** replace the sample number in the `wa.me` links with the studio number.
- **Live market data:** strategy cards currently use illustrative sample values. Connect a licensed broker or market-data feed before displaying live prices or executing trades.
- **Email and notifications:** forms save to the local database. Configure an email/notification provider when outbound messages are needed.
- **Legal pages and brand assets:** replace the starter legal links and text, and add approved logo/product imagery before launch.

This website is a marketing/demo interface. It does not execute trades or provide investment advice.

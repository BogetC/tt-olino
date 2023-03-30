# Getting started

## Server

Place yourself inside the server directory

```bash
cd server
```

Install the dependencies

```bash
npm install
```

### Development

Run the development server

```bash
npm run dev
```

### Production

Create a production build

```bash
npm run build
```

### Test the production build locally:

Start the server

```bash
npm run start
```

### Optional

Create a `.env` file inside the `server` directory to add environment variables

```bash
PORT="5000"
CLIENT_ORIGIN="http://localhost:3000"
```

---

## Client

Place yourself inside the client directory

```bash
cd client
```

Install the dependencies

```bash
npm install
```

### Development

Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Production

Create a production build

```bash
npm run build
```

### Test the production build locally:

Start the client

```bash
npm run start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Optional

Create a `.env.local` file inside the `client` directory to add environment variables

```bash
API_URL="http://localhost:5000"
```

---

## Why NextJS?

`create-next-app` allow us to enjoy a ready to use, easy to deploy project architecture

NextJS creates an SSR (Server-Side Render) architecture, that comes with several benefits:

- Better SEO (Search Engine Optimization) experience
- Increases the security in case we need to connect with authenticated data provider or other external services 

## Notes

For this example, we are omitting the database part, so data are only stored in a single file
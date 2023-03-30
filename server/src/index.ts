import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { getActivities } from "./utils/db";

dotenv.config();

const PORT = process.env.PORT ?? 5000;
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN ?? "http://localhost:3000";

const corsOptions = {
  origin: CLIENT_ORIGIN,
};

const app = express();

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/api/activities", async (req, res, next) => {
  const activities = await getActivities();

  res.json(activities);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

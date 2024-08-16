// main.ts

import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import { mainRouter } from "./routes";

const EXPRESS_PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(cors());
app.set("trust proxy", true);
// app.use(
//   cors({
//     origin: [
//       "http://localhost:5173",
//       "https://chat-app-react-ts-six.vercel.app",
//     ],
//   })
// );

app.get("/", async (req, res) => {
  res.send("Hello World, simple-express-backend-structure");
});

app.get("/ping", async (req, res) => {
  res.send("pong!");
});

app.use("/api/v1", mainRouter);

app.listen(EXPRESS_PORT, () => {
  console.log(`🟢 App is running on port ${EXPRESS_PORT}.`);
});

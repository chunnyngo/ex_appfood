import dotenv from "dotenv";
dotenv.config();

import cors from "cors";

import rootRoute from "./routes/rootRoute.js";

import express from "express";

import { sequelize } from "./models/connect.js";

const app = express();

app.use(express.json());

app.use(cors());

app.use(rootRoute);

const port = 8080;
const server = app.listen(port, async () => {
  console.log(`Lắng nghe cổng http://localhost:${port} ...`);
  try {
    const { database } = sequelize.config;
    console.log(`Kết nối database: ${database} thành công.`);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});

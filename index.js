import express from "express";
import bodyParser from "body-parser";
import authRoutes from "./routes/auth.js";
import seedRoutes from "./routes/seed.js";
import questionRoutes from "./routes/board.js";
import listRoutes from "./routes/list.js";
import {PROTECTED} from "./middlewares/authMiddleware.js";
import cors from "cors";
import {config} from "dotenv";
import { dirname } from 'path';
import path from "node:path";
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

config();

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use("/api/auth", authRoutes);
app.use("/api/questions", PROTECTED, questionRoutes);
app.use("/api/lists", PROTECTED, listRoutes);
app.use("/seed", seedRoutes);

app.use(express.static(path.join(__dirname, "client", "dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"))
})
app.listen(process.env.PORT, () => {
  console.log("Server running at port: " + process.env.PORT);
});
import express from 'express';
import bodyParser from "body-parser";
import cors from 'cors';
import "dotenv/config";
import authRoutes from './routes/auth.js';
import seedRoutes from './routes/seed.js';
import questionRoutes from './routes/board.js';
import listRoutes from './routes/list.js';
import {PROTECTED} from "./middlewares/authMiddleware.js";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use("/auth", authRoutes);
app.use("/questions", PROTECTED, questionRoutes);
app.use("/lists", PROTECTED, listRoutes);

app.use("/seed", seedRoutes);

app.listen(process.env.PORT, () => {
  console.log("Server running at port: " + process.env.PORT);
});


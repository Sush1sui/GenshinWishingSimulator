import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 6969;

app.use(cors());
app.use(express.json());

mongoose
    .connect("mongodb://127.0.0.1:27017/genshin-wish-simulator")
    .then(() => console.log("Connected to DB successfully"))
    .catch((e) => console.log("Failed to connect to DB", e));

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

import express from "express";
import cors from "cors";
import "./models/config.js";
import formroute from "./routes/formroute.js";

import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin:[
        'http://localhost:5173', // for local dev
        'https://ansubha-portfolio-official.vercel.app' // for production frontend
      ],
      methods: ['POST'], // adjust as needed
    credentials: true,
  })
);

//setting test api
app.get("/", (req, res) => {
  res.send("Backend is Working");
});

app.use("/formapi", formroute);

//error route handling
app.all("*", (req, res) => {
  return res.status(404).json({
    success: false,
    message: "Route error",
  });
});

//setting up the server
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Running on port ${port}..........`);
});

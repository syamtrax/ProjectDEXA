import express from "express";
import cors from "cors";
import dataRoute from "./routes/dataRoute.js";


const app = express();
app.use(cors());
app.use(express.json());
app.use(dataRoute);


app.listen(5000, () => console.log('Server Up and Running'))
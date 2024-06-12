import express from"express";
import { Request, Response } from "express";
import cors from "cors";

import data from "./controllers/sendData"


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(cors());


app.get("/",(req : Request,res : Response)=>{
    res.send("<h1> main page")
})

app.use("/data",data);

export default app;
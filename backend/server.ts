import express from"express";

import { Request, Response } from "express";

const app = express();

app.get("/",(req : Request,res : Response)=>{
    res.send("<h1> main page")
})

app.listen(8080, ()=>{
    console.log("server start");
})

export default app;
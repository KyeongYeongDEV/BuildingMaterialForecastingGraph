import { Router } from "express"
import { Request, Response } from "express";

import woodData from "../models/wood.data"
import steelData from "../models/steel.data"

import { Metarial } from "../types/material.type";
const router = Router();

router.get("/data",(req : Request, res : Response)=>{   
    try{
        const userMaterial : string = req.body.meterial
        let data : Metarial[]  = [];

        if(userMaterial == "wood"){
            data = woodData;    
        }else if(userMaterial == "steel"){
            data = steelData;
        }else{
            throw new Error("존재하지 않는 재료입니다.");
        }
        res.status(200).send({
            msg : "Success send data",
            data : data
        });

    }catch(err ){
        res.status(404).json({ 
            msg : "error 발생",
            err : err
        })
    }
})

export default router;
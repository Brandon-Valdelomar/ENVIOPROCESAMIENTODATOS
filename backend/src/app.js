import dotenv from "dotenv";
import express from "express";

dotenv.config();

const NAME=process.env.SERVER_NAME;
const PORT=process.env.SERVER_PORT;
const VERSION=process.env.SERVER_VERSION;
const DESCRIPTION=process.env.SERVER_DESCRIPTION;

const app = express();

app.get("/",(req,res)=>{
    res.send("Server"+NAME);
});

app.listen(4000,()=>{
    console.log('Servidor funcionando correctamente en http://localhost:4000');
});

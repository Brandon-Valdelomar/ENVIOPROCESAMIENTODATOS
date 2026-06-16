import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { version } from "node:os";
dotenv.config();

const NAME=process.env.SERVER_NAME;
const PORT=process.env.SERVER_PORT;
const VERSION=process.env.SERVER_VERSION;
const DESCRIPTION=process.env.SERVER_DESCRIPTION;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.json({
        name: NAME,
        version: VERSION,
        description: DESCRIPTION,
        puerto: PORT
    });
});

app.listen(4000,()=>{
    console.log('Servidor funcionando correctamente en http://localhost:4000');
});


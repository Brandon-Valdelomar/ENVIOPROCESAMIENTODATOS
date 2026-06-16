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

app.post("/api/parqueo/calcular", (req,res)=>{
const {placa,tipo,horas,minutos} = req.body;

 if(!placa ||placa.trim()==""){
    res.status(400).json({error:"Placa obligatoria"})
 }

if(!tipo ||tipo!=="carro" && tipo!=="moto"){
res.status(400).json({error:"Solo se permite carro o moto"})
}

if(horas < 0 ){
    res.status(400).json({error:"Las horas no pueden ser negativas"})
}

if(minutos < 0 || minutos > 59 ){
    res.status(400).json({error:"Las horas no pueden ser negativas y no pueden ser mayores a 59"})
}

const tarifa=tipo==="carro"? 1200: 500;

let h=Number(horas);
let m=Number(minutos);

if(m>5)h++;

const total=h*tarifa;

res.json({
    placa:placa,
    tipo:tipo,
    taria:tarifa,
    tiempo:horas+":"+minutos,
    horasCobradas:h,
    total:total
})

});
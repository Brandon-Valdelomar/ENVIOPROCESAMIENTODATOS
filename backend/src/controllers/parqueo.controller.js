export function calcularCobro(req,res){
const {plaa, tipo, horas, minutos} = req.body;

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
})};
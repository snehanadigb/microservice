
const express= require("express");
const cors= require("cors");
const {PrismaClient}= require("@prisma/client");
const axios = require("axios");
const app= express();
const prisma = new PrismaClient;
app.use(cors("*"));
app.use(express.json());


app.get("/", (req, res)=>{
    res.send("Active service");
})

app.get("/viewactive", async (req, res)=>{
    const allitems= await prisma.planservicedb.findMany();
    res.send(allitems);
})

app.get("/viewplan", (req,res)=>{
   axios.get("http://localhost:3032/getservice/PlanService").then((e)=>{
    
    console.log(e.data.url);
    axios.get(e.data.url).then((e)=>res.send(e.data));
   });
})

app.get("/viewloc", (req,res)=>{
    axios.get("http://localhost:3032/getservice/LocService").then((e)=>{
     
     console.log(e.data.url);
     axios.get(e.data.url).then((e)=>res.send(e.data));
    });
 })

app.post("/addactive", async (req, res)=>{
    
    let dataobj= {
        data:{
            activeName: req.body.activeName,
            activePrice: req.body.activePrice,
        },
    };
    await prisma.planservicedb.create(dataobj);
    res.send("Plan Actived");
})

app.listen(6003, (req, res)=>{
    console.log("Active service started on port 6003.");
})
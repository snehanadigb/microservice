const express= require("express");
const cors= require("cors");
const {PrismaClient}= require("@prisma/client");
const { all } = require("axios");

const app= express();
const prisma = new PrismaClient;
app.use(cors("*"));
app.use(express.json());

app.get("/", (req, res)=>{
    res.send("This is Location service");
})
app.get("/viewloc", async (req, res)=>{
    const allitems= await prisma.location.findMany();
    res.send(allitems);
})
app.post("/addloc", async (req, res)=>{
    
    let dataobj= {
        data:{
            LocationName: req.body.LocationName,
        }
    };
    await prisma.location.create(dataobj);
    res.send("Location Added");
})
app.listen(6002, (req, res)=>{
    console.log("Location service started on port 6002.");
})
//Plan service:  Kaushik
const express= require("express");
const cors= require("cors");
const {PrismaClient}= require("@prisma/client");
const { all } = require("axios");

const app= express();
const prisma = new PrismaClient;
app.use(cors("*"));
app.use(express.json());

app.get("/", (req, res)=>{
    res.send("This is Plan service");
})
app.get("/viewplan", async (req, res)=>{
    const allitems= await prisma.plan.findMany();
    res.send(allitems);
})
app.post("/addplan", async (req, res)=>{
    let dataobj= {
        data:{
            planName: req.body.planName,
            price: req.body.price,
        }
    };
    await prisma.plan.create(dataobj);
    res.send("Plan Added");
})
app.listen(6001, (req, res)=>{
    console.log("Plan service started on port 6001.");
})
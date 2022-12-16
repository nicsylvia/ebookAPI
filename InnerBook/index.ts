import express from 'express'
import router from './Router/router'
import cors from "cors"


const app = express()
app.use(express.json())
require("./Config/db")
app.use(cors())
const port = 2113

app.get("/",(req,res)=>{
res.status(200).send("server is running")
})

app.use("/",router)

app.listen(port,()=>{
    console.log("Up and running");
})
import mongoose from "mongoose"

const URI ="mongodb://localhost/Books"
mongoose.connect(URI)
mongoose.connection.on("open",()=>{
    console.log("db is on")
}).once("error",(error)=>{
    console.log("error")
})
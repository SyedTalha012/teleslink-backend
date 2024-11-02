const express = require("express")
const cors = require("cors")
const { dbConnection } = require("./connection/db.connection")
const { combineRouter } = require("./routes")
require("dotenv").config()


const app = express()
const port = process.env.PORT || 3002

app.use(express.json())
app.use(cors({origin:"*"}))
dbConnection()


app.use("/api/v1",combineRouter)



app.use("*",(req,res)=>{
    res.status(404).json({msg:"This Api Not Exits"})
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})

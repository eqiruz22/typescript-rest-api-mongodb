import express, { Application, NextFunction,Request,Response } from "express"

const app:Application = express()
const port:Number = 8081

app.get("/", (req:Request,res:Response,next:NextFunction) => {
    return res.status(200).json({
        message:"Hello"
    })
})

app.listen(port,() => {
    console.log(`server running on port ${port}`)
})
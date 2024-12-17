import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({           // here config our cors.. configuration.. 
    origin: process.env.COR_ORIGIN,
    Credential: true
}))

app.use(express.json({limit: "16kb"}))        //  This is for when we're sending json in body.. so setting up.. how much we accept. 
app.use(express.urlencoded({extended:true, limit: "16kb"}))  // this is for url where you se + and % CONVERT THAT  URL IN DIFFERENT.. VARIOUS.. 
app.use(express.static("public"))         //here we store pdf images and files and folder.. 
app.use(cookieParser())             // yeh isiliye hai.. ki mere server se user ke browser se cookies excess kr paau and set bhi kr paau.. 
                                   // basically cookies par crud operational kr paau.. 

export {app}
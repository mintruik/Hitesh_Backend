// require("dotenv").config({path: "./env"});

import dotenv from "dotenv"           // if we want to use dotenv like this so we've to use it as a experimental feature... go to package.json and add  ->
                                     //  "dev": "nodemon -r dotenv/config --experimental-json-modules src/index.js"  -> in script file you've to write like this.. 
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js";       // mongoose and DB we're not using so just let it remove it... 
import connectDB from "./db/index.js";



dotenv.config({
    path: './.env'
})



connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on PORT : ${process.env.PORT }`)
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!!", err);
})












/* ----------------this is our first approach... ---------------- */
/*
// function connectDB(){}

// connectDB();

// ()()
// ;( async () => {} )()
// this semiColon is just for cleaning purpose.. 

;(async () => {

    try {
        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        console.log("Connected to MongoDB Successfully");
        app.on("error", (error) => {                         // this is for handling the error of the server and comes from express 
            console.log("ERROR: ", error);
            throw error;
        });

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        });

    } catch (error) {
        console.log("ERROR: ", error);
        throw error;
    }

})()

*/

// https://youtu.be/7fjOw8ApZ1I?t=18348   ==  I am here.. 

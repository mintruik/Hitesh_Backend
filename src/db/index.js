import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB =  async function connectDB(){     // mongoose will gives a return object and we also restore in a variable... 
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);  // connectionInstance ke andar humaare paas ek reponse aa raha hai, connection hone ke baad jo bhi hum responses koh hold kr skte hai yehaa pr ... 
        console.log(`Connected to MongoDB Successfully`);
        console.log(`\n MongoDB Connected !! DB HOST: ${connectionInstance.connection.host}`);
        // console.log(connectionInstance);
    } catch (error) {
        console.log("Mongodb connection FAILED: ", error);
        process.exit(1);   //alag alag process ke exit codes hai... 1 is for failure... , 0 is for success... , 2 is for some other error... 
    }       
}

export default connectDB;








// https://youtu.be/7fjOw8ApZ1I?t=19503 --> now I am here..
import mongoose, {Schema} from "mongoose"
import  jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const userSchema = new Schema(
 {
    username:{
        type: String, 
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true
    },
    email:{
        type: String, 
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    fullname:{
        type: String, 
        required: true,
        trim: true,
        index: true
    },
    avatar:{
        type: String, // cloudinary -> where we store images & videos it'll give url..
        required: true,
    },
    coverImage:{
        type: String, // cloudinary -> where we store images & videos it'll give url..      
    },
    watchHistory:[
        {
            type: Schema.Types.ObjectId,
            ref: "Video"
        }
    ],
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    type: String,
    refreshToken: {
    }
 },
 {
    timestamps: true
 }
)

userSchema.pre("save", async function(next) {
    if(!this.isModified("password")) return next();

    this.password = bcrypt.hash(this.password, 10)
    next()
} )  // this is hooks.. in mongoose.. // yehaa pe hum password inCrypt krwaa rhe hai.. jb password modified hoti hai.. 
    // by the help of bcrypt and hooks of middleware from mongoose... 

    userSchema.methods.isPasswordCorrect = async function(password){
        return await bcrypt.compare(password, this.password)
    }   // here we're checking password ... by the help of bcrypt.. 
//------------------------------------------------------------------------------
//here we're working on jsToken...
//signin token humne create kiya hai..

    userSchema.methods.generateAccessToken = function(){
        return jwt.sign(
            {
                _id: this._id,
                email: this.email,
                username: this.username,
                fullname: this.fullname
            },
            process.env.ACCESS_TOKEN_SECRET,
            {
                expiresIn: process.env.ACCESS_TOKEN_EXPIRY
            }
        )
    }
    userSchema.methods.generateRefreshToken = function(){}

export const User = mongoose.model("User", userSchema)
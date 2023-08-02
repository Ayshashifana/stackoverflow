import express from "express"
import mongoose from  "mongoose"
import cors from "cors"
import dotenv from "dotenv";



import userRoutes from "./routes/users.js"
import questionRoutes from "./routes/Question.js"
import answerRoutes from "./routes/Answers.js"




const app=express();
dotenv.config();
app.use(express.json({limit:'30mb',extended:"true"}))
app.use(express.urlencoded({limit:'30mb',extended:"true"}))
app.use(cors());
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("this is a stack overflow clone")
})

app.use("/user",userRoutes)
app.use("/questions",questionRoutes)
app.use("/answer",answerRoutes)


const API_KEY=process.env.REACT_APP_API_KEY;


app.post("/completions",async (req,res)=>{
  
   
   
    const apiRequestBody={
        "model":"gpt-3.5-turbo",
        "messages":[{role:"user",content:req.body.message}]
    }


        
    const response =    await fetch("https://api.openai.com/v1/chat/completions",{
            method:"POST",
            headers:{
                "Authorization":"Bearer "+ API_KEY,
                "Content-Type":"application/json"
            },
            body:JSON.stringify(apiRequestBody)
    
        })
        const data = await response.json()
        res.send(data)
   
})


const PORT = process.env.PORT || 5000;
const DATABASE_URL=process.env.CONNECTION_URL;



 
mongoose.connect(DATABASE_URL,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>app.listen(PORT,()=>{
        console.log(`server running on port ${PORT}.`)
    }))
    .catch((err)=>console.log(err.message))
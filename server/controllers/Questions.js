import mongoose from "mongoose";

import Question from "../models/Question.js";

export const AskQuestion=async(req,res)=>{
    const postQuestionData=req.body;
    const postQuestion=new Question(postQuestionData)
    try{
        await postQuestion.save();
        res.status(200).json("Posted a question succesfully")
    }catch(error){
        res.status(409).json("Couldn't post a new question")
    }

}

export const getAllQuestions=async(req,res)=>{
    try {
        const questionList =  await Question.find();
        
        res.status(200).json(questionList);
    } catch (error) {
        res.status(404).json({message:error.message}); 
    }
}

export const deleteQuestion= async(req,res)=>{
    const {id:_id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send("Question unavailable")
    }
    try {
        await Question.findByIdAndRemove(_id)
        res.status(200).json({message:"successfully deleted"})
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

export const voteQuestion=async(req,res)=>{
     const {id:_id}=req.params
     const {value,userId}=req.body

     if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send("Question unavailable")
    }
    try {
        const question=await Question.findById(_id)
        const upIndex=question.upVotes.findIndex((id)=>id===String(userId))
        const downIndex=question.downVotes.findIndex((id)=>id === String(userId))
         if (value==="upVotes"){
            if(downIndex !== -1){
                question.downVotes=question.downVotes.filter((id)=>id !== String(userId))
            }
            if(upIndex === -1){
                question.upVotes.push(userId)
            }else{
                question.upVotes=question.upVotes.filter((id)=>id !== String(userId))
            }
         }

         if (value==="downVotes"){
            if(upIndex !== -1){
                question.upVotes=question.upVotes.filter((id)=>id !== String(userId))
            }
            if(downIndex === -1){
                question.downVotes.push(userId)
            }else{
                question.downVotes=question.downVotes.filter((id)=>id !== String(userId))
            }
           
         }
         await Question.findByIdAndUpdate(_id,question)
         res.status(200).json({message:"voted Successfully"})

    } catch (error) {
        res.status(404).json({message:"id not found"})
        
    }
}
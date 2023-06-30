import mongoose from "mongoose";
import Question from "../models/Question.js";

export const postAnswer = async (req, res) => {
  const { id: _id } = req.params;
  const { NoOfAnswers, answerBody, userAnswered,userId} = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("question unavailable");

  }
  updateNoofQuestions(_id,NoOfAnswers)
  try {
    const updatedQuestion = await Question.findByIdAndUpdate(_id, {
      $addToSet: { answer: [{ answerBody, userAnswered,userId }] },
    });
    res.status(200).json(updatedQuestion);
  } catch (error) {
    res.status(400).json(error);
  }
};


const updateNoofQuestions = async (_id,NoOfAnswers) => {
    try {
        await Question.findByIdAndUpdate(_id,{$set :{"NoOfAnswers":NoOfAnswers}})
    } catch (error) {
        console.log(error)
    }

}


export const deleteAnswer=async(req,res)=>{
  const{id:_id}=req.params;
  const {answerId,NoOfAnswers}=req.body

  if(!mongoose.Types.ObjectId.isValid(_id)){
    return res.status(404).send("Question unavailable...")
  }
  if(!mongoose.Types.ObjectId.isValid(answerId)){
    return res.status(404).send("Answer unavailable...")
  }
  updateNoofQuestions(_id,NoOfAnswers)
  try {
    await Question.updateOne(
      {_id},{$pull:{"answer":{_id:answerId}}}
    )
    res.status(200).json({message:"successfully deleted..."})
  } catch (error) {
    res.status(404).json(error)
  }

}
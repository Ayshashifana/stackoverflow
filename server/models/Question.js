import mongoose from "mongoose"

const QuestionSchema=mongoose.Schema({
    questionTitle:{type:String,required:"Question must have Title "},
    questionBody:{type:String,required:"Question must have Body"},
    questionTags:{type:[String],required:"Question must have Tags"},
    NoOfAnswers:{type:Number,default:0},
    upVotes:{type:[String],default:[] },
    downVotes:{type:[String],default:[] },
    askedOn:{type:Date,default:Date.now},
    userId:{type:String},
    userPosted:{type:String,required:"Question must have an author"},
    answer:[{
        answerBody:String,
        userAnswered:String,
        userId:String,
        answeredOn:{type:Date,default:Date.now}
    }]
})

export default mongoose.model("Question",QuestionSchema)
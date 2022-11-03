const mongoose=require("mongoose")

const questionSchema=new mongoose.Schema(    {
    question: String,
    OptionA: String,
    OptionB: String,
    OptionC: String,
    OptionD: String,
    correctAnswerOption: String,
    attacmentImage:String,
    attacmentVideo: String
  })

const questionModel=mongoose.model("questions",questionSchema)
module.exports= questionModel
const mongoose=require("mongoose")
const express=require("express")
const cors=require("cors")
const app=express()
const questionmodel=require("./models/questionmodel")

const dburl="mongodb://localhost:27017/question"


app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())



const connectionparams={
    useNewUrlParser:true,
    useUnifiedTopology:true
}
mongoose.connect(dburl,connectionparams).then(()=>{
    console.log("connected to db");
}).catch((er)=>{
    console.log(er)
})

app.get("/",(req,res)=>res.send("hello world how are you"))


app.post("/questions", async(req,res)=>{
    const {
        question,
        OptionA,
        OptionB,
        OptionC,
        OptionD,
        correctAnswerOption,
        attacmentImage,
        attacmentVideo
    }=req.body

    const data=new questionmodel({
        "question": question,
        "OptionA": OptionA,
        "OptionB": OptionB,
        "OptionC": OptionC,
        "OptionD": OptionD,
        "correctAnswerOption": correctAnswerOption,
        "attacmentImage": attacmentImage,
        "attacmentVideo": attacmentVideo
    })
   
    await data.save()
    res.end("success")

   
})


app.get("/questions",async(req,res)=>{
    // const datas= await questionmodel.find()
   const datas = await questionmodel.aggregate([{$sample:{size:1}}])
    return res.json(datas)
})

app.listen(8080,()=>{
    console.log("server starteed at 8080");  
})
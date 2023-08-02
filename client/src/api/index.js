import axios from "axios"
// http://localhost:5000
const API= axios.create({baseURL:"https://stackflow-chat.onrender.com"})

API.interceptors.request.use((req)=>{
    if(localStorage.getItem("Profile")){
       req.headers.authorization=`Bearer ${JSON.parse(localStorage.getItem("Profile")).token}`
    }
    return req
})
 
export const logIn=(authData)=>API.post("/user/login",authData)


export const signUp=(authData)=>API.post("/user/signup",authData)

export const postQuestion=(questionData)=>API.post("/questions/Ask",questionData)

export const getAllQuestions=()=>API.get("/questions/get");

export const deleteQuestion=(id)=>API.delete(`/questions/delete/${id}`)

export const voteQuestion=(id,value,userId)=>API.patch(`/questions/votes/${id}`,{value,userId})

export const postAnswer =(id,NoOfAnswers, answerBody, userAnswered,userId)=> API.patch(`/answer/post/${id}`,{NoOfAnswers, answerBody, userAnswered,userId})

export const deleteAnswer=(id,answerId,NoOfAnswers)=>API.patch(`/answer/delete/${id}`,{answerId,NoOfAnswers})

export const fetchAllUsers=()=>API.get("/user/getAllUsers")

export const updateProfile=(id,updateDate)=>API.patch(`/user/update/${id}`,updateDate)


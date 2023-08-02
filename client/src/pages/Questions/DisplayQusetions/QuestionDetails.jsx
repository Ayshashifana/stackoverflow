import React,{useState} from "react";
import { useParams, Link,useNavigate } from "react-router-dom";
import { useSelector ,useDispatch} from "react-redux";
import { useLocation } from "react-router-dom";
import moment from "moment"
import copy from "copy-to-clipboard"

import upvote from "../../../assets/sort-up.svg";
import downvote from "../../../assets/sort-down.svg";
import Avatar from "../../../components/Avatar/Avatar";
import DisplayAnswer from "./DisplayAnswer";
import { postAnswer,deleteQuestion,voteQuestion } from "../../../actions/question.js";

import "./questionDetails.css";

const QuestionDetails = () => {
  const { id } = useParams();
  const quesList = useSelector((state) => state.questionReducer);
  console.log(quesList);

  //   console.log(id);
  // var quesList = [
  //   {
  //     _id: "1",
  //     NoOfAnswers: 3,
  //     Votes: 5,
  //     Upvotes: 1,
  //     Downvotes: 2,
  //     questionTitle: "What is javascript",
  //     questionBody: "what is javascript?",
  //     questionTags: ["java", "js", "html", "javascript", "mern"],
  //     userPosted: "aysha",
  //     askedOn: "jan 1",
  //     userId: "3",
  //     answer: [
  //       {
  //         answerBody: "answer",
  //         userAnswered: "aysha",
  //         answeredOn: "jan 4",
  //       },
  //     ],
  //   },

  //   {
  //     _id: "2",
  //     NoOfAnswers: 6,
  //     Votes: 4,
  //     Upvotes: 1,
  //     Downvotes: 2,
  //     questionTitle: "frontend frame work",
  //     questionBody: "sql library or datsbase?",
  //     questionTags: ["java", "js", "html", "javascript", "mern"],
  //     userPosted: "rida",
  //     askedOn: "jan 19",
  //     userId: "2",
  //     answer: [
  //       {
  //         answerBody: "answer",
  //         userAnswered: "aysha",
  //         answeredOn: "jan 4",
  //       },
  //     ],
  //   },

  //   {
  //     _id: "3",
  //     NoOfAnswers: 5,
  //     Votes: 7,
  //     Upvotes: 1,
  //     Downvotes: 2,
  //     questionTitle: "what does sql do?",
  //     questionBody: "stack overflow?",
  //     questionTags: ["java", "js", "html", "backend", "nodejs"],
  //     userPosted: "aysha",
  //     askedOn: "jan 1",
  //     userId: "3",
  //     answer: [
  //       {
  //         answerBody: "answer",
  //         userAnswered: "aysha",
  //         answeredOn: "jan 4",
  //       },
  //     ],
  //   },
  // ];

  const dispatch=useDispatch()
  const navigate=useNavigate()
  const [Answer, setAnswer] = useState("")
  const User = useSelector(state=>(state.currentUserReducer))

  const location = useLocation()
  const url = "https://stackflow-chat.onrender.com"

  const handlePostAns = (e,answerLength)=>{
    e.preventDefault();
    if (User===null) {
      alert ("login or signup to answer a question")
      navigate("/Auth")
    }else{
      if(Answer === ""){
        alert("enter an answer before submitting")
      }else{
        dispatch(postAnswer({id,NoOfAnswers:answerLength + 1,answerBody:Answer,userAnswered:User.result.name,userId:User?.result._id}))
      }
    }
  }

  const handleShare=()=>{
    copy(url + location.pathname)
    alert("Copied url : " + url + location.pathname)
  }

  const handleDelete=()=>{
    dispatch(deleteQuestion(id,navigate))
  }


  const handleUpVote=()=>{
    dispatch(voteQuestion(id,"upVotes",User.result._id))
  }

  const handleDownVote=()=>{
    dispatch(voteQuestion(id,"downVotes",User.result._id))
  }

  return (
    <div className="question-details-page">
      {quesList.data === null ? (
        <h1>Loading ...</h1>
      ) : (
        <>
          {quesList.data
            .filter((question) => question._id === id)
            .map((question) => (
              <div key={question._id}>
                <section className="quest-details-containers">
                  <h1>{question.questionTitle}</h1>

                  <div className="quest-detail-cont1">
                    <div className="quest-votes">
                      <img
                        src={upvote}
                        alt=""
                        width="18"
                        className="votes-icon"
                        onClick={handleUpVote}
                        />
                      <p>{question.upVotes.length - question.downVotes.length}</p>

                      <img
                        src={downvote}
                        alt=""
                        width="18"
                        className="votes-icon"
                        onClick={handleDownVote}
                      />
                    </div>

                    <div>
                      <p className="question-body">{question.questionBody}</p>

                      <div className="question-detail-tag">
                        {question.questionTags.map((tag) => (
                          <p key={tag}>{tag}</p>
                        ))}
                      </div>

                      <div className="quest-action-user">
                        <div>
                          <button type="button" onClick={handleShare}>Share</button>
                          {
                            User?.result._id === question?.userId &&
                            (
                              
                              <button type="button" onClick={handleDelete}>Delete</button>
                            )
                          }

                          
                        </div>
                        <div>
                          <p>asked {moment(question.askedOn).fromNow()}</p>
                          <Link
                            to={`/User/${question.userId}`}
                            className="user-link"
                          >
                            <Avatar backgroundColor="orange" px="8px" py="5px">
                              {" "}
                              {question.userPosted.charAt(0).toUpperCase()}{" "}
                            </Avatar>
                            <div>{question.userPosted}</div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {question.NoOfAnswers !== 0 && (
                  <section>
                    <h3>{question.NoOfAnswers} Answers</h3>
                    <DisplayAnswer key={question._id} question={question} handleShare={handleShare}/>
                  </section>
                )}

                <section className="post-ans-cont">
                  <h3>Your Answer</h3>
                  <form onSubmit={(e)=>{handlePostAns(e,question.answer.length)}}>
                    <textarea name="" id="" cols="100" rows="10" onChange={e=>setAnswer(e.target.value)}></textarea>
                    <br />
                    <input
                      type="submit"
                      className="post-ans-btn"
                      value="Post your answers"
                    />
                  </form>
                  <p>
                    Browse other Qusetions tagged
                    {question.questionTags.map((tag) => (
                      <Link to="/Tags" className="last-tag">
                        {tag}
                      </Link>
                    ))}
                    or{" "}
                    <Link
                      to="/AskQuestions"
                      style={{ textDecoration: "none", color: "#009dff" }}
                    >
                      ask your own questions.
                    </Link>{" "}
                  </p>
                </section>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default QuestionDetails;

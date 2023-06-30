import React from "react";
import Question from "./Question.jsx";

export const QuestionList = ({ questionlist }) => {
  return (
    <div>
      {questionlist?.map((question) => (
        <Question question={question} key={question._id} />
      ))}
    </div>
  );
};
export default QuestionList;

import React from "react";
import axios from 'axios';
import { useState, useEffect} from "react";
import formatTimeSince from "../formattime";
import extractLinks from "../processInput.js";
export default function QuestionPage({handlePageChange, currQuestionId}) {
  const [answers, setAnswers] = useState([]);
  const [question, setQuestion] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/get/answers/${currQuestionId}`) // adjust the endpoint if needed
    .then(response => {
      setAnswers(response.data);
    })
    .catch(error => {
      console.error('Error fetching answer details:', error);
    });

    axios.get(`http://localhost:8000/get/questions/${currQuestionId}`)
    .then(response => {
      setQuestion(response.data);
    }).catch(error => {
      console.error('Error fetching question details:', error);
    });
  },[currQuestionId]);


  return (
    <div>
      <div className="bg-gray-100 rounded-lg p-4 shadow-md mb-4 mx-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="text-gray-600">Views: {question.views}</div>
            <div className="text-gray-600">Posted by: {question.asked_by}</div>
          </div>
        </div>
        <div className="mt-2">{question.text === undefined ? '' : extractLinks(question.text)}</div>
      </div>

     {answers.map((answer) => (
        <div key={answer._id} className="bg-gray-100 rounded-lg p-4 shadow-md mb-4 mx-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="text-gray-600">Posted by: {answer.ans_by}</div>
              <div className="text-gray-600">Answered on: {formatTimeSince(answer.ans_date_time)}</div>
            </div>
          </div>
          <div className="mt-2">{extractLinks(answer.text)}</div>
        </div>
     ))}

      <div className="flex justify-between mx-14">
        <button id='post-answer' className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-1 border-blue-700 hover:border-blue-500 rounded mx-2" onClick={handlePageChange}>
          Answer questions
        </button>
      </div>
    </div>
  );
}
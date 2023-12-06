import axios from "axios";
import React, { useEffect, useState } from "react";

export default function ProfilePage() {
  // placeholder data that I use for testing this crap cus idk what backend doin 
  const [user, setUser] = useState({});
  const [answers, setAnswers] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/profile',{
      withCredentials: true
    })
    .then(response => {
      console.log(response);
      setUser(response.data.u[0]);
      setQuestions(response.data.q);
      setAnswers(response.data.a);
    }).catch(err => {
      console.log(err);
    })
  },[])

  const editQuestion = (questionId) => {
    // open up modal to edit question
    
    console.log(`Editing question with ID ${questionId}`);
  };

  
  const deleteQuestion = (questionId) => {
    // do this later
    console.log(`Deleting question with ID ${questionId}`);
  };


  const editTag = (tagId) => {
    // do later
    console.log(`Editing tag with ID ${tagId}`);
  };

  const deleteTag = (tagId) => {
    // do later
    console.log(`Deleting tag with ID ${tagId}`);
  };


  const editAnswer = (answerId) => {
    // do later
    console.log(`Editing answer with ID ${answerId}`);
  };


  const deleteAnswer = (answerId) => {
    // do later
    console.log(`Deleting answer with ID ${answerId}`);
  };

  return (
    <div className="mx-8 mt-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Profile</h2>
        
      </div>

      <div className="bg-gray-100 p-4 mt-4 rounded-md shadow-md">
        <div className="flex items-center space-x-4 mb-4">
          <div>
            <p className="text-xl font-bold">{user.username}</p>
            <p>Member since: {user.memberSince}</p>
            <p>Reputation: {user.reputation}</p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-2">My Questions</h3>
          <ul>
            {questions.map((question) => (
              <li key={question.id} className="mb-2">
                <a
                  href={`/questions/${question.id}`}
                  className="text-blue-500 hover:underline"
                >
                  {question.title}
                </a>
                <button
                  className="ml-2 text-sm text-gray-500"
                  onClick={() => editQuestion(question.id)}
                >
                  Edit
                </button>
                <button
                  className="ml-2 text-sm text-red-500"
                  onClick={() => deleteQuestion(question.id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-2">My Tags</h3>
          <ul>
            {tags.map((tag) => (
              <li key={tag.id} className="mb-2">
                <span>{tag.name}</span>
                {tag.editable && (
                  <>
                    <button
                      className="ml-2 text-sm text-gray-500"
                      onClick={() => editTag(tag.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="ml-2 text-sm text-red-500"
                      onClick={() => deleteTag(tag.id)}
                    >
                      Delete
                    </button>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-2">Questions I've Answered</h3>
          <ul>
            {answers.map((answeredQuestion) => (
              <li key={answeredQuestion.id} className="mb-2">
                <a
                  href={`/questions/${answeredQuestion.id}`}
                  className="text-blue-500 hover:underline"
                >
                  {answeredQuestion.title}
                </a>
                {/* Display user's answer */}
                <button
                  className="ml-2 text-sm text-gray-500"
                  onClick={() => editAnswer(answeredQuestion.id)}
                >
                  Edit Answer
                </button>
                <button
                  className="ml-2 text-sm text-red-500"
                  onClick={() => deleteAnswer(answeredQuestion.id)}
                >
                  Delete Answer
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

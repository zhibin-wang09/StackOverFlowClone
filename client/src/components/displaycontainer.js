import React, { useState } from 'react';
import Question from './question.js';
import TagGroup from './taggroup.js';
import AskQuestion from './askquestion.js';
import PostAnswer from './postanswer.js';
import QuestionPage from './questionpage.js';
import Login from './login.js';
import Signup from './signup.js';
import ProfilePage from './profile.js';

export default function DisplayContainer(props) {
    const { page, data, onQuestionClick, postQuestion, backToQuestionsFromTags, backToQuestions, postAnswer, handlePageChange, currQuestionId } = props;

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const indexOfLastQuestion = currentPage * itemsPerPage;
    const indexOfFirstQuestion = indexOfLastQuestion - itemsPerPage;
    const currentQuestions = data.slice(indexOfFirstQuestion, indexOfLastQuestion);

    const paginate = pageNumber => {
        setCurrentPage(pageNumber);
    };

    let displayContent = null;

    switch (page) {
        case 'question-page':
            displayContent = currentQuestions.map(d => (
                <Question
                    key={d._id}
                    qid={d._id}
                    views={d.views}
                    title={d.title}
                    askedBy={d.asked_by}
                    askDate={d.ask_date_time}
                    onQuestionClick={onQuestionClick}
                    tagIds={Object.keys(d.tags).map(t => [d.tags[t]._id, d.tags[t].name])}
                />
            ));
            break;
        case 'tag-page':
            displayContent = <TagGroup updateQuestion={postQuestion} backToQuestionsFromTags={backToQuestionsFromTags} />;
            break;
        case 'ask-question':
            console.log('ask question page gogog');
            displayContent = <AskQuestion backToQuestions={backToQuestions} askQuestion={postQuestion} />;
            break;
        case 'post-answer':
            displayContent = <PostAnswer currQuestionId={currQuestionId} backToQuestions={backToQuestions} answerQuestion={postAnswer} />;
            break;
        case 'detail':
            displayContent = <QuestionPage handlePageChange={handlePageChange} currQuestionId={currQuestionId} />;
            break;
        case 'login':
            console.log('login page gogog');
            displayContent = <Login handlePageChange={handlePageChange} />;
            break;
        case 'signup':
            displayContent = <Signup handlePageChange={handlePageChange} />;
            break;
        case'profile-page':
            displayContent = <ProfilePage />;
            break;
        default:
            break;
    }

    return (
        <div className='mx-8 mt-4'>
            {displayContent}
            {page === 'question-page' && data.length > itemsPerPage && (
                <div className="pagination-container flex justify-center mt-3">
                    <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-9">
                        Prev
                    </button>
                    <button onClick={() => paginate(currentPage + 1)} disabled={indexOfLastQuestion >= data.length} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-9">
                        Next
                    </button>
                </div>
            )}
        </div>
    );
}


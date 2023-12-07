// router that distinguish between different requests
const express = require('express');
const {postQuestion, getQuestionByKeyword ,getQuestion, updateView, getQuestionById, increaseQuestionVote, decreaseQuestionVote,
    deleteQuestion,modifyQuestion} = require('../controllers/question_controller'); // crud methods for questions
const {getAnswers, postAnswers, increaseAnswerVote, decreaseAnswerVote, deleteAnswer} = require('../controllers/answer_controller'); // crud methods for answers
const {getTag} = require('../controllers/tag_controller'); // crud method for tags
const {signup, login, logout, verify, increaseReputation, decreaseReputation,getUser, getSession,getCurrentUserInfo} = require('../controllers/account_controller'); // has all the authroization & authentication functions
const {postCommentToQuestion,postCommentToAnswer, increaseCommentVote, decreaseCommentVote} = require('../controllers/comment_controller');
const router = express.Router();

router.route('/get/questions').get(getQuestion); // retrieve questions
router.route('/get/questions/:id').get(getQuestionById); // retrieve questions by id
router.route('/post/questionskeyword').post(getQuestionByKeyword) // retrieve questions by keywords
router.route('/post/questions').post(verify,postQuestion); // add brand new question and update existing quesitions
router.route('/get/answers/:id').get(getAnswers); // retrieve answers asscoiated with a question
router.route('/post/answer/:id').post(verify,postAnswers); // add brand new answer
router.route('/post/questions/updateview/:id').post(updateView); // update the # of views of a question
router.route('/get/tags').get(getTag); // retrieve all the tags
router.route('/login').post(login);
router.route('/session').post(getSession);
router.route('/signup').post(signup);
router.route('/logout').post(logout);
router.route('/profile').get(verify, getCurrentUserInfo);
router.route('/put/increaseQuestionVote/:id').put(increaseQuestionVote);
router.route('/put/decreaseQuestionVote/:id').put(decreaseQuestionVote);
router.route('/put/increaseAnswerVote/:id').put(increaseAnswerVote);
router.route('/put/decreaseAnswerVote/:id').put(decreaseAnswerVote);
router.route('/put/increaseReq/:id').put(increaseReputation);
router.route('/put/decreaseReq/:id').put(decreaseReputation);
router.route('/user').get(getUser);
router.route('/post/commentToQuestion/:id').post(verify,postCommentToQuestion);
router.route('/post/commentToAnswer/:id').post(verify,postCommentToAnswer);
router.route('/post/increaseCommentVote/:id').post(increaseCommentVote);
router.route('/post/decreaseCommentVote/:id').post(decreaseCommentVote);
router.route('/post/deleteQuestion/:id').post(deleteQuestion);
router.route('/post/deleteAnswer/:id').post(deleteAnswer);
router.route('/put/modifyQuestion/:id').put(modifyQuestion);

module.exports = router;
// router that distinguish between different requests
const express = require('express');
const {postQuestion, getQuestionByKeyword ,getQuestion, updateView, getQuestionById, increaseQuestionVote, decreaseQuestionVote,
    deleteQuestion,modifyQuestion} = require('../controllers/question_controller'); // crud methods for questions
const {getAnswers, postAnswers, increaseAnswerVote, decreaseAnswerVote, deleteAnswer,modifyAnswer, getAnswer} = require('../controllers/answer_controller'); // crud methods for answers
const {getTag} = require('../controllers/tag_controller'); // crud method for tags
const {signup, login, logout, verify, increaseReputation, decreaseReputation,getUser, getSession,getCurrentUserInfo,getAllUser,deleteUsers,isLoggedin} = require('../controllers/account_controller'); // has all the authroization & authentication functions
const {postCommentToQuestion,postCommentToAnswer, increaseCommentVote, decreaseCommentVote} = require('../controllers/comment_controller');
const {deleteTag,getTagById,updateTagName} = require('../controllers/tag_controller');
const router = express.Router();

router.route('/get/questions').get(getQuestion); // retrieve questions
router.route('/get/questions/:id').get(getQuestionById); // retrieve questions by id
router.route('/post/questionskeyword').post(getQuestionByKeyword) // retrieve questions by keywords
router.route('/post/questions').post(verify,postQuestion); // add brand new question and update existing quesitions
router.route('/get/answers/:id').get(getAnswers); // retrieve answers asscoiated with a question
router.route('/post/answer/:id').post(verify,postAnswers); // add brand new answer
router.route('/get/answer/:id').get(getAnswer)
router.route('/post/questions/updateview/:id').post(updateView); // update the # of views of a question
router.route('/get/tags').get(getTag); // retrieve all the tags
router.route('/login').post(login);
router.route('/session').post(getSession);
router.route('/signup').post(signup);
router.route('/logout').post(logout);
router.route('/profile').get(verify, getCurrentUserInfo);
router.route('/profile/:id').get(verify,getCurrentUserInfo);
router.route('/admin/profile').get(verify,getAllUser);
router.route('/put/increaseQuestionVote/:id').put(verify,increaseQuestionVote);
router.route('/put/decreaseQuestionVote/:id').put(verify,decreaseQuestionVote);
router.route('/put/increaseAnswerVote/:id').put(verify,increaseAnswerVote);
router.route('/put/decreaseAnswerVote/:id').put(verify,decreaseAnswerVote);
router.route('/put/increaseReq/:id').put(increaseReputation);
router.route('/put/decreaseReq/:id').put(decreaseReputation);
router.route('/user').get(getUser);
router.route('/post/commentToQuestion/:id').post(verify,postCommentToQuestion);
router.route('/post/commentToAnswer/:id').post(verify,postCommentToAnswer);
router.route('/post/increaseCommentVote/:id').post(verify,increaseCommentVote);
router.route('/post/decreaseCommentVote/:id').post(verify,decreaseCommentVote);
router.route('/post/deleteQuestion/:id').post(verify,deleteQuestion);
router.route('/post/deleteAnswer/:id').post(verify,deleteAnswer);
router.route('/put/modifyQuestion/:id').put(verify,modifyQuestion);
router.route('/put/modifyAnswer/:id').put(verify,modifyAnswer);
router.route('/post/deleteUser/:id').post(verify, deleteUsers);
router.route('/post/deleteTag/:id').post(verify,deleteTag);
router.route('/get/tag/:id').get(getTagById);
router.route('/put/tagname/:id').put(updateTagName)
router.route('/isloggedin').get(isLoggedin);

module.exports = router;
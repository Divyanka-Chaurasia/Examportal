package com.example.demo.Service;

import java.util.List;

import com.example.demo.entity.Question;
import com.example.demo.entity.Quiz;
import com.example.demo.payload.QuestionsRequest;
import com.example.demo.payload.QuestionsResponse;
import com.example.demo.payload.matchAnswer;

public interface IQuestionService {

	public Question addQuestion(QuestionsRequest questionRequest,String quizId) throws Exception;
	
	public Question updateQuestion(Question question,String quesId) throws Exception;
	
	public Question getQuestion(String quesId) throws Exception;
	
	public List<Question> getAllQuestion();
	
	public void deleteQuestion(String quesId) throws Exception;
	
	public List<QuestionsResponse> getQuestionOfQuiz(String quizId) throws Exception;

	public Object matchAnswer(matchAnswer matchAnswer);
}

package com.example.demo.Service;

import java.util.List;

import com.example.demo.entity.Quiz;
import com.example.demo.payload.QuizzRequest;

public interface IQuiz {

	public Quiz addQuiz(QuizzRequest quiz) throws Exception;
	
	public Quiz updateQuiz(Quiz quiz,String quizId) throws Exception;
	
	public List<Quiz> getQuizzes();
	
	public Quiz getQUiz(String quizId) throws Exception;
	
	public void deleteQuiz(String quizId) throws Exception;

	public List<Quiz> getQuizOfCategory(String cid);
}

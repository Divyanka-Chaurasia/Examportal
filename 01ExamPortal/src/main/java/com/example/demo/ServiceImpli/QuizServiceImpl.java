package com.example.demo.ServiceImpli;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.example.demo.Repo.ICategoryRepo;
import com.example.demo.Repo.IQuizRepo;
import com.example.demo.Service.IQuiz;
import com.example.demo.entity.Category;
import com.example.demo.entity.Quiz;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.payload.QuizzRequest;
import com.example.demo.util.AppConstant;

@Service
public class QuizServiceImpl implements IQuiz {

	@Autowired
	private IQuizRepo quizRepo;
	
	@Autowired
	private ICategoryRepo catRepo;
	@Override
	public Quiz addQuiz(QuizzRequest quiz) throws Exception {
		 
		Quiz q=quizReqToQuiz(quiz);
	return	quizRepo.save(q);
		
	}

	 public Quiz quizReqToQuiz(QuizzRequest quizRea)
	 {
		 Quiz quiz = new Quiz();
		 quiz.setQid(quizRea.getCid());
		 Category category = catRepo.findById(quizRea.getCid()).orElseThrow(()-> new ResourceNotFoundException(AppConstant.QUIZ_NOT_FOUND));
		 quiz.setCategory(category);
		 quiz.setDiscription(quizRea.getDiscription());
		 quiz.setMaxMarks(quizRea.getMaxMarks());
		 quiz.setNumberOfQuestion(quizRea.getNumberOfQuestion());
		 quiz.setTitle(quizRea.getTitle());
		 return quiz;
	 }
	
	@Override
	public Quiz updateQuiz(Quiz quiz,String quizId) throws Exception {
		Quiz newQuiz = quizRepo.findById(quizId).orElseThrow(()-> new ResourceNotFoundException(AppConstant.QUIZ_NOT_FOUND));
		System.err.println(quiz+"quiz old");
		newQuiz.setActive(false);
		newQuiz.setDiscription(quiz.getDiscription());
		newQuiz.setMaxMarks(quiz.getMaxMarks());
		newQuiz.setNumberOfQuestion(quiz.getNumberOfQuestion());
		newQuiz.setQuestion(quiz.getQuestion());
		newQuiz.setTitle(quiz.getTitle());
		quizRepo.save(newQuiz);
		System.err.println(newQuiz+"new quiz");
		return newQuiz;
	}

	@Override
	public List<Quiz> getQuizzes() {
		return quizRepo.findAll();
	}

	@Override
	public Quiz getQUiz(String quizId) throws Exception {
		Quiz quiz = quizRepo.findById(quizId).orElseThrow(()-> new ResourceNotFoundException(AppConstant.QUIZ_NOT_FOUND));
		return quiz;
	}

	@Override
	public void deleteQuiz(String quizId) throws Exception {
		Quiz quiz = quizRepo.findById(quizId).orElseThrow(()-> new ResourceNotFoundException(AppConstant.QUIZ_NOT_FOUND));
		quizRepo.delete(quiz);
	}

	@Override
	public List<Quiz> getQuizOfCategory(String cid) {
			Category category = catRepo.findById(cid).orElseThrow(()-> new ResourceNotFoundException(AppConstant.CATEGORY_NOT_FOUND));
			List<Quiz> quizzes = quizRepo.findByCategory(category);
		return quizzes;
	}
	
	

}
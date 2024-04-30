package com.example.demo.controller;
import java.util.ArrayList;

import java.util.Collections;
import java.util.List;
import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.Service.IQuestionService;
import com.example.demo.Service.IQuiz;
import com.example.demo.entity.Question;
import com.example.demo.entity.Quiz;
import com.example.demo.payload.QuestionsRequest;
import com.example.demo.payload.QuestionsResponse;
import com.example.demo.payload.matchAnswer;
@RequestMapping("/question")
@RestController
@CrossOrigin
public class QuestionController {

	@Autowired
	private IQuestionService quesService;
	
	@Autowired
	private IQuiz quizService;
	
	
	
	@PostMapping("/")
	public ResponseEntity<Question> createQuestion(@RequestBody QuestionsRequest questionRequest) throws Exception
	{
		String quizId = questionRequest.getQuizId();
		System.err.println(quizId);
		return new ResponseEntity<>(quesService.addQuestion(questionRequest, quizId),HttpStatus.CREATED);
	}
	@GetMapping("/{quesId}")
	public ResponseEntity<Question> getQuestion(@PathVariable String quesId) throws Exception
	{
		return new ResponseEntity<>(quesService.getQuestion(quesId),HttpStatus.OK);
	}
	@PutMapping("/{quesId}")
	public ResponseEntity<Question> updateQuestion(@PathVariable String quesId,@RequestBody Question question) throws Exception
	{
		return new ResponseEntity<>(quesService.updateQuestion(question, quesId),HttpStatus.OK);
	}
	@GetMapping("/delete/{quesId}")
	public ResponseEntity<String> deleteQuestion(@PathVariable String quesId) throws Exception
	{
		quesService.deleteQuestion(quesId);
		return new ResponseEntity<>("question deleted",HttpStatus.OK);
	}
	@GetMapping("/getAll")
	public ResponseEntity<List<Question>> allQuestion()
	{
		return new ResponseEntity<>(quesService.getAllQuestion(),HttpStatus.OK);		
	}
	
//	@GetMapping("/getQuestion/{quizId}")
//	public ResponseEntity<List<Question>> getQuestionBYQuiz(@PathVariable String quizId) throws Exception
//	{
////		return new ResponseEntity<>(quesService.getQuestionOfQuiz(quizId),HttpStatus.OK);		
//		System.err.println("get questions");
//		Quiz quiz = quizService.getQUiz(quizId);
//		Set<Question>  question = quiz.getQuestion();
//		List list = new ArrayList<>(question);
//		if(list.size() > Integer.parseInt(quiz.getNumberOfQuestion())) {
//			list = list.subList(0, Integer.parseInt(quiz.getNumberOfQuestion()+1));
//		}
//		Collections.shuffle(list);
//		return ResponseEntity.ok(list);
//	}
	@GetMapping("/getQuestion/all/{quizId}")
	public ResponseEntity<List<QuestionsResponse>> getQuestionByQuizAdmin(@PathVariable String quizId) throws Exception
	{
		return new ResponseEntity<>(quesService.getQuestionOfQuiz(quizId),HttpStatus.OK);
	}
	
	@PostMapping("/match")
	public ResponseEntity<?> matchAnswer(@RequestBody matchAnswer matchAnswer)
	{
		return new ResponseEntity<>(quesService.matchAnswer(matchAnswer),HttpStatus.OK);
	}
}
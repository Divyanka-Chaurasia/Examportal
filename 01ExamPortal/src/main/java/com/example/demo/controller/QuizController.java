package com.example.demo.controller;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.Service.IQuiz;
import com.example.demo.entity.Quiz;
import com.example.demo.payload.QuizzRequest;
@RestController
@RequestMapping("/quiz")
@CrossOrigin
public class QuizController {
	@Autowired
	private IQuiz quizService;	
	@PostMapping("/create")
	public ResponseEntity<Quiz> createQuiz(@RequestBody QuizzRequest quiz) throws Exception
	{
		return new ResponseEntity<>(quizService.addQuiz(quiz),HttpStatus.CREATED);
	}
	@GetMapping("/get/{quizId}")
	public ResponseEntity<Quiz> getQuiz(@PathVariable String quizId) throws Exception
	{
		return new ResponseEntity<>(quizService.getQUiz(quizId),HttpStatus.OK);
	}
	
	@PutMapping("/update")
	public ResponseEntity<Quiz> updateQuiz(@RequestParam String quizId,@RequestBody Quiz quiz) throws Exception
	{
		return new ResponseEntity<>(quizService.updateQuiz(quiz, quizId),HttpStatus.OK);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Map<String,Object>> deleteQuiz(@PathVariable String id) throws Exception
	{
		quizService.deleteQuiz(id);
		String msg = "quiz is delted";
		Map<String,Object> map = new HashMap<>();
		return new ResponseEntity<>(map,HttpStatus.OK);
	}
	@GetMapping("/")
	public ResponseEntity<List<Quiz>> allquiz()
	{
		return new ResponseEntity<>(quizService.getQuizzes(),HttpStatus.OK);		
	}
	
	@GetMapping("/getQuiz/{cid}")
	public ResponseEntity<?> getQuizzesOfCategory(@PathVariable String cid)
	{
		return new ResponseEntity<>(quizService.getQuizOfCategory(cid),HttpStatus.OK);
	}
	
}

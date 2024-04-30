package com.example.demo.ServiceImpli;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.Repo.IQuestionRepo;
import com.example.demo.Repo.IQuizRepo;
import com.example.demo.Service.IQuestionService;
import com.example.demo.entity.Question;
import com.example.demo.entity.Quiz;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.payload.QuestionsRequest;
import com.example.demo.payload.QuestionsResponse;
import com.example.demo.util.AppConstant;
import com.example.demo.payload.matchAnswer;
@Service
public class QuesServiceImpl implements IQuestionService {

	@Autowired
	private IQuestionRepo quesRepo;
	
	@Autowired
	private IQuizRepo quizRepo;
	
	@Override
	public Question addQuestion(QuestionsRequest questionRequest, String quizId) throws Exception {
	    Quiz quiz = quizRepo.findById(quizId).orElseThrow(() -> new ResourceNotFoundException(AppConstant.QUES_NOT_FOUND));
	    questionRequest.setQuizId(quizId);
	    Question question = this.questionRequestToQuestion(questionRequest, quiz);
	    quesRepo.save(question);
	    return question;
	}
	
	public Question questionRequestToQuestion(QuestionsRequest questionRequest, Quiz quiz) {
	    Question question = new Question();
	    question.setContent(questionRequest.getContent());
	    question.setAnswer(questionRequest.getAnswer());
	    question.setImage(questionRequest.getImage());
	    question.setOption1(questionRequest.getOption1());
	    question.setOption2(questionRequest.getOption2());
	    question.setOption3(questionRequest.getOption3());
	    question.setOption4(questionRequest.getOption4());
	    question.setQuiz(quiz);
	    return question;
	}
	
	public QuestionsResponse questionToQuestionResponse(Question question,String quizId) {
	    QuestionsResponse questionResponse = new QuestionsResponse();
	    questionResponse.setContent(question.getContent());
	    questionResponse.setImage(question.getImage());
	    questionResponse.setOption1(question.getOption1());
	    questionResponse.setOption2(question.getOption2());
	    questionResponse.setOption3(question.getOption3());
	    questionResponse.setOption4(question.getOption4());
	    questionResponse.setQuizId(quizId);
	    questionResponse.setQuesId(question.getQuesId());
	    return questionResponse;
	}
	
	@Override
	public Question updateQuestion(Question question, String quesId) throws Exception {
	  Question newQuestion = quesRepo.findById(quesId).orElseThrow(()-> new ResourceNotFoundException(AppConstant.QUES_NOT_FOUND));
	  newQuestion.setAnswer(question.getAnswer());
	  newQuestion.setContent(question.getContent());
	  newQuestion.setImage(question.getImage());
	  newQuestion.setOption1(question.getOption1());
	  newQuestion.setOption2(question.getOption2());
	  newQuestion.setOption3(question.getOption3());
	  newQuestion.setOption4(question.getOption4());
	  quesRepo.save(newQuestion);
	  return newQuestion;
	}

	@Override
	public Question getQuestion(String quesId) throws Exception {
		 Question newQuestion = quesRepo.findById(quesId).orElseThrow(()-> new ResourceNotFoundException(AppConstant.QUES_NOT_FOUND));
		return newQuestion;
	}
	@Override
	public List<Question> getAllQuestion() {
		
		return quesRepo.findAll();
	}
	@Override
	public void deleteQuestion(String quesId) throws Exception {
		 Question newQuestion = quesRepo.findById(quesId).orElseThrow(()-> new ResourceNotFoundException(AppConstant.QUES_NOT_FOUND));	
         quesRepo.delete(newQuestion);
	}
	@Override
	public List<QuestionsResponse> getQuestionOfQuiz(String quizId) throws Exception {
	    Quiz quiz = quizRepo.findById(quizId).orElseThrow(() -> new ResourceNotFoundException(AppConstant.QUES_NOT_FOUND));
	    List<Question> questions = quesRepo.findByQuiz(quiz);
	    List<QuestionsResponse> questionsResponses = new ArrayList<>();
	    for (Question question : questions) {
	        QuestionsResponse questionResponse = questionToQuestionResponse(question, quizId);
	        questionsResponses.add(questionResponse);
	    }
	    return questionsResponses;
	}
	@Override
	public Map<String, Object> matchAnswer(matchAnswer matchAnswer) {
	    Map<String, Object> map = new HashMap<>();
	    Long totalCorrectAns = 0L;
	    Long attempted = 0L;
	    Long marksGot = 0L;
	    Long singleMarks = 0L;

	    Quiz quiz = quizRepo.findById(matchAnswer.getQuizId())
	                        .orElseThrow(() -> new ResourceNotFoundException(AppConstant.QUIZ_NOT_FOUND));
	    Question question = quesRepo.findById(matchAnswer.getQuesId())
	                                 .orElseThrow(() -> new ResourceNotFoundException(AppConstant.QUES_NOT_FOUND));
	    String givenAnswer = matchAnswer.getGivenAnswer();
        List<Question> listOfQuestion = quesRepo.findAll();
	    if (question.getAnswer().equals(givenAnswer)) {
	        
	    	totalCorrectAns++;
	    	singleMarks=question.getQuiz().getMaxMarks()/listOfQuestion.size();
            marksGot+=singleMarks;
            if(givenAnswer.trim() != null)
            {
            	attempted++;
            }
            else 
            	throw new ResourceNotFoundException(AppConstant.ANSWER_NOT_FOUND);
	        map.put("totalCorrectAns", totalCorrectAns);
	        map.put("singleMarks",singleMarks);
	        map.put("marksGot", marksGot);
	        map.put("attempted", attempted);
	    } else {
	        map.put("msg", "Incorrect answer");
	    }
	    
	    map.put("marksGot", marksGot); // Add total marks obtained to the map

	    return map;
	}

}
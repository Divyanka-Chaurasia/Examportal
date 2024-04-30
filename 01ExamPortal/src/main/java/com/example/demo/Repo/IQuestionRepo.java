package com.example.demo.Repo;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.entity.Question;
import com.example.demo.entity.Quiz;
public interface IQuestionRepo extends JpaRepository<Question, String> {

	List<Question> findByQuiz(Quiz quiz);

	Question findByAnswer(String givenAnswer);

}

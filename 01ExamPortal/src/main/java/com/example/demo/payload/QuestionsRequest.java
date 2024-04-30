package com.example.demo.payload;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class QuestionsRequest {

	private String quesId;
	private String content;
	private String answer;
	private String image;
	private String option1;
	private String option2;
	private String option3;
	private String option4;
	private String quizId;
}

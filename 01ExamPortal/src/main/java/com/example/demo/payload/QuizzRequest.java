package com.example.demo.payload;

import com.example.demo.entity.Category;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.FetchType;
import jakarta.persistence.ManyToOne;
import lombok.Data;

@Data
public class QuizzRequest {
	private String qid;
	private String title;
	private String discription;
	private Long maxMarks;
	private  Long numberOfQuestion;
	private Boolean active=true;
	

	private String cid;
}

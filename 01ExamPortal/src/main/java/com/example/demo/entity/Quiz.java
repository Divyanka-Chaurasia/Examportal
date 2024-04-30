package com.example.demo.entity;
import java.util.HashSet;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import java.util.Set;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@ToString
public class Quiz {

	@Id
	@GeneratedValue(strategy = GenerationType.UUID)
	private String qid;
	private String title;
	
	private String discription;
	private Long maxMarks;
	private  Long numberOfQuestion;
	private Boolean active=true;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JsonIgnoreProperties("quize")
	private Category category;
	
	@OneToMany(fetch = FetchType.LAZY,cascade = CascadeType.ALL,mappedBy = "quiz")
	@JsonIgnore
	private Set<Question> question=new HashSet<>();
}
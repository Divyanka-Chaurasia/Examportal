package com.example.demo.entity;

import java.util.LinkedHashSet;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.util.Set;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Category {

	@Id
	@GeneratedValue(strategy = GenerationType.UUID)
	private String cid;
	
	@Column(unique = true)
	private String catTitle;
	
	private String catDescription;
	
	@OneToMany(mappedBy = "category",cascade = CascadeType.ALL)
	private Set<Quiz> quize=new LinkedHashSet<>();
}

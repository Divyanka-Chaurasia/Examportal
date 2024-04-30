package com.example.demo.Repo;



import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Category;
import com.example.demo.entity.Quiz;


public interface IQuizRepo extends JpaRepository<Quiz, String> {



	List<Quiz> findByCategory(Category category);



}

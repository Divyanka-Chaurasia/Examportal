package com.example.demo.Repo;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Category;
import com.example.demo.entity.Quiz;

public interface ICategoryRepo extends JpaRepository<Category, String> {

	Optional<Category> findByCatTitle(String cid);

}

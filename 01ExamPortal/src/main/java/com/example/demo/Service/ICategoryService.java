package com.example.demo.Service;

import java.util.List;

import java.util.Set;

import com.example.demo.entity.Category;

public interface ICategoryService {

	//create category
	public Category createCategory(Category category) throws Exception;
	//update category
	public Category updateCategory(Category category, String catId) throws Exception;
	//get category 
	public Category getCategory(String catId) throws Exception;
	// get all category
	public List<Category> listCategry();
	//delete category
	public void deleteCategory(String catId) throws Exception;
}

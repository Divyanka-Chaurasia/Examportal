package com.example.demo.controller;
import java.util.List;
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
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.Service.ICategoryService;
import com.example.demo.entity.Category;

@RestController
@RequestMapping("/category")
@CrossOrigin("*")
public class CategoryController {

	@Autowired
	private ICategoryService categoryService;
	
	@PostMapping
	public ResponseEntity<Category> createCategory(@RequestBody Category category) throws Exception
	{
		return new ResponseEntity<>(categoryService.createCategory(category),HttpStatus.CREATED);
	}
	
	@GetMapping("/{categoryId}")
	public ResponseEntity<Category> getCategory(@PathVariable String categoryId) throws Exception
	{
		return new ResponseEntity<>(categoryService.getCategory(categoryId),HttpStatus.OK);
	}
	
	@PutMapping("/{categoryId}")
	public ResponseEntity<Category> updateCategory(@PathVariable String categoryId,@RequestBody Category category) throws Exception
	{
		return new ResponseEntity<>(categoryService.updateCategory(category, categoryId),HttpStatus.OK);
	}
	
	@DeleteMapping("/{catId}")
	public ResponseEntity<String> deleteCategory(@PathVariable String catId) throws Exception
	{
		categoryService.deleteCategory(catId);
		return new ResponseEntity<>("category deleted",HttpStatus.OK);
	}
	@GetMapping("/getAllCategory")
	public ResponseEntity<List<Category>> allCategory()
	{
		return new ResponseEntity<>(categoryService.listCategry(),HttpStatus.OK);		
	}
	
}
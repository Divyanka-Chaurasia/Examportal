package com.example.demo.ServiceImpli;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.Repo.ICategoryRepo;
import com.example.demo.Service.ICategoryService;
import com.example.demo.entity.Category;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.util.AppConstant;

@Service
public class CategoryServiceImpl implements ICategoryService {

	@Autowired
	private ICategoryRepo catRepo;
	
	@Override
	public Category createCategory(Category category) throws Exception {
		Optional<Category> existsCat = catRepo.findByCatTitle(category.getCid());
		if(existsCat.isPresent())
		{
		    throw new ResourceNotFoundException(AppConstant.CATEGORY_NOT_FOUND);
		}
		catRepo.save(category);
		return category;		
	}
	@Override
	public Category updateCategory(Category category, String catId) throws Exception {
		Category newCategory = catRepo.findById(catId).orElseThrow(()-> new ResourceNotFoundException(AppConstant.CATEGORY_NOT_FOUND));
		newCategory.setCatDescription(category.getCatDescription());
		newCategory.setCatTitle(category.getCatTitle());
		catRepo.save(newCategory);
		return newCategory;
	}

	@Override
	public Category getCategory(String catId) throws Exception {
	  Category category = catRepo.findById(catId).orElseThrow(()-> new ResourceNotFoundException(AppConstant.CATEGORY_NOT_FOUND));
	  return category;
	}
	
	@Override
	public void deleteCategory(String catId) throws Exception {
		Category category = catRepo.findById(catId).orElseThrow(()-> new ResourceNotFoundException(AppConstant.CATEGORY_NOT_FOUND));
		catRepo.delete(category);

	}
	@Override
	public List<Category> listCategry() {
		return catRepo.findAll();
	}

}

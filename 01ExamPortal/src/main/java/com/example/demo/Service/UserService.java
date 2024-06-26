package com.example.demo.Service;
import java.util.Set;

import com.example.demo.entity.User;
import com.example.demo.entity.UserRole;

public interface UserService {

	//creating user
	public User createUser(User user,Set<UserRole> userRole) throws Exception;

	//get user by username
	public User getUser(String username);
	
	//delete user by id
	public void deleteUser(Long id);
}

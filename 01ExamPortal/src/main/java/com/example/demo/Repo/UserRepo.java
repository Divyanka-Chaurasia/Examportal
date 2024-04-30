package com.example.demo.Repo;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.entity.User;
public interface UserRepo extends JpaRepository<User, Long> {
	public Optional<User> findByuserName(String uname);

	public Optional<User> findByuserEmail(String string);
	
}

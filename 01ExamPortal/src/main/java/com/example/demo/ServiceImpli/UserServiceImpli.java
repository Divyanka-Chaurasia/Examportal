package com.example.demo.ServiceImpli;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import com.example.demo.Repo.RoleRepo;
import com.example.demo.Repo.UserRepo;
import com.example.demo.Service.UserService;
import com.example.demo.entity.User;
import com.example.demo.entity.UserRole;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.util.AppConstant;
@Service
public class UserServiceImpli implements UserService ,UserDetailsService{
	@Autowired
    private UserRepo urepo;
	@Autowired
    private RoleRepo rrepo;	


	@Autowired
	private BCryptPasswordEncoder passwordEncoder;
	
	@Override
	public User createUser(User user, Set<UserRole> userRoles) throws Exception {
		
	System.err.println(user.getUserEmail());
	   String encPwd=passwordEncoder.encode(user.getUserPassword());
	   user.setUserPassword(encPwd);
//	   Optional<User> local = this.urepo.findByuserName(user.getUserName());
	   
	   Optional<User> findByuserEmail = urepo.findByuserEmail(user.getUserEmail());
	   System.err.println(findByuserEmail);
	  
	   if(findByuserEmail.isEmpty())
	   {
		   
		   System.err.println("inside else");
			for(UserRole ur : userRoles)
			{
				rrepo.save(ur.getRole());
			}			
		     //User create
			user.getUserRoles().addAll(userRoles);
			user=this.urepo.save(user);	
	   }
//		if(local.isPresent())
//		{
//			System.out.println("User is already there !!");
//			throw new Exception("user already present !!");
//		}
		else 
		{		
			System.err.println("USER ALREADY RAGISTERED");
			   throw new ResourceNotFoundException(AppConstant.USER_NOT_FOUND);		
		}		
		return user;
	}
	/***
	 * get user by user name
	 */
	@Override
	public User getUser(String username) {
		return urepo.findByuserName(username).get();
	}
	
	@Override
	public void deleteUser(Long id) {
		this.urepo.deleteById(id);
	}
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Optional<User> optional=urepo.findByuserName(username);
		if(optional.isEmpty())
		{
			throw new UsernameNotFoundException(username +"NOT EXIST");
		}
		User user=optional.get();
		List<GrantedAuthority> authorities= user.getUserRoles()
				.stream()
				.map(role->new SimpleGrantedAuthority(role.getRole().getRoleName()))
				.collect(Collectors.toList());
		return  new org.springframework.security.core.userdetails.User(username,user.getUserPassword(),authorities);
	}
}

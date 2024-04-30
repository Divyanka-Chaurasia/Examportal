package com.example.demo.Runner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import com.example.demo.Service.UserService;
//@Component
public class UserRunner implements CommandLineRunner {
	@Autowired(required = true)
	private UserService service;
	@Override
	public void run(String... args) throws Exception 
	{		
//		User u = new User();
//		u.setFirstName("Deepak");
//		u.setLastName("Bhati");
//		u.setUserName("Deepak");
//		u.setPassword("55555");
//		u.setPhone("123456789");
//		u.setEmail("dish@gmail.com");
//		u.setProfile("default.png");	
//		
//		Role r1 = new Role();
//		r1.setRoleId(101l);
//		r1.setRoleName("Employee");
//		
//        Set<UserRole> userRoleSet = new HashSet<>();
//        
//       UserRole userRole = new UserRole();
//        userRole.setUser(u);
//        userRole.setRole(r1);
//        
//        userRoleSet.add(userRole);
//        this.service.createUser(u, userRoleSet); 
//        System.out.println(u);
	}
}
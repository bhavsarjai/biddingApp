package com.bid.microservice;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
//@RequestMapping("/users")
@CrossOrigin(origins="http://localhost:4200")
public class UserController {
	Logger log = LoggerFactory.getLogger(UserController.class);

	@Autowired
	private UserService userService;
	
	@RequestMapping(value="/users/save",method=RequestMethod.POST)
	public User createUser(@RequestBody User user)
	{
		log.error("creating user");
		return userService.create(user);
	}
	
	@RequestMapping(value="/users/{id}" , method=RequestMethod.GET)
	public User getUser(@PathVariable("id") long id)
	{
		log.error("get user");
		return userService.findByID(id);
	}
	
	@RequestMapping(value="/users/login" , method=RequestMethod.GET)	
	public User login(@RequestParam("name") String name, @RequestParam("password") String password, @RequestParam("role") String role)
	{
		log.error("login user");
		User user = userService.login(name, password, role);
		log.error("user info "+user);
		return user;
	}
}

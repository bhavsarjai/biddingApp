package com.bid.microservice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

	@Autowired
	UserRepository userRepo;
	
	public User create(User user)
	{
		return userRepo.save(user);
	}
	
	public User delete(long id)
	{
		User findOne = userRepo.findOne(id);
		if (findOne != null)
		{
			userRepo.delete(findOne);
		}
		return findOne;
	}
	
	public List<User> findAll()
	{
		return userRepo.findAll();
	}
	
	public User findByID(long id)
	{
		return userRepo.findOne(id);
	}
	
	public User login(String name, String password, String role)
	{
		List<User> all = userRepo.findAll();
		
		for (User user: all)
		{
			if (user.getName().equals(name) && user.getPassword().equals(password) && user.getRole().equals(role))
			{
				return user;
			}
		}
		return null;
	}
}

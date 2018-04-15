package com.bid.microservice;

import java.util.List;

import org.springframework.data.repository.Repository;

public interface UserRepository extends Repository<User, Long> {

	public void delete(User user);
	public List<User> findAll();
	public User findOne(Long id);
	public User save(User user);
}

package com.bid.microservice;

import org.springframework.data.repository.CrudRepository;

public interface BidTransRepo extends CrudRepository<BidTransaction, String>{
	

}

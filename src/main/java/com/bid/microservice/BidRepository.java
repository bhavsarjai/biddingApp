package com.bid.microservice;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface BidRepository extends JpaRepository<Bid, String> {

}

package com.bid.microservice;

import java.io.IOException;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;

@RestController
@CrossOrigin(origins="http://localhost:4200")

public class BidController {

	@Autowired
	private BidService bidService;
	Logger log = LoggerFactory.getLogger(BidController.class);

	@RequestMapping(value="/bid/create", method=RequestMethod.POST)
	public void createBid(@RequestBody String bidJson) throws JsonParseException, JsonMappingException, IOException
	{
		log.error("creating bid "+bidJson);
		bidService.create(bidJson);
	}
	

	@RequestMapping(value="/bid/{title}", method=RequestMethod.GET)
	public Bid getBid(@PathVariable("title") String title)
	{
		log.error("getting bid");
		return bidService.findByID(title);
	}
	
	@RequestMapping(value="/bid/update", method=RequestMethod.PUT)
	public void updateBid(@RequestBody String bidJson) throws Exception
	{
		log.error("updating bid "+bidJson);
		bidService.update(bidJson);
	}
	/*@RequestMapping(value="/bid", method=RequestMethod.GET)
	public List<Bid> getAllBids()
	{
		log.error("getting all bids");
		
		return bidService.findAll();
	}*/
}

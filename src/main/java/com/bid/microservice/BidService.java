package com.bid.microservice;

import java.io.IOException;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class BidService {

    ObjectMapper mapper = new ObjectMapper();

	Logger log = LoggerFactory.getLogger(BidService.class);
	@Autowired
	private BidRepository bidRepo;
	@Autowired
	private BidTransRepo bidTransRepo;
	@Autowired
	private LeaderBoardController lbc;
	
	public void create(String bidJson) throws JsonParseException, JsonMappingException, IOException
	{
		Bid bid = mapper.readValue(bidJson, Bid.class);
		
		for (BidItem bidItem : bid.getBidItems())
		{
			bidItem.setBid(bid);
		}
		bidRepo.save(bid);
	}
	
	public Bid delete(String title)
	{
		Bid findOne = bidRepo.findOne(title);
		if (findOne != null)
		{
			bidRepo.delete(findOne);
		}
		return findOne;
	}
	
	/*public List<Bid> findAll()
	{
		List<Bid> queriedBids = new ArrayList<Bid>();
		List<Bid> allBids = bidRepo.findAll();
		log.error("finding all bids");
		for (Bid bid : allBids)
		{
			log.error(bid.toString());
			Bid queriedBid = new Bid(bid.getTitle(), bid.getStartDate(), bid.getEndDate());
			List<BidItem> bidItems = bid.getBidItems();
			for (BidItem bidItem : bidItems)
			{
				log.error(bidItem.toString());
				BidItem queryBidItem = new BidItem(bidItem.getItem(), bidItem.getDesc(), bidItem.getMinAmt());
				queryBidItem.setBid(null);
				queriedBid.addBidItem(queryBidItem);
			}
			queriedBids.add(queriedBid);
			
		}
		return queriedBids;
	}*/
	
	public Bid findByID(String title)
	{
		Bid bid = bidRepo.findOne(title);
		Bid queriedBid = new Bid(bid.getTitle(), bid.getStartDate(), bid.getEndDate());
		List<BidItem> bidItems = bid.getBidItems();
		for (BidItem bidItem : bidItems)
		{
			BidItem queryBidItem = new BidItem(bidItem.getItem(), bidItem.getDesc(), bidItem.getMinAmt());
			queryBidItem.setBid(null);
			queriedBid.addBidItem(queryBidItem);
		}
		return queriedBid;
	}

	public void update(String bidJson) throws Exception 
	{
		BidTransaction bidTrans = mapper.readValue(bidJson, BidTransaction.class);
			
		bidTransRepo.save(bidTrans);
		
		lbc.send(bidTrans);
	}
}

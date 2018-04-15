package com.bid.microservice;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;


@Entity
@Table(name = "bid")
public class Bid {
	
	@Id
	private String title;
	@Column
	private long startDate;
	@Column
	private long endDate;
	@OneToMany(mappedBy = "myBid", cascade = {CascadeType.ALL})
	private List<BidItem> bidItems = new ArrayList<BidItem>();
	
	public Bid()
	{
		super();
	}
		
	public Bid(String title, long startDate, long endDate) {
		this.title = title;
		this.startDate = startDate;
		this.endDate = endDate;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public long getStartDate() {
		return startDate;
	}
	public void setStartDate(long startDate) {
		this.startDate = startDate;
	}
	public long getEndDate() {
		return endDate;
	}
	public void setEndDate(long endDate) {
		this.endDate = endDate;
	}
	public List<BidItem> getBidItems() {
		return bidItems;
	}

	public String toString()
	{
		StringBuffer sb = new StringBuffer();
		sb.append("title "+title+"\n");
		sb.append("startDate "+startDate+"\n");
		sb.append("endDate "+endDate+"\n");
		for (BidItem item: bidItems)
		{
			sb.append(item.toString());
		}
		return sb.toString();
	}

	public void addBidItem(BidItem bidItem) {
		bidItems.add(bidItem);
	}

}

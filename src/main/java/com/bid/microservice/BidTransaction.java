package com.bid.microservice;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table (name="bidtransaction")
public class BidTransaction {

	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	@Column
	private double bidAmt;
	@Column 
	private String user;
	@Column
	private String bidTitle;
	@Column
	private String bidItem;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public double getBidAmt() {
		return bidAmt;
	}
	public void setBidAmt(double bidAmt) {
		this.bidAmt = bidAmt;
	}
	public String getUser() {
		return user;
	}
	public void setUser(String user) {
		this.user = user;
	}
	public String getBidTitle() {
		return bidTitle;
	}
	public void setBidTitle(String bidTitle) {
		this.bidTitle = bidTitle;
	}
	public String getBidItem() {
		return bidItem;
	}
	public void setBidItem(String bidItem) {
		this.bidItem = bidItem;
	}

	
}

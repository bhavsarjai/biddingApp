package com.bid.microservice;

import javax.persistence.Column;
//import javax.persistence.Embeddable;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

@Entity
@Table(name="biditem")
public class BidItem 
{
	@Id
	private String item;
	@Column
	private String desc;
	@Column
	private double minAmt;
	@ManyToOne
	@JoinColumn(name = "title")
	private Bid myBid;

	public BidItem()
	{
		super();
	}
	public BidItem(String item, String desc, double minAmt) {
		this.item = item;
		this.desc = desc;
		this.minAmt = minAmt;
	}
	public String getItem() {
		return item;
	}
	public void setItem(String item) {
		this.item = item;
	}
	public String getDesc() {
		return desc;
	}
	public void setDesc(String desc) {
		this.desc = desc;
	}
	public double getMinAmt() {
		return minAmt;
	}
	public void setMinAmt(double minAmt) {
		this.minAmt = minAmt;
	}
	
	public String toString()
	{
		StringBuffer sb = new StringBuffer();
		sb.append("item "+item+"\n");
		sb.append("desc "+desc+"\n");
		sb.append("minAmt "+minAmt+"\n");
		
		return sb.toString();
	}
	public Bid getBid() {
		return myBid;
	}
	public void setBid(Bid bid) {
		this.myBid = bid;
	}
}

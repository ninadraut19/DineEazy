package dineeazy.entity;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class CommentsEntity {
	
	@Id
	private int commentId;
	@Column
	private String comment;
	
	@ManyToOne(cascade = CascadeType.ALL)
	private RestaurantInfoEntity restInfo; 
	
	@ManyToOne(cascade = CascadeType.ALL)
	private CustomerEntity customer;
	
	public CommentsEntity() {}

	public CommentsEntity(int commentId, String comment, RestaurantInfoEntity restInfo, CustomerEntity customer) {
		super();
		this.commentId = commentId;
		this.comment = comment;
		this.restInfo = restInfo;
		this.customer = customer;
	}

	public int getCommentId() {
		return commentId;
	}

	public void setCommentId(int commentId) {
		this.commentId = commentId;
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	public RestaurantInfoEntity getRestInfo() {
		return restInfo;
	}

	public void setRestInfo(RestaurantInfoEntity restInfo) {
		this.restInfo = restInfo;
	}

	public CustomerEntity getCustomer() {
		return customer;
	}

	public void setCustomer(CustomerEntity customer) {
		this.customer = customer;
	}

	

	
	
	
	
	
	
	
	
	
	
	
	
	
}


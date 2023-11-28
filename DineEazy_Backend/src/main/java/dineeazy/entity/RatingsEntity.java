package dineeazy.entity;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class RatingsEntity {
	
	@Id
	private int ratingId;
	@Column
	private int rating;
	
	@ManyToOne(cascade = CascadeType.ALL)
	private RestaurantInfoEntity restInfo;
	
	@ManyToOne(cascade = CascadeType.ALL)
	private CustomerEntity customer;
	
	public RatingsEntity() {}

	public RatingsEntity(int ratingId, int rating, RestaurantInfoEntity restInfo, CustomerEntity customer) {
		super();
		this.ratingId = ratingId;
		this.rating = rating;
		this.restInfo = restInfo;
		this.customer = customer;
	}

	public int getRatingId() {
		return ratingId;
	}

	public void setRatingId(int ratingId) {
		this.ratingId = ratingId;
	}

	public int getRating() {
		return rating;
	}

	public void setRating(int rating) {
		this.rating = rating;
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


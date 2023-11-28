package dineeazy.entity;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class CuisinesEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int cuisineId;
	@Column
	private String cuisineName;
	
	@JsonIgnore
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="restaurantInfoId")
	private RestaurantInfoEntity restInfo;

	public CuisinesEntity() {	}

	public CuisinesEntity(int cuisineId, String cuisineName) {
		super();
		this.cuisineId = cuisineId;
		this.cuisineName = cuisineName;
	}

	public int getCuisineId() {
		return cuisineId;
	}

	public void setCuisineId(int cuisineId) {
		this.cuisineId = cuisineId;
	}

	public String getCuisineName() {
		return cuisineName;
	}

	public void setCuisineName(String cuisineName) {
		this.cuisineName = cuisineName;
	}

	public RestaurantInfoEntity getRestInfo() {
		return restInfo;
	}

	public void setRestInfo(RestaurantInfoEntity restInfo) {
		this.restInfo = restInfo;
	}

	

	

}

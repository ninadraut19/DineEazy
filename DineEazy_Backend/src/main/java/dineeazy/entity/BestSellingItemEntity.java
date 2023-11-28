package dineeazy.entity;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class BestSellingItemEntity {
	
    @Id         
	private int bestSellingItemId;
    @Column
	private String bestSellingItemName;
    
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "restaurant_Info_Id")
	private RestaurantInfoEntity restInfo;
	
    public BestSellingItemEntity() {}
    
	public BestSellingItemEntity(int bestSellingItemId, String bestSellingItemName, RestaurantInfoEntity restInfo) {
		super();
		this.bestSellingItemId = bestSellingItemId;
		this.bestSellingItemName = bestSellingItemName;
		this.restInfo = restInfo;
	}

	public int getBestSellingItemId() {
		return bestSellingItemId;
	}

	public void setBestSellingItemId(int bestSellingItemId) {
		this.bestSellingItemId = bestSellingItemId;
	}

	public String getBestSellingItemName() {
		return bestSellingItemName;
	}

	public void setBestSellingItemName(String bestSellingItemName) {
		this.bestSellingItemName = bestSellingItemName;
	}

	public RestaurantInfoEntity getRestInfo() {
		return restInfo;
	}

	public void setRestInfo(RestaurantInfoEntity restInfo) {
		this.restInfo = restInfo;
	}

	
    
        
        

}
package dineeazy.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
public class TableFoodInfoEntity 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int foodId;
	@Column
	private String foodName;
	@Column
	private String category;
	@Column
	private String cusineType;
	@Column
	private float unitPrice;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="restaurantInfoId")
	private RestaurantInfoEntity restaurantInfo;
	
	@JsonIgnore
	@OneToMany(mappedBy = "tableBook1",cascade = CascadeType.ALL)  
	private List<TableFoodBookingEntity> FoodBookingList;
	
	public TableFoodInfoEntity()
	{
		
	}

	public TableFoodInfoEntity(int foodId, String foodName, String category, String cusineType, float unitPrice) {
		super();
		this.foodId = foodId;
		this.foodName = foodName;
		this.category = category;
		this.cusineType = cusineType;
		this.unitPrice = unitPrice;
	}

	public int getFoodId() {
		return foodId;
	}

	public void setFoodId(int foodId) {
		this.foodId = foodId;
	}

	public String getFoodName() {
		return foodName;
	}

	public void setFoodName(String foodName) {
		this.foodName = foodName;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getCusineType() {
		return cusineType;
	}

	public void setCusineType(String cusineType) {
		this.cusineType = cusineType;
	}

	public float getUnitPrice() {
		return unitPrice;
	}

	public void setUnitPrice(float unitPrice) {
		this.unitPrice = unitPrice;
	}

	public RestaurantInfoEntity getRestaurantInfo() {
		return restaurantInfo;
	}

	public void setRestaurantInfo(RestaurantInfoEntity restaurantInfo) {
		this.restaurantInfo = restaurantInfo;
	}
	
	public List<TableFoodBookingEntity> getFoodBookingList() {
		return FoodBookingList;
	}

	public void setFoodBookingList(List<TableFoodBookingEntity> foodBookingList) {
		FoodBookingList = foodBookingList;
	}

	@Override
	public String toString() {
		return "TableFoodInfoEntity [foodId=" + foodId + ", foodName=" + foodName + ", category=" + category
				+ ", cusineType=" + cusineType + ", unitPrice=" + unitPrice + ", restaurantInfo=" + restaurantInfo
				+ "]";
	}
      
	
}

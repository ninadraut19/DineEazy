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
public class TableFoodBookingEntity
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int foodBookingId;
	@Column
	private int quantity;
	@Column
	private float tableFoodBookingAmount;
	@Column
	private boolean foodBookingStatus;

    @JsonIgnore
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="bookingId")
	private TableBookingEntity tableBook1;
	
    @JsonIgnore
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="foodId")
	private TableFoodInfoEntity foodInfo1;
		
	public TableFoodBookingEntity()
	{
		
	}

	public TableFoodBookingEntity(int foodBookingId, int quantity, float tableFoodBookingAmount,
			boolean foodBookingStatus) {
		super();
		this.foodBookingId = foodBookingId;
		this.quantity = quantity;
		this.tableFoodBookingAmount = tableFoodBookingAmount;
		this.foodBookingStatus = foodBookingStatus;
	}

	public int getFoodBookingId() {
		return foodBookingId;
	}

	public void setFoodBookingId(int foodBookingId) {
		this.foodBookingId = foodBookingId;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public float getTableFoodBookingAmount() {
		return tableFoodBookingAmount;
	}

	public void setTableFoodBookingAmount(float tableFoodBookingAmount) {
		this.tableFoodBookingAmount = tableFoodBookingAmount;
	}

	public boolean isFoodBookingStatus() {
		return foodBookingStatus;
	}

	public void setFoodBookingStatus(boolean foodBookingStatus) {
		this.foodBookingStatus = foodBookingStatus;
	}

	public TableBookingEntity getTableBook1() {
		return tableBook1;
	}

	public void setTableBook1(TableBookingEntity tableBook1) {
		this.tableBook1 = tableBook1;
	}

	public TableFoodInfoEntity getFoodInfo1() {
		return foodInfo1;
	}

	public void setFoodInfo1(TableFoodInfoEntity foodInfo1) {
		this.foodInfo1 = foodInfo1;
	}

	@Override
	public String toString() {
		return "TableFoodBookingEntity [foodBookingId=" + foodBookingId + ", quantity=" + quantity
				+ ", tableFoodBookingAmount=" + tableFoodBookingAmount + ", foodBookingStatus=" + foodBookingStatus
				+ ", tableBook1=" + tableBook1 + "]";
	}


}


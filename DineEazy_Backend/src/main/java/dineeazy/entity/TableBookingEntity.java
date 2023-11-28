package dineeazy.entity;

import java.sql.Time;
import java.time.LocalDate;
import java.time.LocalDateTime;
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
public class TableBookingEntity 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int bookingId;
	@Column
	private LocalDate bookingDate; 
	@Column
	private String guestName;
	@Column
	private int numberOfGuest;
	@Column
	private String bookingStatus;
	@Column
	private float tableBookingAmount;
	@Column
	private String specialRequest;
	@Column
	private String timeslot;
	
	
    @JsonIgnore
    @ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="customerId")
	private CustomerEntity customer;
    
    @JsonIgnore
    @ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="restaurantInfoId")
	private RestaurantInfoEntity restInfo;
    
    
	@JsonIgnore
	@OneToMany(mappedBy = "tableBook1",cascade = CascadeType.ALL)  
	private List<TableFoodBookingEntity> FoodBookingList;
    
    
	public TableBookingEntity()
	{
		
	}

	public TableBookingEntity(int bookingId, LocalDate bookingDate, String guestName, int numberOfGuest,
			String bookingStatus, float tableBookingAmount, String specialRequest, String timeslot) {
		super();
		this.bookingId = bookingId;
		this.bookingDate = bookingDate;
		this.guestName = guestName;
		this.numberOfGuest = numberOfGuest;
		this.bookingStatus = bookingStatus;
		this.tableBookingAmount = tableBookingAmount;
		this.specialRequest = specialRequest;
		this.timeslot = timeslot;
	}

	public String getTimeslot() {
		return timeslot;
	}

	public void setTimeslot(String timeslot) {
		this.timeslot = timeslot;
	}

	public int getBookingId() {
		return bookingId;
	}

	public void setBookingId(int bookingId) {
		this.bookingId = bookingId;
	}

	public LocalDate getBookingDate() {
		return bookingDate;
	}

	public void setBookingDate(LocalDate bookingDate) {
		this.bookingDate = bookingDate;
	}

	public String getGuestName() {
		return guestName;
	}

	public void setGuestName(String guestName) {
		this.guestName = guestName;
	}

	public String getBookingStatus() {
		return bookingStatus;
	}

	public void setBookingStatus(String bookingStatus) {
		this.bookingStatus = bookingStatus;
	}

	public float getTableBookingAmount() {
		return tableBookingAmount;
	}

	public void setTableBookingAmount(float tableBookingAmount) {
		this.tableBookingAmount = tableBookingAmount;
	}

	public CustomerEntity getCustomer() {
		return customer;
	}

	public void setCustomer(CustomerEntity customer) {
		this.customer = customer;
	}

	public RestaurantInfoEntity getRestInfo1() {
		return restInfo;
	}

	public void setRestInfo1(RestaurantInfoEntity restInfo1) {
		this.restInfo = restInfo1;
	}

	public int getNumberOfGuest() {
		return numberOfGuest;
	}

	public void setNumberOfGuest(int numberOfGuest) {
		this.numberOfGuest = numberOfGuest;
	}

	public RestaurantInfoEntity getRestInfo() {
		return restInfo;
	}

	public void setRestInfo(RestaurantInfoEntity restInfo) {
		this.restInfo = restInfo;
	}

	public String getSpecialRequest() {
		return specialRequest;
	}

	public void setSpecialRequest(String specialRequest) {
		this.specialRequest = specialRequest;
	}

	public List<TableFoodBookingEntity> getFoodBookingList() {
		return FoodBookingList;
	}

	public void setFoodBookingList(List<TableFoodBookingEntity> foodBookingList) {
		FoodBookingList = foodBookingList;
	}
	
	
	
}

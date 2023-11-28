package dineeazy.entity;

import java.sql.Time;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class RestaurantInfoEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int restaurantInfoId;
	@Column
	private String restaurantName;
	@Column
	private String restaurantAddress;
	@Column
	private String city;
	@Column
	private String contactPersonName;
	@Column
	private long phoneNumber;
	@Column
	private String emailId;
	@Column
	private double minBookingAmountPerPerson;
	@Column
	private Time openingTime;
	@Column
	private Time closingTime;
	@Column
	private int numberOfSeatAvailable;
	
	@JsonIgnore
	@OneToOne
	private RestaurantEntity rest;
	
	@JsonIgnore
	@OneToMany(mappedBy = "restaurantInfo",cascade = CascadeType.ALL)  
	private List<TableFoodInfoEntity> foodInfoList;
	
	@JsonIgnore
	@OneToMany(mappedBy = "restInfo",cascade = CascadeType.ALL)
	private List<CuisinesEntity> cusines;
	
	@JsonIgnore
	@OneToMany(mappedBy = "restInfo", cascade = CascadeType.ALL)
	private List<BestSellingItemEntity> bestSellingItemList;
	
	@JsonIgnore
	@OneToMany(mappedBy = "restInfo", cascade = CascadeType.ALL)
	private List<RatingsEntity> ratings;
	
	@JsonIgnore
	@OneToMany(mappedBy = "restInfo", cascade = CascadeType.ALL)
	private List<CommentsEntity> comments; 
	
	@JsonIgnore
	@OneToMany(mappedBy = "restInfo", cascade = CascadeType.ALL)
	private List<TimeSlotEntity> timeslots; 
	
    
    @JsonIgnore
   	@OneToOne(mappedBy = "info", cascade = CascadeType.ALL)
   	private TableRestaurantImageEntity restImage;
	
	@JsonIgnore
	@OneToMany(mappedBy = "restInfo2",cascade = CascadeType.ALL)  
	private List<TableFeatureEntity> feature;
	
	@JsonIgnore
	@OneToMany(mappedBy = "restInfo", cascade = CascadeType.ALL)
	private List<TableBookingEntity> bookings;
	  
	public RestaurantInfoEntity() 
	{
		
	}

	public RestaurantInfoEntity(int restaurantInfoId, String restaurantName, String restaurantAddress, String city,
			String contactPersonName, long phoneNumber, String emailId, double minBookingAmountPerPerson,
			Time openingTime, Time closingTime, int numberOfSeatAvailable) {
		super();
		this.restaurantInfoId = restaurantInfoId;
		this.restaurantName = restaurantName;
		this.restaurantAddress = restaurantAddress;
		this.city = city;
		this.contactPersonName = contactPersonName;
		this.phoneNumber = phoneNumber;
		this.emailId = emailId;
		this.minBookingAmountPerPerson = minBookingAmountPerPerson;
		this.openingTime = openingTime;
		this.closingTime = closingTime;
		this.numberOfSeatAvailable = numberOfSeatAvailable;
	}

	public int getRestaurantInfoId() {
		return restaurantInfoId;
	}

	public void setRestaurantInfoId(int restaurantInfoId) {
		this.restaurantInfoId = restaurantInfoId;
	}

	public String getRestaurantName() {
		return restaurantName;
	}

	public void setRestaurantName(String restaurantName) {
		this.restaurantName = restaurantName;
	}

	public String getRestaurantAddress() {
		return restaurantAddress;
	}

	public void setRestaurantAddress(String restaurantAddress) {
		this.restaurantAddress = restaurantAddress;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getContactPersonName() {
		return contactPersonName;
	}

	public void setContactPersonName(String contactPersonName) {
		this.contactPersonName = contactPersonName;
	}

	public long getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(long phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public double getMinBookingAmountPerPerson() {
		return minBookingAmountPerPerson;
	}

	public void setMinBookingAmountPerPerson(double minBookingAmountPerPerson) {
		this.minBookingAmountPerPerson = minBookingAmountPerPerson;
	}

	public Time getOpeningTime() {
		return openingTime;
	}

	public void setOpeningTime(Time openingTime) {
		this.openingTime = openingTime;
	}

	public Time getClosingTime() {
		return closingTime;
	}

	public void setClosingTime(Time closingTime) {
		this.closingTime = closingTime;
	}

	public int getNumberOfSeatAvailable() {
		return numberOfSeatAvailable;
	}

	public void setNumberOfSeatAvailable(int numberOfSeatAvailable) {
		this.numberOfSeatAvailable = numberOfSeatAvailable;
	}

	public RestaurantEntity getRest() {
		return rest;
	}

	public void setRest(RestaurantEntity rest) {
		this.rest = rest;
	}

	public TableRestaurantImageEntity getRestImage() {
		return restImage;
	}

	public void setRestImage(TableRestaurantImageEntity restImage) {
		this.restImage = restImage;
	}

	public List<TableFoodInfoEntity> getFoodInfoList() {
		return foodInfoList;
	}

	public void setFoodInfoList(List<TableFoodInfoEntity> foodInfoList) {
		this.foodInfoList = foodInfoList;
	}

	public List<TableFeatureEntity> getFeature() {
		return feature;
	}

	public void setFeature(List<TableFeatureEntity> feature) {
		this.feature = feature;
	}

	public List<CuisinesEntity> getCusines() {
		return cusines;
	}

	public void setCusines(List<CuisinesEntity> cusines) {
		this.cusines = cusines;
	}

	public List<BestSellingItemEntity> getBestSellingItemList() {
		return bestSellingItemList;
	}

	public void setBestSellingItemList(List<BestSellingItemEntity> bestSellingItemList) {
		this.bestSellingItemList = bestSellingItemList;
	}

	public List<RatingsEntity> getRatings() {
		return ratings;
	}

	public void setRatings(List<RatingsEntity> ratings) {
		this.ratings = ratings;
	}

	public List<CommentsEntity> getComments() {
		return comments;
	}

	public void setComments(List<CommentsEntity> comments) {
		this.comments = comments;
	}

	public List<TimeSlotEntity> getTimeslots() {
		return timeslots;
	}

	public void setTimeslots(List<TimeSlotEntity> timeslots) {
		this.timeslots = timeslots;
	}

	public List<TableBookingEntity> getBookings() {
		return bookings;
	}

	public void setBookings(List<TableBookingEntity> bookings) {
		this.bookings = bookings;
	}

	
	
}

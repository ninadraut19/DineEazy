package dineeazy.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class CustomerEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int customerId;
	@Column
	private String firstName;
	@Column
	private String lastName;
	@Column(unique = true)
	private String emailId;
	@Column(unique = true)
	private long mobileNumber;
	@Column
	private String password;
	
	@OneToMany(mappedBy = "customer", cascade = CascadeType.ALL)
	private List<RatingsEntity> ratings;
	
	@OneToMany(mappedBy = "customer", cascade = CascadeType.ALL)
	private List<CommentsEntity> comments;
	
	@JsonIgnore
	@OneToMany(mappedBy = "customer", cascade = CascadeType.ALL)
	private List<TableBookingEntity> bookings;
	
	public CustomerEntity() {}
		
	public CustomerEntity(int customerId, String firstName, String lastName, String emailId, long mobileNumber,
			String password) {
		super();
		this.customerId = customerId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.emailId = emailId;
		this.mobileNumber = mobileNumber;
		this.password = password;
	}

	public int getCustomerId() {
		return customerId;
	}

	public void setCustomerId(int customerId) {
		this.customerId = customerId;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public long getMobileNumber() {
		return mobileNumber;
	}

	public void setMobileNumber(long mobileNumber) {
		this.mobileNumber = mobileNumber;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
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

	public List<TableBookingEntity> getBookings() {
		return bookings;
	}

	public void setBookings(List<TableBookingEntity> bookings) {
		this.bookings = bookings;
	}
	
	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	@Override
	public String toString() {
		return "Customer [customerId=" + customerId + ", firstName=" + firstName + ", lastName=" + lastName
				+ ", mobileNumber=" + mobileNumber + ", password=" + password + "]";
	}
	
	
}

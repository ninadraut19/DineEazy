package dineeazy.entity;

import java.sql.Date;
import java.sql.Time;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class TimeSlotEntity {

	@Id
	private int timeSlotId;
	@Column
	private Time timeSlot;
	@Column
	private String meal;
	@Column
	private String weekday;
	@Column
	private Date date;

	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "restaurant_Info_Id")
	private RestaurantInfoEntity restInfo;
	
	public TimeSlotEntity() {}

	public TimeSlotEntity(int timeSlotId, Time timeSlot, String meal, String weekday, Date date,
			RestaurantInfoEntity restInfo) {
		super();
		this.timeSlotId = timeSlotId;
		this.timeSlot = timeSlot;
		this.meal = meal;
		this.weekday = weekday;
		this.date = date;
		this.restInfo = restInfo;
	}

	public int getTimeSlotId() {
		return timeSlotId;
	}

	public void setTimeSlotId(int timeSlotId) {
		this.timeSlotId = timeSlotId;
	}

	public Time getTimeSlot() {
		return timeSlot;
	}

	public void setTimeSlot(Time timeSlot) {
		this.timeSlot = timeSlot;
	}

	public String getMeal() {
		return meal;
	}

	public void setMeal(String meal) {
		this.meal = meal;
	}

	public String getWeekday() {
		return weekday;
	}

	public void setWeekday(String weekday) {
		this.weekday = weekday;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public RestaurantInfoEntity getRestInfo() {
		return restInfo;
	}

	public void setRestInfo(RestaurantInfoEntity restInfo) {
		this.restInfo = restInfo;
	}

	
}

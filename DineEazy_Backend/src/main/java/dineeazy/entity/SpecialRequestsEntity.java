package dineeazy.entity;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class SpecialRequestsEntity {
	
	@Id
	private int specialRequestId;
	@Column
	private String specialRequest;

	/*
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="table_bookings_Id")
	private TableBookingEntity tableBooking;
	*/
	public SpecialRequestsEntity() {}

	public SpecialRequestsEntity(int specialRequestId, String specialRequest) {
		super();
		this.specialRequestId = specialRequestId;
		this.specialRequest = specialRequest;
	}

	public int getSpecialRequestId() {
		return specialRequestId;
	}

	public void setSpecialRequestId(int specialRequestId) {
		this.specialRequestId = specialRequestId;
	}

	public String getSpecialRequest() {
		return specialRequest;
	}

	public void setSpecialRequest(String specialRequest) {
		this.specialRequest = specialRequest;
	}
	

}

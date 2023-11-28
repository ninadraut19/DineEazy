package dineeazy.controllers;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dineeazy.entity.CustomerEntity;
import dineeazy.entity.Response;
import dineeazy.entity.RestaurantInfoEntity;
import dineeazy.entity.TableBookingEntity;
import dineeazy.repository.CustomerRepository;
import dineeazy.repository.RestaurantInfoRepository;
import dineeazy.repository.TableBookingRepository;


@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping(path="/tableBooking")
public class TableBookingController 
{
	@Autowired
	TableBookingRepository repo;
	
	@Autowired
	CustomerRepository repo1;
	
	@Autowired
	RestaurantInfoRepository repo2;
	
	@Autowired
	JavaMailSender javaMailSender;
	
	@PostMapping("/addTableBooking/{date}/{custId}/{restInfoId}")
	public Response<TableBookingEntity> insertTableBooking(@RequestBody TableBookingEntity t1 ,@PathVariable String date,@PathVariable int custId,@PathVariable int restInfoId ) 
	{
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
		LocalDate date1 = LocalDate.parse(date, formatter);

		TableBookingEntity booking = new TableBookingEntity();
		booking.setBookingDate(date1);
		booking.setGuestName(t1.getGuestName());
		booking.setNumberOfGuest(t1.getNumberOfGuest());
		booking.setSpecialRequest(t1.getSpecialRequest());
		booking.setTableBookingAmount(t1.getTableBookingAmount());
		booking.setTimeslot(t1.getTimeslot());
	
		Optional<RestaurantInfoEntity> r = repo2.findById(restInfoId);
		if(r.isPresent())
		{
			booking.setBookingStatus("booked");
			booking.setRestInfo1(r.get());
			
			Optional<CustomerEntity> c = repo1.findById(custId);
			if(c.isPresent())
			{
				booking.setCustomer(c.get());
				CustomerEntity customer = c.get();
				t1 = repo.save(booking);
				SimpleMailMessage sm = new SimpleMailMessage();
				sm.setFrom("team.dineeazy@gmail.com");//input the sender email Id or read it from properties file
				sm.setTo(customer.getEmailId());
				sm.setSubject("DineEazy_Booking Successful_Booking Id : "+ t1.getBookingId());
				sm.setText("Dear "+customer.getFirstName() +",\n\n"
						+ "\t Your booking is successful. Thank you for choosing DineEazy to book a table at your Favorite Restaurant. Enjoy the meal and  Wishing you a great day...!!!. Your Booking Details are as below. Please keep this for the future reference.\n\n"
						+ "Booking ID         :"+t1.getBookingId()+"\n"
						+ "Restaurant Name : "+r.get().getRestaurantName()+"\n"
						+ "Guest Name        : "+t1.getGuestName()+"\n"
						+ "Booking Date      : "+t1.getBookingDate()+"\n"
						+ "Time Slot            : "+t1.getTimeslot() +"\n"
						+ "Number Of seats : "+t1.getNumberOfGuest() +"\n"
						+ "Booking Status  : "+t1.getBookingStatus() +"\n"
						+ "Booking Amount  : "+t1.getTableBookingAmount() + "\n\n"
						+ "regards, \n"+ "Team DineEazy");
				javaMailSender.send(sm);
				return Response.getSuccessResponse(t1);
			}
		}
		return Response.getErrorResponse("failed");
	}

	@PutMapping("/updateTableBooking/{date}/{tbookingId}")
	public Response<Optional<TableBookingEntity>> updateTableBooking(@PathVariable String date,@PathVariable int tbookingId,@RequestBody TableBookingEntity t1)
	{
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
		LocalDate date1 = LocalDate.parse(date, formatter);
		Optional<TableBookingEntity> obj = repo.findById(tbookingId);
		if(obj.isPresent())
		{
			TableBookingEntity book = obj.get();
			book.setBookingDate(date1);
			book.setGuestName(t1.getGuestName());
			book.setTableBookingAmount(t1.getTableBookingAmount());
			repo.save(book);
			return Response.getSuccessResponse(obj);
		}
		else
		return Response.getErrorResponse("Table Booking Not Updated");
	}

	@GetMapping("/getAllTableBooking/{custId}")
	public Response<List<TableBookingEntity>> getAllTableBooking(@PathVariable int custId)
	{
		Optional<CustomerEntity> obj = repo1.findById(custId);
		if(obj.isPresent())
		{
			List<TableBookingEntity> list = repo.findAllByCustomer(obj.get());
			return Response.getSuccessResponse(list);
		}
		return Response.getErrorResponse("Not found");
	}
	
	@DeleteMapping("/deleteTableBooking/{id}")
	public Response<TableBookingEntity> deleteTableBooking(@PathVariable int id)
	{
		Optional<TableBookingEntity> obj = repo.findByBookingId(id);
		if(obj.isPresent())
		{
			TableBookingEntity booking = obj.get();
			booking.setBookingStatus("cancelled");
			SimpleMailMessage sm = new SimpleMailMessage();
			sm.setFrom("team.dineeazy@gmail.com");//input the sender email Id or read it from properties file
			sm.setTo(booking.getCustomer().getEmailId());
			sm.setSubject("DineEazy_Booking cancelled Successfully Booking Id : "+ booking.getBookingId());
			sm.setText("Dear "+booking.getCustomer().getFirstName() +",\n\n"
					+ "\t Your booking has been cancelled successful.Booking amount will be refunded to your respective account within the next 7 working days.\n\n"
					+ "Booking ID         :"+booking.getBookingId()+"\n"
					+ "Restaurant Name : "+booking.getRestInfo1().getRestaurantName()+"\n"
					+ "Guest Name        : "+booking.getGuestName()+"\n"
					+ "Booking Date      : "+booking.getBookingDate()+"\n"
					+ "Time Slot            : "+booking.getTimeslot() +"\n"
					+ "Number Of seats : "+booking.getNumberOfGuest() +"\n"
					+ "Booking Status  : "+booking.getBookingStatus() +"\n"
					+ "Booking Amount  : "+booking.getTableBookingAmount() + "\n\n"
					+ "regards, \n"+ "Team DineEazy");
			javaMailSender.send(sm);
			obj.get().setRestInfo1(null);
			obj.get().setCustomer(null);
			repo.delete(obj.get());
			return Response.getSuccessResponse(obj.get());
		}
		else
		return Response.getErrorResponse("Table Booking Not Deleted");
	}
}































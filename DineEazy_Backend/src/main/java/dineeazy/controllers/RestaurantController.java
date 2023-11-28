package dineeazy.controllers;

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

import dineeazy.entity.Credentials;
import dineeazy.entity.CustomerEntity;
import dineeazy.entity.Response;
import dineeazy.entity.RestaurantEntity;
import dineeazy.repository.RestaurantRepository;
import dineeazy.service.RestaurantService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping(path="/restaurants")
public class RestaurantController {

	@Autowired
	RestaurantService restServ;
	
	@Autowired
	RestaurantRepository repo;
	
	@Autowired
	JavaMailSender javaMailSender;
	
	@PostMapping("/signUp")
	public Response<RestaurantEntity> restaurantRegistration(@RequestBody RestaurantEntity restaurant)
	{
		restaurant = repo.save(restaurant);
		return Response.getSuccessResponse(restaurant);
	}
	
	@PostMapping("/login")
	public Response<RestaurantEntity> restaurantRegistration(@RequestBody Credentials credential)
	{
		Optional<RestaurantEntity> rest = restServ.signIn(credential);
		if(rest.isPresent())
		{
			return Response.getSuccessResponse(rest.get());
		}
		else
		{
			return Response.getErrorResponse("Invalid Mobile_Number/password");
		}
	}
	
	@PostMapping("/forgetPassword")
	public Response<RestaurantEntity> restaurantForgetPassword(@RequestBody Credentials credential)
	{
		Optional<RestaurantEntity> obj = restServ.forgetPassword(credential);
		if(obj.isPresent())
		{
			RestaurantEntity rest = obj.get();
			SimpleMailMessage sm = new SimpleMailMessage();
			sm.setFrom("team.dineeazy@gmail.com");//input the sender email Id or read it from properties file
			sm.setTo(rest.getEmailId());
			sm.setSubject("DineEazy_forgot_password");
			sm.setText("Dear restaurant,\n\n"
					+ "\t Your login password is as follows\n\n"
					+ "Registered MobileNo. :"+rest.getMobileNumber()+"\n"
					+ "Password                   :"+rest.getPassword()+"\n\n"
					+ "regards, \n"+ "Team DineEazy");
			javaMailSender.send(sm);
			return Response.getSuccessResponse(obj.get());
		}
		else
		{
			return Response.getErrorResponse("Invalid Mobile_Number");
		}
	}
	
	@GetMapping("/getAllRestaurants")
	public List<RestaurantEntity> getAllRestaurants()
	{
		List<RestaurantEntity> list = repo.findAll();
		return list;
	}
	
	@PutMapping("/updateRestaurant")
	public String updateRestaurant(@RequestBody RestaurantEntity r)
	{
		String result = "";
		Optional<RestaurantEntity> obj = repo.findById(r.getRestaurantId());
		if(obj.isPresent())
		{
			RestaurantEntity user = obj.get();
			user.setMobileNumber(r.getMobileNumber());
			user.setPassword(r.getPassword());
			repo.save(user);
			result += "record updated";
			return result;
		}
		result += "record update failed";
		return result;
	}
	
	@DeleteMapping("/removeRestaurant/{id}")
	public String removeRestaurant(@PathVariable int id)
	{
		String result = "";
		Optional<RestaurantEntity> obj = repo.findById(id);
		if(obj.isPresent())
		{
			RestaurantEntity rst = obj.get();
			repo.delete(rst);
			result = "rst deleted successful..";
			return result;
		}
		else
			result = "Record not found !..";
		
		return result;
	}
	
}

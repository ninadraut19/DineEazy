package dineeazy.controllers;

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
import dineeazy.repository.CustomerRepository;
import dineeazy.service.CustomerService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping(path="/customers")
public class CustomerController {

	@Autowired
	private CustomerService custService;
	
	@Autowired
	private CustomerRepository repo;
	
	@Autowired
	JavaMailSender javaMailSender;

	@PostMapping("/signUp")
	public Response<CustomerEntity> customerRegistration(@RequestBody CustomerEntity customer)
	{
		customer = repo.save(customer);
		return Response.getSuccessResponse(customer);
	}

	@PostMapping("/signin")
	public Response<CustomerEntity> customerRegistration(@RequestBody Credentials credential)
	{
		Optional<CustomerEntity> cust = custService.signin(credential);
		if(cust.isPresent())
		{
			return Response.getSuccessResponse(cust.get());
		}
		else
		{
			return Response.getErrorResponse("Invalid Mobile_Number/password");
		}
	}
	
	@PostMapping("/forgetPassword")
	public Response<CustomerEntity> customerForgetPassword(@RequestBody Credentials credential)
	{
		Optional<CustomerEntity> cust = custService.forgetPassword(credential);
		if(cust.isPresent())
		{
			CustomerEntity customer = cust.get();
			SimpleMailMessage sm = new SimpleMailMessage();
			sm.setFrom("team.dineeazy@gmail.com");//input the sender email Id or read it from properties file
			sm.setTo(customer.getEmailId());
			sm.setSubject("DineEazy_forgot_password");
			sm.setText("Dear "+customer.getFirstName() +",\n\n"
					+ "\t Your login password is as follows\n\n"
					+ "Registered MobileNo. :"+customer.getMobileNumber()+"\n"
					+ "Password                   :"+customer.getPassword()+"\n\n"
					+ "regards, \n"+ "Team DineEazy");
			javaMailSender.send(sm);
			return Response.getSuccessResponse(cust.get());
		}
		else
		{
			return Response.getErrorResponse("Invalid Mobile_Number");
		}
	}
	/*
	
	@GetMapping("/allCustomer")
	public Response<List<CustomerEntity>> getAllCustomers()
	{
		List<CustomerEntity> list = repo.findAll();
		return Response.getSuccessResponse(list);
	}

	@GetMapping("/getCustomer/{Id}")
	public Response<CustomerEntity> getCustomers(@PathVariable int id)
	{
		Optional<CustomerEntity> list = repo.findById(id);
		if(list.isPresent())
		{
			return Response.getSuccessResponse(list.get());
		}
		else
		{
			return Response.getErrorResponse("Customer Not Found");
		}
	}
	
	@DeleteMapping("/removeCustomer/{id}")
	public Response<CustomerEntity> removeCustomer(@PathVariable int id)
	{
		Optional<CustomerEntity> obj = repo.findById(id);
		if(obj.isPresent())
		{
			CustomerEntity user = obj.get();
			repo.delete(user);
			return Response.getSuccessResponse(user);
		}
		else
		return Response.getErrorResponse("Customer Not Deleted");
	}

	@PutMapping("/updateCustomer/{custId}")
	public Response<CustomerEntity> updateCustomer(@PathVariable int custId,@RequestBody CustomerEntity c)
	{
		Optional<CustomerEntity> obj = repo.findById(custId);
		if(obj.isPresent())
		{
			CustomerEntity user = obj.get();
			user.setFirstName(c.getFirstName());
			user.setLastName(c.getLastName());
			user.setMobileNumber(c.getMobileNumber());
			user.setPassword(c.getPassword());
			repo.save(user);
			return Response.getSuccessResponse(user);
		}
		return Response.getErrorResponse("Customer Not Updated");
	}
	*/
}
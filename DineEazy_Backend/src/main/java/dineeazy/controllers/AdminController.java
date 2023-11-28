package dineeazy.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dineeazy.entity.AdminEntity;
import dineeazy.repository.AdminRepository;

@CrossOrigin
@RestController
@RequestMapping(path="/admins")
public class AdminController {

	@Autowired
	AdminRepository repo;
	
	@PostMapping("/addAdmin")
	public String adminRegistration(@RequestBody AdminEntity a)
	{
		AdminEntity admin = new AdminEntity(a.getAdminId(),a.getFirstName(),a.getLastName(),a.getMobileNumber(),a.getPassword());
		repo.save(admin);
		return "Record inserted..";
	}
	
	@GetMapping("/allAdmins")
	public List<AdminEntity> getAllAdmins()
	{
		List<AdminEntity> list = repo.findAll();
		return list;
	}
	
	@PutMapping("/updateAdmin")
	public String updateCustomer(@RequestBody AdminEntity a)
	{
		String result = "";
		Optional<AdminEntity> obj = repo.findById(a.getAdminId());
		if(obj.isPresent())
		{
			AdminEntity user = obj.get();
			user.setFirstName(a.getFirstName());
			user.setLastName(a.getLastName());
			user.setMobileNumber(a.getMobileNumber());
			user.setPassword(a.getPassword());
			repo.save(user);
			result += "record updated";
			return result;
		}
		result += "record update failed";
		return result;
	}
	
	@DeleteMapping("/removeAdmin/{id}")
	public String removeAdmin(@PathVariable int id)
	{
		String result = "";
		Optional<AdminEntity> obj = repo.findById(id);
		if(obj.isPresent())
		{
			AdminEntity user = obj.get();
			repo.delete(user);
			result = "User deleted successful..";
			return result;
		}
		else
			result = "Record not found !..";
		
		return result;
	}
}

package dineeazy.service;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dineeazy.entity.Credentials;
import dineeazy.entity.CustomerEntity;
import dineeazy.repository.CustomerRepository;

@Service
public class CustomerService 
{
	@Autowired
	private CustomerRepository repo;
	
    public Optional<CustomerEntity> signin(Credentials credentials) 
    {
		return repo.findByMobileNumberAndPassword(credentials.getMobileNo(), credentials.getPassword());
	}
    
    public Optional<CustomerEntity> forgetPassword(Credentials credentials) 
    {
		return repo.findByMobileNumber(credentials.getMobileNo());
	}
}

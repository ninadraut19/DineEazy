package dineeazy.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

import dineeazy.entity.CustomerEntity;

public interface CustomerRepository extends JpaRepository<CustomerEntity, Integer>
{
	public Optional<CustomerEntity> findByMobileNumberAndPassword(long mob, String pwd);
	
	public Optional<CustomerEntity> findByMobileNumber(long mob);
}
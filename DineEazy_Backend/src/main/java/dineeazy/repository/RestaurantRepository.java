package dineeazy.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import dineeazy.entity.CustomerEntity;
import dineeazy.entity.RestaurantEntity;

public interface RestaurantRepository extends JpaRepository<RestaurantEntity, Integer>{

	public Optional<RestaurantEntity> findByMobileNumberAndPassword(long mob,String pwd);
	
	public Optional<RestaurantEntity> findByMobileNumber(long mob);
}

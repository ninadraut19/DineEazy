package dineeazy.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import dineeazy.entity.CustomerEntity;
import dineeazy.entity.TableBookingEntity;

public interface TableBookingRepository extends JpaRepository<TableBookingEntity, Integer>
{
	List<TableBookingEntity> findAllByCustomer(CustomerEntity customer);
	
	Optional<TableBookingEntity> findByBookingId(int id);
}

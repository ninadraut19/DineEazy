package dineeazy.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import dineeazy.entity.TableFoodBookingEntity;

public interface TableFoodBookingRepository extends JpaRepository<TableFoodBookingEntity, Integer>
{
}

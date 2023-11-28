package dineeazy.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

import dineeazy.entity.RestaurantInfoEntity;
import dineeazy.entity.TableRestaurantImageEntity;

public interface TableRestaurantImageRepository extends JpaRepository<TableRestaurantImageEntity,Long>
{
    Optional<TableRestaurantImageEntity> findByName(String fileName);
    
    Optional<TableRestaurantImageEntity> findByInfo(RestaurantInfoEntity restInfo);
}

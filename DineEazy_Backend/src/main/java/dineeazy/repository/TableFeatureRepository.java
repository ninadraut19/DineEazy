package dineeazy.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import dineeazy.entity.RestaurantInfoEntity;
import dineeazy.entity.TableFeatureEntity;

public interface TableFeatureRepository extends JpaRepository<TableFeatureEntity, Integer>
{
	List<TableFeatureEntity> findAllByRestInfo2(RestaurantInfoEntity restInfo);
}

package dineeazy.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import dineeazy.entity.TableRestaurantImageEntity;

public interface ImageRepository extends JpaRepository<TableRestaurantImageEntity, Integer>{

}

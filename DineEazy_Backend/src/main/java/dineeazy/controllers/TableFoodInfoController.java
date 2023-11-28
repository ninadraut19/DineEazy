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

import dineeazy.entity.Response;
import dineeazy.entity.RestaurantEntity;
import dineeazy.entity.RestaurantInfoEntity;
import dineeazy.entity.TableFoodInfoEntity;
import dineeazy.repository.RestaurantInfoRepository;
import dineeazy.repository.RestaurantRepository;
import dineeazy.repository.TableFoodInfoRepository;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping(path="/foodInfo")
public class TableFoodInfoController 
{
	@Autowired
	TableFoodInfoRepository repo;
	
	@Autowired
	RestaurantInfoRepository repo2;
	
	@Autowired
	RestaurantRepository repo3;
	
	@PostMapping("/addFoodInfo/{restId}")
	public Response<TableFoodInfoEntity> addFoodMenu(@RequestBody TableFoodInfoEntity t1, @PathVariable int restId)
	{
		Optional<RestaurantEntity> obj1 = repo3.findById(restId);
		if(obj1.isPresent())
		{
			RestaurantInfoEntity restInfo = obj1.get().getInfo();
			
			TableFoodInfoEntity food = new TableFoodInfoEntity(t1.getFoodId(),t1.getFoodName(),t1.getCategory(),
                    t1.getCusineType(),t1.getUnitPrice());
			food.setRestaurantInfo(restInfo);
			food = repo.save(food);
			return Response.getSuccessResponse(food);
		}
	
		return Response.getErrorResponse("Failed");
	}
	
	@GetMapping("/getAllTableFoodInfo")
	public List<TableFoodInfoEntity> getAllTableFoodInfo()
	{
		List<TableFoodInfoEntity> list = repo.findAll();
		return list;
	}
	
	@GetMapping("/getAllFoodInfo/{restInfoId}")
	public Response<List<TableFoodInfoEntity>> getAllFoodInfo(@PathVariable int restInfoId)
	{
		Optional<RestaurantInfoEntity> obj = repo2.findById(restInfoId);
		if(obj.isPresent())
		{
			List<TableFoodInfoEntity> list = obj.get().getFoodInfoList();
			return Response.getSuccessResponse(list);
		}
		return Response.getErrorResponse("Not found");
	}
	
	@DeleteMapping("/getTableFoodInfo/{id}")
	public String deleteTableFoodInfo(@PathVariable int id)
	{
		String str = "";
		Optional<TableFoodInfoEntity> obj = repo.findById(id);
		if(obj.isPresent())
		{
			TableFoodInfoEntity info =obj.get();
			repo.delete(info);
			str = "Deleted Table Food Info";
			return str;
		}
		return "Table Food Info Not Found";
	}
	
	@PutMapping("/updateTableFoodInfo")
	public String updateTableFoodInfo(@RequestBody TableFoodInfoEntity t1)
	{
		String str = "";
		Optional<TableFoodInfoEntity> obj = repo.findById(t1.getFoodId());
		if(obj.isPresent())
		{
			TableFoodInfoEntity info = obj.get();
			info.setCategory(t1.getCategory());
			info.setCusineType(t1.getCusineType());
			info.setFoodName(t1.getFoodName());
			info.setUnitPrice(t1.getUnitPrice());
			info.setRestaurantInfo(t1.getRestaurantInfo());
			repo.save(info);
			str += "Updated Table Food Info";
			return str;
		}
		str += "Failed Update Table Food Info";
		return str;
	}
}

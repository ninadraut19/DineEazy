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
import dineeazy.entity.TableBookingEntity;
import dineeazy.entity.TableFoodBookingEntity;
import dineeazy.entity.TableFoodInfoEntity;
import dineeazy.repository.TableBookingRepository;
import dineeazy.repository.TableFoodBookingRepository;
import dineeazy.repository.TableFoodInfoRepository;

@CrossOrigin
@RestController
@RequestMapping(path="/tFoodBooking")
public class TableFoodBookingController
{
	@Autowired
	TableFoodBookingRepository repo;
	
	@Autowired
	TableBookingRepository repo1;
	
	@Autowired
	TableFoodInfoRepository repo2;
	
	@PostMapping("/addTableFoodBooking/{tbookingId}/{foodInfoId}")
	public Response<TableFoodBookingEntity> insertTableFoodBooking(@PathVariable int tbookingId,@PathVariable int foodInfoId,@RequestBody TableFoodBookingEntity t1)
	{
		TableFoodBookingEntity table = new TableFoodBookingEntity(t1.getFoodBookingId(),t1.getQuantity(),
											t1.getTableFoodBookingAmount(),t1.isFoodBookingStatus());
		
		Optional<TableBookingEntity> b = repo1.findById(tbookingId);
		if(b.isPresent())
		{
			table.setTableBook1(b.get());
			Optional<TableFoodInfoEntity> f = repo2.findById(foodInfoId);
			if(f.isPresent())
			{
				table.setFoodInfo1(f.get());
			}
			
			repo.save(table);
			return Response.getSuccessResponse(table);
		}
		
		return Response.getErrorResponse("Failed");
	}

	@GetMapping("/getAllTableFoodBooking")
	public Response<List<TableFoodBookingEntity>> getAllTableFoodBooking()
	{
		List<TableFoodBookingEntity> list = repo.findAll();
		return Response.getSuccessResponse(list);
	}
	
	@PutMapping("/updateTableFoodBooking/{tFoodBooking}")
	public Response<Optional<TableFoodBookingEntity>> updateTableFoodBooking(@PathVariable int tFoodBooking,@RequestBody TableFoodBookingEntity t1)
	{
		Optional<TableFoodBookingEntity> obj = repo.findById(tFoodBooking);
		if(obj.isPresent())
		{
			TableFoodBookingEntity food = obj.get();
			food.setQuantity(t1.getQuantity());
			food.setTableFoodBookingAmount(t1.getTableFoodBookingAmount());
			food.setFoodBookingStatus(t1.isFoodBookingStatus());
			
			TableFoodInfoEntity f = new TableFoodInfoEntity();
			f.getFoodId();
			food.setFoodInfo1(f);
			
			TableBookingEntity t = new TableBookingEntity();
			t.getBookingId();
			food.setTableBook1(t);
			
			food.setTableBook1(t);
			repo.save(food);
			return Response.getSuccessResponse(obj);
		}
		else
		return Response.getErrorResponse("Table Food Booking Not Updated");
	}
	
	@DeleteMapping("/getTableFoodBooking/{id}")
	public Response<Optional<TableFoodBookingEntity>> deleteTableFoodBooking(@PathVariable int id)
	{
		Optional<TableFoodBookingEntity> obj = repo.findById(id);
		if(obj.isPresent())
		{
			TableFoodBookingEntity book =obj.get();
			repo.delete(book);
			return Response.getSuccessResponse(obj);
		}
		return Response.getErrorResponse("Table Food Booking Not Deleted");
	}
	
}


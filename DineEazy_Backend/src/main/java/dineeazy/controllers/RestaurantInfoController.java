package dineeazy.controllers;

import java.io.IOException;
import java.sql.Time;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonIgnore;

import dineeazy.entity.CuisinesEntity;
import dineeazy.entity.Response;
import dineeazy.entity.RestaurantEntity;
import dineeazy.entity.RestaurantInfoEntity;
import dineeazy.entity.TableFeatureEntity;
import dineeazy.entity.TableFoodInfoEntity;
import dineeazy.entity.TableRestaurantImageEntity;
import dineeazy.repository.RestaurantInfoRepository;
import dineeazy.repository.RestaurantRepository;
import dineeazy.repository.TableFeatureRepository;
import dineeazy.service.AddRestaurantService;


@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping(path="/restaurantInfo")
public class RestaurantInfoController {

	@Autowired
	RestaurantRepository repo1;

	@Autowired
	RestaurantInfoRepository repo2;
	
	@Autowired
	AddRestaurantService restServ;
	
	@Autowired
	TableFeatureRepository repo3;

	@PostMapping("/addRestaurantInfo/{restId}/{openingTime}/{closingTime}")
	public Response<RestaurantInfoEntity> restaurantRegistration(@PathVariable int restId,@PathVariable String openingTime,@PathVariable String closingTime,@RequestBody RestaurantInfoEntity restInfo) throws IOException
	{
		String time1 = openingTime.concat(":00");
		String time2 = closingTime.concat(":00");
		Time t1 = Time.valueOf(time1);
		Time t2 = Time.valueOf(time2);
		RestaurantInfoEntity restInfo1 = new RestaurantInfoEntity(restInfo.getRestaurantInfoId(),restInfo.getRestaurantName(),restInfo.getRestaurantAddress(),restInfo.getCity(),restInfo.getContactPersonName(),
				                              restInfo.getPhoneNumber(),restInfo.getEmailId(),restInfo.getMinBookingAmountPerPerson(),t1,t2,restInfo.getNumberOfSeatAvailable());
		
		Optional<RestaurantEntity> rest = repo1.findById(restId);
		if(rest.isPresent())
		{
			RestaurantEntity r = rest.get();
			RestaurantEntity savedRest = repo1.save(r);
			restInfo1.setRest(savedRest);
			repo2.save(restInfo1);
			return Response.getSuccessResponse(restInfo1);
		}
		return Response.getErrorResponse("failed");
	}
	
	@PostMapping("/addFeatures/{restInfoId}")
	public Response<List<TableFeatureEntity>> featuresRegistration(@RequestBody List<String> featuresList, @PathVariable int restInfoId) throws IOException
	{
		List<TableFeatureEntity> featureList2 = new ArrayList<TableFeatureEntity>();
		Optional<RestaurantInfoEntity> obj = repo2.findById(restInfoId);
		
		if(obj.isPresent())
		{
			RestaurantInfoEntity restInfo = obj.get();
			featuresList.forEach((e)->{
				TableFeatureEntity t1 = new TableFeatureEntity();
				t1.setFeatureName(e.toString());
				featureList2.add(t1);
			});
			List<TableFeatureEntity> featureList3 = restServ.saveFeatures(featureList2, restInfo);
			
			return Response.getSuccessResponse(featureList3);
		}
		
		return Response.getErrorResponse("failed");
	}
	
	@PostMapping("addCusines/{restInfoId}")
	public Response<List<CuisinesEntity>> cuisinesRegistration(@RequestBody List<String> cusinesList, @PathVariable int restInfoId) throws IOException
	{
		List<CuisinesEntity> cusinesList2 = new ArrayList<CuisinesEntity>();
		Optional<RestaurantInfoEntity> obj = repo2.findById(restInfoId);
		
		if(obj.isPresent())
		{
			RestaurantInfoEntity restInfo = obj.get();
			cusinesList.forEach((e)->{
				CuisinesEntity c1 = new CuisinesEntity();
				c1.setCuisineName(e.toString());
				cusinesList2.add(c1);
			});
			
			List<CuisinesEntity> cusinesList3 = restServ.saveCusines(cusinesList2, restInfo);
			
			return Response.getSuccessResponse(cusinesList3);
		}
		
		return Response.getErrorResponse("failed");
	}
	
	
	@GetMapping("/getRestaurantCity/{city}")
	public Response<List<RestaurantInfoEntity>> getRestaurantsCity(@PathVariable String city)
	{
		List<RestaurantInfoEntity> list = repo2.findRestaurantsByCity(city);
		return Response.getSuccessResponse(list);
	}
	
	
	@GetMapping("/getAllRestaurantBookCostAsc")
	public Response<List<RestaurantInfoEntity>> getAllRestaurantsBookCostAsc()
	{
		List<RestaurantInfoEntity> list = repo2.findSortAsce();
		return Response.getSuccessResponse(list);
	}
	
	@GetMapping("/getAllRestaurantBookCostDesc")
	public Response<List<RestaurantInfoEntity>> getAllRestaurantsBookCostDesc()
	{
		List<RestaurantInfoEntity> list = repo2.findSortDesc();
		return Response.getSuccessResponse(list);
	}
	/*
	@PostMapping("addCusines/{restInfoId}")
	public Response<Set<CuisinesEntity>> cuisinesRegistration(@RequestBody Set<String> cusinesList, @PathVariable int restInfoId) throws IOException
	{
		System.out.println(cusinesList);
		Set<CuisinesEntity> cusinesList2 = new HashSet<CuisinesEntity>();
		Optional<RestaurantInfoEntity> obj = repo2.findById(restInfoId);
		
		if(obj.isPresent())
		{
			RestaurantInfoEntity restInfo = obj.get();
			cusinesList.forEach((e)->{
				CuisinesEntity c1 = new CuisinesEntity();
				c1.setCuisineName(e.toString());
				cusinesList2.add(c1);
			});
			Set<CuisinesEntity> cusinesList3 = restServ.saveCusines(cusinesList2, restInfo);
			System.out.println(cusinesList + "===================================");
			restInfo.setCusines(cusinesList3);
			repo2.save(restInfo);
			return Response.getSuccessResponse(cusinesList3);
		}
		
		return Response.getErrorResponse("failed");
	}
	*/

	@GetMapping("/getAllFeatures/{restInfoId}")
	public Response<List<TableFeatureEntity>> getAllFeatures(@PathVariable int restInfoId)
	{
		Optional<RestaurantInfoEntity> obj = repo2.findById(restInfoId);
		if(obj.isPresent())
		{
			List<TableFeatureEntity> list = repo3.findAllByRestInfo2(obj.get());
			return Response.getSuccessResponse(list);
		}
		return Response.getErrorResponse("Not found");
	}
	
	@GetMapping("/getAllRestaurantInfo")
	public Response<List<RestaurantInfoEntity>> getAllRestaurants()
	{
		List<RestaurantInfoEntity> list = repo2.findAll();
		return Response.getSuccessResponse(list);
	}
	
	@PutMapping("/updateRestaurantInfo/{openingTime}/{closingTime}/{restInfoId}")
	public Response<Optional<RestaurantInfoEntity>> updateRestaurantInfo(@PathVariable String openingTime,@PathVariable String closingTime,@PathVariable int restInfoId,@RequestBody RestaurantInfoEntity r)
	{
		Time t1 = Time.valueOf(openingTime);
		Time t2 = Time.valueOf(closingTime);
		Optional<RestaurantInfoEntity> obj = repo2.findById(restInfoId);
		if(obj.isPresent())
		{
			RestaurantInfoEntity rst = obj.get();
			rst.setRestaurantName(r.getRestaurantName());
			rst.setRestaurantAddress(r.getRestaurantAddress());
			rst.setCity(r.getCity());
			rst.setContactPersonName(r.getContactPersonName());
			rst.setPhoneNumber(r.getPhoneNumber());
			rst.setEmailId(r.getEmailId());
			rst.setMinBookingAmountPerPerson(r.getMinBookingAmountPerPerson());
			rst.setOpeningTime(t1);
			rst.setClosingTime(t2);
			rst.setNumberOfSeatAvailable(r.getNumberOfSeatAvailable());
			repo2.save(rst);
			return Response.getSuccessResponse(obj);
		}
		else
			return Response.getErrorResponse("Restaurant Info Not Updated");
	}
	
//delete nahi hot
	
	@DeleteMapping("/removeRestaurant/{id}")
	public Response<RestaurantInfoEntity> removeRestaurant(@PathVariable int id)
	{
		Optional<RestaurantInfoEntity> obj = repo2.findById(id);
		if(obj.isPresent())
		{
			RestaurantInfoEntity rst = obj.get();
			System.out.println(rst);
			repo2.delete(rst);
			return Response.getSuccessResponse(rst);
		}
		else
			return Response.getErrorResponse("Restaurant Info Not Deleted");
	}
	
	/*
	@PutMapping("/updateRestaurantInfo")
	public String updateRestaurantInfo(@RequestBody RestaurantInfoEntity r)
	{
		String result = "";
		Optional<RestaurantInfoEntity> obj = repo.findById(r.getRestaurantInfoId());
		if(obj.isPresent())
		{
			RestaurantInfoEntity rst = obj.get();
			rst.setRestaurantName(r.getRestaurantName());
			rst.setRestaurantAddress(r.getRestaurantAddress());
			rst.setCity(r.getCity());
			rst.setContactPersonName(r.getContactPersonName());
			rst.setPhoneNumber(r.getPhoneNumber());
			rst.setEmailId(r.getEmailId());
			rst.setMinBookingAmountPerPerson(r.getMinBookingAmountPerPerson());
			rst.setOpeningTime(r.getOpeningTime());
			rst.setClosingTime(r.getClosingTime());
			rst.setRestaurantContactNumber(r.getRestaurantContactNumber());
			rst.setNumberOfSeatAvailable(r.getNumberOfSeatAvailable());
			rst.setRestaurantId(r.getRestaurantId());
			repo.save(rst);
			result += "record updated";
			return result;
		}
		result += "record update failed";
		return result;
	}
	
	@DeleteMapping("/removeRestaurant/{id}")
	public String removeRestaurant(@PathVariable int id)
	{
		String result = "";
		Optional<RestaurantInfoEntity> obj = repo.findById(id);
		if(obj.isPresent())
		{
			RestaurantInfoEntity rst = obj.get();
			repo.delete(rst);
			result = "rst deleted successful..";
			return result;
		}
		else
			result = "Record not found !..";
		
		return result;
	}
	
	*/
	
}

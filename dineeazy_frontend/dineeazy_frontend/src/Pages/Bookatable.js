import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router"
import Restaurant from "../Components/Restaurant";
import { URL } from "../config";
import "../css/card-style.css";


const Bookatable = (props) => {

    const [restaurants, setRestaurants] = useState([]);

    const getAllRestaurants = () => {
       
        let url = `${URL}/restaurantInfo/getAllRestaurantInfo`

        axios.get(url).then((response) => {
            const result = response.data;
            console.log(result);

            if (result['status'] === "Success") {
                const data = result['data'];
                setRestaurants(data);
                console.log(data);
                console.log(restaurants);
            }
        })
    }

    const getAllRestLowToHigh = () =>{

        let url = `${URL}/restaurantInfo/getAllRestaurantBookCostAsc`

        axios.get(url).then((response) => {
            const result = response.data;
            console.log(result);

            if (result['status'] === "Success") {
                const data = result['data'];
                setRestaurants(data);
                
            }
        })
    }

    const getAllRestHighToLow = () =>{

        let url = `${URL}/restaurantInfo/getAllRestaurantBookCostDesc`

        axios.get(url).then((response) => {
            const result = response.data;
            console.log(result);

            if (result['status'] === "Success") {
                const data = result['data'];
                setRestaurants(data);
                
            }
        })
    }

    function handler(event)
    {
        if(event.target.value == "Low to high")
        {
            getAllRestLowToHigh()
        }
        if(event.target.value == "high to low")
        {
            getAllRestHighToLow()
        }
        else
        {
            getAllRestaurants()
        }
    }

    useEffect(() => {
        getAllRestaurants()
    }, []);

        return(
            <div className="container-xxl pt-5 pb-3">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <div className="text-right wow fadeInUp" data-wow-delay="0.1s">
                <div className="container-fluid d-flex flex-row-reverse justify-content-right">
                <h5>
                <a style={{Color:"#FEA116"}}><label> Sort By :  </label></a>
                <select onChange={handler}>  
                <option aria-readonly value="select"> ---- Select ----</option>
                <option value = "Rating"> Rating </option>  
                <option value = "Low to high" > Price : Low to High  </option>  
                <option value = "high to low" > Price : High to Low </option>  
                </select>  <br/><br/>
                </h5> 
                </div>
                </div>
                </div>
                <div className="container-fluid d-flex justify-content-center">
                    {(restaurants.length > 0)
                        ? (<div className="row">
                            {restaurants.map(restaurant =><div className="col-md-3"><Restaurant restaurant={restaurant} key={restaurant.restaurantInfoId} /><br/><br/></div>)}
                        </div>)
                        : (<div className="card">
                            <div className="card-body">
                                No Restaurants.
                            </div>
                        </div>)
                    }
                </div>
            </div>
            </div>
        );
}

export default Bookatable;
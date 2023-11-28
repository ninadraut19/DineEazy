import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router"
import Restaurant from "../Components/Restaurant";
import { URL } from "../config";
import "../css/card-style.css";

const SORT_PRICE_ASC = "price,asc";
const SORT_PRICE_DESC = "price,desc";

const RestaurantsList = (props) => {

    const [restaurants, setRestaurants] = useState([]);

    const location = useLocation()
   
    const size = 5;

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

    useEffect(() => {
        getAllRestaurants()
    }, []);

    return(
        <div className="container-xxl pt-5 pb-3">
        <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h5 className="section-title ff-secondary text-center text-primary fw-normal">Highly Recommended</h5>
                <h1 className="mb-5">Popular Restaurants</h1>
            </div>
            <div className="container-fluid d-flex justify-content-center">
                    {(restaurants.length > 0)
                        ? (<div className="row">
                            {restaurants.map(restaurant =><div className="col-md-3"><Restaurant restaurant={restaurant} key={restaurant.id} /><br/><br/></div>)}
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

export default RestaurantsList;

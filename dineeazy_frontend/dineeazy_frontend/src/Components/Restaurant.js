import { useState,useEffect } from "react"
import imag1 from '../assets/cafe-mozaic.webp';
import "../css/card-style.css";
import axios from "axios";
import { URL } from "../config";
import BookingRestaurant from "../Pages/BookingRestaurant";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Restaurant = (props) => {

    const [restaurant, setRestaurant] = useState(props.restaurant)
    const [restInfoId, setRestInfoId] = useState(props.restaurant.restaurantInfoId);
    // userId = sessionStorage['id']
    const [image, setImage] = useState({})
    //const custId = useSelector((state)=>{return state.custId});
    //const custLoginStatus = useSelector((state)=>{return state.custLoginStatus});

    const navigate = useNavigate()

    useEffect(() => {

        let url = `${URL}/image/getImage/${restInfoId}`

        axios.get(url).then((response) => {
            const result = response.data;
            setImage(result);
        })

    }, []);

    const goToBooking = (e) => {
        navigate('/booking', { state: { restaurant, image } })
      }

    
    const validateUser = (e) =>{
        e.preventDefault()
        const data = window.sessionStorage.getItem('custLoginStatus');
        if(data == 1)
        {
            goToBooking()
        }
        else
        {
            navigate('/login')
        }
        
    }
    
    return(
            <div className="card text-center shadow">
                <div className="overflow">
                    <img src={`data:image/jpg;base64,${image}`} alt="img1" className="card-img-top"/>
                </div>
                <div className="card-body text-dark">
                    <h4 className="card-title">{restaurant.restaurantName}</h4>
                    <p className="card-text text-secondary">{restaurant.restaurantAddress}<br/>&#8377;{restaurant.minBookingAmountPerPerson} for 1 approx</p>
                    <div className="btn btn-outline-primary w-80 py-0" >
                    <div className="btn-group">
                        <a className="btn" onClick={validateUser}>Book Now</a>
                    </div>
                    </div>
                    <div className="btn btn-primary w-20 py-0" >
                    <div className="btn-group">
                        <a className="btn"><i className="icon-plus">&#9733; 4.5</i></a>
                    </div>
                    </div>
                </div>
            </div>   
    );
}



export default Restaurant;
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import { URL } from "../config";


function AddRestaurant(){

    const [restaurantName, setRestaurantName] = useState('')
    const [address, setAddress] = useState('')
    const [contactNumber, setContactNumber] = useState('')
    const [emailId, setEmailId] = useState('')
    const [city, setCity] = useState('')
    const [image, setImage] = useState({})
    const [contactPersonName, setContactPersonName] = useState('')
    const [seatsAvailable, setSeatsAvailable] = useState('')
    const [openingTime, setOpeningTime] = useState('')
    const [closingTime, setClosingTime] = useState('')
    const [minBookingAmount, setMinBookingAmount] = useState('')
    const [cuisinesList] = useState([])
    const [featuresList] = useState([])   


    const navigate = useNavigate()
    const location = useLocation()

    
    const [restLoginStatus, setRestLoginStatus] = useState(0);
    const [restaurantId, setRestaurantId] = useState(window.sessionStorage.getItem('restaurantId'))

    useEffect(() => {
        const data = window.sessionStorage.getItem('restLoginStatus');
        if ( data !== null ) setRestLoginStatus(JSON.parse(data));
    }, [restLoginStatus]);

    const Logout = (e) =>{
  
        e.preventDefault()
        window.sessionStorage.setItem('restLoginStatus', JSON.stringify(0));
        window.sessionStorage.setItem('restaurantId', 0);
        window.sessionStorage.setItem('restaurantInfoId', 0);
        navigate("/restaurant")
    }

    useEffect(() => {
        const data = window.sessionStorage.getItem('restLoginStatus');
        if(data != 1){
            navigate("/restLogin")
        }
    }, []);

    const save = (e) => {

        e.preventDefault()

        if (restaurantName.length == 0) {
            alert('please enter restaurant name')
        } else if (address.length == 0) {
            alert('please enter restaurant address')
        } else if (contactNumber.length == 0) {
            alert('please enter contact number')
        } else if (emailId.length == 0) {
            alert('please enter emailId')
        } else if (city.length == 0) {
            alert('please enter city')
        } else if (contactPersonName.length == 0) {
            alert('please enter contact person name')
        }else if (seatsAvailable.length == 0) {
            alert('please enter seating capacity')
        }else if (openingTime.length == 0) {
            alert('please enter opening time')
        }else if (closingTime.length == 0) {
            alert('please enter closing time')
        }else if (minBookingAmount.length == 0) {
            alert('please enter min booking amount')
        }else {
            const body = {
                restaurantName:restaurantName,
                restaurantAddress:address,
                city:city,
                contactPersonName:contactPersonName,
                phoneNumber:contactNumber,
                emailId:emailId,
                minBookingAmountPerPerson:minBookingAmount,
                numberOfSeatAvailable:seatsAvailable,
            }

            const url = `${URL}/restaurantInfo/addRestaurantInfo/${restaurantId}/${openingTime}/${closingTime}`

            axios.post(url, body).then((response) => {
                const result = response.data
                console.log(result)
                if (result['status'] == 'Success') {

                    const formData = new FormData()
                    formData.append('image', image)
            
                    const config = {     
                    headers: { 'Content-Type': 'multipart/form-data' }
                    }

                    const url2 = `${URL}/image/postImage/${result['data'].restaurantInfoId}`

                    axios.post(url2, formData, config).then((response) => {

                        const result = response.data
                        console.log(result);
                        if (result['status'] == 'Success') {
                            alert('Image added successful')
                            navigate('/')
                        } else {
                            alert(result['error'])
                        }
                    }) 

                    const url3 = `${URL}/restaurantInfo/addFeatures/${result['data'].restaurantInfoId}`

                    const data = JSON.stringify(featuresList)
                    const config1 = {
                            headers: {'Content-Type': 'application/json'}
                    }

                    axios.post(url3, data, config1).then((response) => {

                        const result = response.data
                        console.log(result);
                        console.log(featuresList);
                        if (result['status'] == 'Success') {
                            alert('featurs added')
                            navigate('/')
                        } else {
                            alert(result['error'])
                        }
                    }) 

                    const url4 = `${URL}/restaurantInfo/addCusines/${result['data'].restaurantInfoId}`

                    const data1 = JSON.stringify(cuisinesList)

                    axios.post(url4, data1, config1).then((response) => {

                        const result = response.data
                        console.log(result);
                        if (result['status'] == 'Success') {
                            alert('cusines added')
                            navigate('/')
                        } else {
                            alert(result['error'])
                        }
                    })
                    const {restaurantInfoId} = result['data']
                    window.sessionStorage.setItem("restaurantInfoId", restaurantInfoId)
                    alert('Restauarnt added successful')
                } else {
                    alert(result['error'])
                }
            })


           
        }
    }
    

    return(
        <div className="container-xxl bg-white p-0">
            <div className="container-xxl position-relative p-0">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
                    <a href="" className="navbar-brand p-0">
                        <h1 className="text-primary m-0"><i className="fa fa-utensils me-3"></i>DineEazy</h1>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto py-0 pe-4">
                            <Link to="/home" className="nav-item nav-link">Home</Link>
                            <Link to="/restaurant" className="nav-item nav-link">Restaurant</Link>
                            <Link to="/addRestaurant" className="nav-item nav-link active">Add Restaurant</Link>
                            <Link to="/addMenu" className="nav-item nav-link">Add Menu</Link>
                            <Link to="/restAboutUs" className="nav-item nav-link">About Us</Link>
                            <Link to="/restContact" className="nav-item nav-link">Contact</Link>
                            {(restLoginStatus == 1)
                                ? (<Link to="/logout" className="nav-item nav-link" onClick={Logout}>Logout</Link>)
                                : (<Link to="/restLogin" className="nav-item nav-link">Login</Link>)
                            }
                        </div>
                            <Link to="/restSignUp" className="btn btn-primary py-2 px-4">Sign Up</Link>
                    </div>
                </nav>

                <div className="container-xxl py-2 bg-dark hero-header mb-2">
                    <div className="container text-center my-5 pt-5 pb-4">
                        <h1 className="display-3 text-white mb-3 animated slideInDown">Add Restaurant</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb justify-content-center text-uppercase">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item text-white active" aria-current="page">Add Restaurant</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>

            <div className="container-xxl py-5 px-0 wow fadeInUp" data-wow-delay="0.1s">
            <div className="row g-0">
                <div className="col-md-12 bg-dark d-flex align-items-center">
                    <div className="p-5 wow fadeInUp" data-wow-delay="0.2s">
                        <center><h3 className="section-title ff-secondary text-start text-primary fw-normal">PLease Add your Restaurant on DineEazy</h3></center><br /><br />
                        <form > 
                            <div className="row g-3">
                            <div className="col-md-2"></div>
                                <div className="col-md-8">
                                    <div className="form-floating">
                                        <input type="text" className="form-control" id="text" placeholder="restaurant name"  onChange={(e) => {
                                                setRestaurantName(e.target.value)}}/>
                                        <label htmlFor="text">Restaurant Name</label>
                                    </div>
                                </div>
                                <div className="col-md-2"></div>
                                <div className="col-md-2"></div>
                                <div className="col-md-8">
                                    <div className="form-floating">
                                        <input type="text" className="form-control" id="text" placeholder="restaurant address" onChange={(e) => {
                                                setAddress(e.target.value)}}/>
                                        <label htmlFor="text">Restaurant Address</label>
                                    </div>
                                </div>
                                <div className="col-md-2"></div>
                                <div className="col-md-2"></div>
                                <div className="col-md-4">
                                    <div className="form-floating">
                                      <select onChange={(e) => {setCity(e.target.value)}} className="form-control" name="cities" id="city" >
                                      <option value="select">--Select the City--</option>
                                      <option value="Delhi">Delhi</option>
                                      <option value="Mumbai">Mumbai</option>
                                      <option value="Pune">Pune</option>
                                      <option value="Banglore">Banglore</option>
                                      </select>                 
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-floating">
                                        <input type="text" className="form-control" id="text" placeholder="contact person name" onChange={(e) => {
                                                    setContactPersonName(e.target.value)}}/>
                                        <label htmlFor="text">Executive's Name</label>
                                    </div>
                                </div>
                                <div className="col-md-2"></div>
                                <div className="col-md-2"></div>   
                                <div className="col-md-4">
                                    <div className="form-floating">
                                        <input type="number" className="form-control" id="number" placeholder="Mobile number" onChange={(e) => {
                                                setContactNumber(e.target.value)}}/>
                                        <label htmlFor="number">contact number</label>
                                    </div>
                                </div>
                               
                                <div className="col-md-4">
                                    <div className="form-floating">
                                        <input type="email" className="form-control datetimepicker-input" id="email" placeholder="email" onChange={(e) => {
                                                setEmailId(e.target.value)}}/>
                                        <label htmlFor="password">Email</label>
                                    </div>
                                </div>
                                
                                <div className="col-md-2"></div>
                                <div className="col-md-2"></div>
                                <div className="col-md-4">
                                <div className="form-floating">
                                    <input type="time" className="form-control" id="time" placeholder="openig time" onChange={(e) => {
                                                setOpeningTime(e.target.value)}}/>
                                    <label htmlFor="time">Opening Time</label>
                                </div>
                             </div>   
                                <div className="col-md-4">
                                    <div className="form-floating">
                                        <input type="time" className="form-control" id="time" placeholder="closing time" onChange={(e) => {
                                                setClosingTime(e.target.value)}}/>
                                        <label htmlFor="time">Closing Time</label>
                                    </div>
                                </div>
                                <div className="col-md-2"></div>
                                <div className="col-md-2"></div>
                                <div className="col-md-4">
                                    <div className="form-floating">
                                        <input type="number" className="form-control" id="number" placeholder="seats" onChange={(e) => {
                                                setSeatsAvailable(e.target.value)}}/>
                                        <label htmlFor="number">Number of Seats</label>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-floating">
                                        <input type="number" className="form-control" id="number" placeholder="amount per person" onChange={(e) => {
                                                setMinBookingAmount(e.target.value)}}/>
                                        <label htmlFor="number">Booking Amount Per Person</label>
                                    </div>
                                </div>
                                <div className="col-md-2"></div>
                                <div className="col-md-2"></div>
                              
                                        
                         {/********************************************************************************************************/}
                    
                       <div className="col-md-4" >    
                       <div class="dropdown">
                       
                         <button  class="btn btn-secondary dropdown-toggle w-100 py-3"  type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" >&ensp;&ensp;Select the cuisines &ensp;&ensp;</button>
                         <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                           <li>
                              <a class="dropdown-item">
                                 <input class="form-check-input" name="1" type="radio"  value="Maharashtrian" onClick={(e)=>{cuisinesList.push(e.target.value)}} />
                                 <label class="form-check-label">&ensp; Maharashtrian &ensp;</label>
                             </a>
                           </li>
                           <li>
                              <a class="dropdown-item">
                                 <input class="form-check-input"  name="2" type="radio" value="South Indian" onClick={(e)=>{cuisinesList.push(e.target.value)}} />
                                 <label class="form-check-label">&ensp; South Indian &ensp;</label>
                             </a>
                           </li>
                           <li>
                              <a class="dropdown-item">
                                 <input class="form-check-input"  name="3" type="radio" value="North Indian	" onClick={(e)=>{cuisinesList.push(e.target.value)}} />
                                 <label class="form-check-label">&ensp; North Indian &ensp;</label>
                             </a>
                           </li>
                           <li>
                              <a class="dropdown-item">
                                 <input class="form-check-input"  name="4" type="radio" value="Chinese" onClick={(e)=>{cuisinesList.push(e.target.value)}} />
                                 <label class="form-check-label">&ensp; Chinese &ensp;</label>
                             </a>
                           </li>
                           <li>
                              <a class="dropdown-item">
                                 <input class="form-check-input"  name="5" type="radio" value="Fast Food" onClick={(e)=>{cuisinesList.push(e.target.value)}} />
                                 <label class="form-check-label">&ensp; Fast Food &ensp;</label>
                             </a>
                           </li>
                           <li>
                              <a class="dropdown-item">
                                 <input class="form-check-input"  name="6" type="radio" value="Thai Food" onClick={(e)=>{cuisinesList.push(e.target.value)}} />
                                 <label class="form-check-label">&ensp; Thai Food &ensp;</label>
                             </a>
                           </li>
                           <li>
                              <a class="dropdown-item">
                                 <input class="form-check-input"  name="7" type="radio" value=" Italian" onClick={(e)=>{cuisinesList.push(e.target.value)}} />
                                 <label class="form-check-label">&ensp;  Italian &ensp;</label>
                             </a>
                           </li>
                           <li>
                              <a class="dropdown-item">
                                 <input class="form-check-input"  name="8" type="radio" value="Bengali" onClick={(e)=>{cuisinesList.push(e.target.value)}} />
                                 <label class="form-check-label">&ensp; Bengali &ensp;</label>
                             </a>
                           </li>
                           <li>
                              <a class="dropdown-item">
                                 <input class="form-check-input"  name="9" type="radio" value="Rajastani" onClick={(e)=>{cuisinesList.push(e.target.value)}} />
                                 <label class="form-check-label">&ensp; Rajastani &ensp;</label>
                             </a>
                           </li>
                           <li>
                              <a class="dropdown-item">
                                 <input class="form-check-input"  name="10" type="radio" value="Hyderabadi" onClick={(e)=>{cuisinesList.push(e.target.value)}} />
                                 <label class="form-check-label">&ensp; Hyderabadi &ensp;</label>
                             </a>
                           </li>
                           <li>
                              <a class="dropdown-item">
                                 <input class="form-check-input"  name="11" type="radio" value="Mexican" onClick={(e)=>{cuisinesList.push(e.target.value)}} />
                                 <label class="form-check-label">&ensp; Mexican &ensp;</label>
                             </a>
                           </li>
                           <li>
                              <a class="dropdown-item">
                                 <input class="form-check-input"  name="12" type="radio" value="Japanese" onClick={(e)=>{cuisinesList.push(e.target.value)}} />
                                 <label class="form-check-label">&ensp; Japanese &ensp;</label>
                             </a>
                           </li>
                         </ul>
                       </div>
                       </div>

                        {/******************************************************************************************************/}

                  
                     
                     <div className="col-md-4" >    
                        <div class="dropdown">
                         <button class="btn btn-secondary dropdown-toggle w-100 py-3"  type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" >&ensp;&ensp;&ensp;Select Features&ensp;&ensp;&ensp;&ensp;</button>
                         <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                           <li>
                              <a class="dropdown-item">
                                 <input class="form-check-input" type="radio" name="13" value="Air Condition" onClick={(e)=>{featuresList.push(e.target.value)}}/>
                                 <label class="form-check-label">&ensp; Air Condition &ensp;</label>
                             </a>
                           </li>
                           <li>
                              <a class="dropdown-item">
                                 <input class="form-check-input" type="radio" name="14" value="Live Music" onClick={(e)=>{featuresList.push(e.target.value)}} />
                                 <label class="form-check-label">&ensp; Live Music &ensp;</label>
                             </a>
                           </li>
                           <li>
                              <a class="dropdown-item">
                                 <input class="form-check-input" type="radio" name="15" value="Outdoor Seating" onClick={(e)=>{featuresList.push(e.target.value)}} />
                                 <label class="form-check-label">&ensp; Outdoor Seating &ensp;</label>
                             </a>
                           </li>
                           <li>
                              <a class="dropdown-item">
                                 <input class="form-check-input" type="radio" name="16" value=" Lift" onClick={(e)=>{featuresList.push(e.target.value)}} />
                                 <label class="form-check-label">&ensp;  Lift &ensp;</label>
                             </a>
                           </li>
                           <li>
                              <a class="dropdown-item">
                                 <input class="form-check-input" type="radio" name="17" value="Card Accepted" onClick={(e)=>{featuresList.push(e.target.value)}} />
                                 <label class="form-check-label">&ensp; Card Accepted &ensp;</label>
                             </a>
                           </li>
                           <li>
                              <a class="dropdown-item">
                                 <input class="form-check-input" type="radio" name="18" value="Bar & Pubs" onClick={(e)=>{featuresList.push(e.target.value)}} />
                                 <label class="form-check-label">&ensp; Bar & Pubs &ensp;</label>
                             </a>
                           </li>
                            <li>
                            <a class="dropdown-item">
                                <input class="form-check-input" type="radio" name="19" value="Child Allowed" onClick={(e)=>{featuresList.push(e.target.value)}} />
                                <label class="form-check-label">&ensp; Child Allowed &ensp;</label>
                            </a>
                            </li>
                             <li>
                                <a class="dropdown-item">
                                <input class="form-check-input" type="radio" name="20" value="Live Music" onClick={(e)=>{featuresList.push(e.target.value)}} />
                                <label class="form-check-label">&ensp; Live Music &ensp;</label>
                            </a>
                            </li>
                            <li>
                            <a class="dropdown-item">
                                <input class="form-check-input" type="radio" name="21" value="Live Performance" onClick={(e)=>{featuresList.push(e.target.value)}} />
                                <label class="form-check-label">&ensp; Live Performance &ensp;</label>
                            </a>
                            </li>
                            <li>
                            <a class="dropdown-item">
                                <input class="form-check-input" type="radio" name="22" value="Alcohol Served" onClick={(e)=>{featuresList.push(e.target.value)}} />
                                <label class="form-check-label">&ensp; Alcohol Served &ensp;</label>
                            </a>
                        </li>
                        <li>
                        <a class="dropdown-item">
                            <input class="form-check-input" type="radio" name="23" value="Smoking Area" onClick={(e)=>{featuresList.push(e.target.value)}} />
                            <label class="form-check-label">&ensp; Smoking Area &ensp;</label>
                        </a>
                        </li>
                            <li>
                                <a class="dropdown-item">
                                <input class="form-check-input" type="radio" name="24" value="DJ" onClick={(e)=>{featuresList.push(e.target.value)}} />
                                <label class="form-check-label">&ensp; DJ &ensp;</label>
                            </a>
                            </li>
                         </ul>
                       </div>
                       </div>
                        
                       <div className="col-md-2"></div>
                       <div className="col-md-2"></div>
                       <div className="col-md-8">
                       <div className="form-floating">
                       <div className=" w-100 py-3" style={{backgroundColor:"darkgrey"}}>
                       <input type="file" style={{paddingInline:10}} id="photo" name="photo" accept="image/*" onChange={(e) => {
                                       setImage(e.target.files[0])}}/>
                       </div>
                       </div>
                       </div>
                       <div className="col-md-2"></div>
                       <div className="col-md-2"></div>
                       <div className="col-md-12"></div>
                       <div className="col-md-2"></div>
                               
                               
                               
                               <div className="col-8">
                                    <button className="btn btn-primary w-100 py-3" type="submit" onClick={save}>Submit</button>
                               </div>
                             </div>
                        </form>
                     </div>
                    </div>
                   </div>
                   </div>     

            <Footer></Footer>
            <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    )
}

export default AddRestaurant;
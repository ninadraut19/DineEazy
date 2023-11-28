import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import img from '../../assets/addmenu.jpg';
import Footer from "../../Components/Footer";
import { URL } from "../../config";

const AddMenu = props =>{

    const [foodName, setFoodName] = useState("")
    const [category, setCategory] = useState("")
    const [cusineType, setCusineType] = useState("")
    const [unitPrice, setUnitPrice] = useState(0)

    const [restLoginStatus, setRestLoginStatus] = useState(0);
    const [restInfoId, setRestInfoId] = useState(window.sessionStorage.getItem('restaurantInfoId'))
    const [restId, setRestId] = useState(window.sessionStorage.getItem('restaurantId'))
    const navigate = useNavigate()

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

    const saveMenu = (e) =>{

        e.preventDefault()

        if (foodName.length == 0) {
            alert('please enter foodName name')
        } else if (category.length == 0) {
            alert('please enter category address')
        } else if (cusineType.length == 0) {
            alert('please enter cusineType number')
        } else if (unitPrice.length == 0) {
            alert('please enter unitPrice')
        } else {
            const body = {
                foodName:foodName,
                category:category,
                cusineType:cusineType,
                unitPrice:unitPrice,
            }

            const url = `${URL}/foodInfo/addFoodInfo/${restId}`
     
            axios.post(url, body).then((response) => {
                const result = response.data
                console.log(result)
                if (result['status'] == 'Success') {
                    console.log(result);
                    alert("food added successfully")
                    window.location.reload(false);
                }else {
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
                                <Link to="/addRestaurant" className="nav-item nav-link">Add Restaurant</Link>
                                <Link to="/addMenu" className="nav-item nav-link active">Add Menu</Link>
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
                            <h1 className="display-3 text-white mb-3 animated slideInDown">Add Menu</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center text-uppercase">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item text-white active" aria-current="page">Add Menu</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>

                <div className="container-xxl py-5 px-0 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <div>
                                <img src={img} alt="login-image" width={1200}></img>
                            </div>
                        </div>
                        <div className="col-md-8 bg-dark d-flex align-items-center ">
                            <div className="p-5 wow fadeInUp" data-wow-delay="0.2s">
                                <h3 className="section-title ff-secondary text-start text-primary fw-normal">Add Food Items to the Restaurant</h3><br/><br/><br/>
                    
                                <form>
                                    <div className="row g-3">
                                        <div className="col-md-9">
                                            <div className="form-floating">
                                            <input type="text" name="name" className="form-control" id="text" placeholder="Food name" onChange={(e)=>{setFoodName(e.target.value)}}/>
                                            <label for="text"> Food Name</label>
                                            </div>
                                        </div>
                                        <div className="col-md-3"></div>
                                        <div className="col-md-9">
                                            <div className="form-control">
                                            <select id="sel" onChange={(e)=>{setCusineType(e.target.value)}}>
                                            <option aria-readonly>&ensp;---- Select  the  type  of  Cuisine ----</option>
                                            <option value="Maharashtrian">Maharashtrian</option>
                                            <option value="South Indian">South Indian</option>
                                            <option value="North Indian">North Indian</option>
                                            <option value="Chinese">Chinese</option>
                                            <option value="Fast Food">Fast Food</option>
                                            <option value="Thai Food">Thai Food</option>
                                            <option value="Italian">Italian</option>
                                            <option value="Bengali">Bengali</option>
                                            <option value="Hyderabadi">Hyderabadi</option>
                                            <option value="Mexican">Mexican</option>
                                            <option value="Rajastani">Rajastani</option>
                                            <option value="Japanese">Japanese</option>
                                        </select>
                                            </div>
                                        </div>

                                        <div className="col-md-3"></div>
                                        <div className="col-md-9">
                                            <div className="form-control">
                                            <select id="sel2" onChange={(e)=>{setCategory(e.target.value)}}>
                                            <option aria-readonly>&ensp;---- Select  the  Food category ----</option>
                                            <option value="Main Course">Main Course</option>
                                            <option value="Rice">Rice</option>
                                            <option value="Indian Breads">Indian Breads</option>
                                            <option value="Curry">Curry</option>
                                            <option value="Dessert">Dessert</option>
                                            <option value="Starter">Starter</option>
                                            <option value="Soup">Soup</option>
                                            <option value="Salad">Salad</option>
                                            <option value="Continental">Continental</option>
                                            <option value="Beverage">Beverage</option>
                                        </select>
                                            </div>
                                        </div>
                                        <div className="col-md-3"></div>    
                                        <div className="col-md-9">
                                        <div className="form-floating">
                                        <input type="number" name="name" className="form-control" id="number" placeholder="Unit Price" onChange={(e)=>{setUnitPrice(e.target.value)}}/>
                                        <label for="number"> Unit Price in &#8377;</label>
                                        </div>
                                    </div>
                                        <div className="col-md-3"></div>
                                        <div className="col-md-12"></div>
                                        <div className="col-md-12"></div>
                                    <div className="col-9">
                                        
                                            <button className="btn btn-primary w-100 py-3" type="Add Food Item" onClick={saveMenu}>Add Food Item</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            <Footer></Footer>
        </div>
    );
}

export default AddMenu;
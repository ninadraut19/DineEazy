import React,{Component} from "react";
import RestCard from "./RestCard";

class HomeRestCards extends Component {

    render(){
        return(
            <div className="container-xxl pt-5 pb-3">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h5 className="section-title ff-secondary text-center text-primary fw-normal">Highly Recommended</h5>
                    <h1 className="mb-5">Popular Restaurants</h1>
                </div>
                <div className="container-fluid d-flex justify-content-center">
                    <div className="row">
                        <div className="col-md-3">
                            <RestCard></RestCard>
                        </div>
                        <div className="col-md-3">
                            <RestCard></RestCard>
                        </div>
                        <div className="col-md-3">
                            <RestCard></RestCard>
                        </div>
                        <div className="col-md-3">
                            <RestCard></RestCard>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default HomeRestCards;
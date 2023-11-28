import React from "react";

function Testimonial(){
    return(
        <div className="container-xxl py-3 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
            <div className="text-center">
                <h3 className="section-title ff-secondary text-center text-primary fw-normal">Reviews</h3>
                <h1 className="mb-5">Our Customers Say!!!</h1>
            </div>
            <div className="row">
            <div className="col-3">
            <div className="card text-center shadow">
            <div className="testimonial-item bg-transparent border rounded p-4">
                    <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                    <p>The best website to book the table at any best Restaurant.</p>
                    <div className="d-flex align-items-center">
                        <img className="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-1.jpg" style={{width:100, height:100}}/>
                        <div className="ps-3">
                            <h5 className="mb-1">Scarlett Johansson</h5>
                        </div>
                    </div>
                </div>
                </div>
                </div>

                <div className="col-3">
                <div className="card text-center shadow">
                <div className="testimonial-item bg-transparent border rounded p-4">
                    <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                    <p>Very easily i can checkout the food from any Restaurant</p>
                    <div className="d-flex align-items-center">
                        <img className="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-2.jpg" style={{width:100, height:100}}/>
                        <div className="ps-3">
                            <h5 className="mb-1">Zakir Khan</h5>
                        </div>
                    </div>
                </div>
                </div>
                </div>
                
                <div className="col-3">
                <div className="card text-center shadow">
                <div className="testimonial-item bg-transparent border rounded p-4">
                    <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                    <p>The discount and deals offer at DineEazy are just awesome</p>
                    <div className="d-flex align-items-center">
                        <img className="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-3.jpg" style={{width:100, height:100}}/>
                        <div className="ps-3">
                            <h5 className="mb-1">David Warner</h5>
                        </div>
                    </div>
                </div>
                </div>
                </div>

                <div className="col-3">
                <div className="card text-center shadow">
                <div className="testimonial-item bg-transparent border rounded p-4">
                    <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                    <p>Even the owners can add their Restaurant at DineEazy.great Features</p>
                    <div className="d-flex align-items-center">
                        <img className="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-4.jpg" style={{width:100, height:100}}/>
                        <div className="ps-3">
                            <h5 className="mb-1">Cersei Lannister</h5>
                        </div>
                    </div>
                </div>
                </div>
                </div>
                </div>
            </div>
        </div>
    
    )
}

export default Testimonial;
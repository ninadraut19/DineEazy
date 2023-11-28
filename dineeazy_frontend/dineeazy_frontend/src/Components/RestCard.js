import React from "react";
import imag1 from '../assets/cafe-mozaic.webp';
import "../css/card-style.css";

const RestCard = props =>{
    
    return(
        <div className="card text-center shadow">
            <div className="overflow">
                <img src={imag1} alt="img1" className="card-img-top"/>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">Coriander Kitchen</h4>
                <p className="card-text text-secondary">
                    Conrad Pune, Pune
                    30% off
                </p>
            </div>
        </div>   
    );
}

export default RestCard;
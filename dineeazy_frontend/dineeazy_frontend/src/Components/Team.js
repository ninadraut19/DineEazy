import varun from '../assets/varun.jpg'
import ninad from '../assets/ninad.jpg'
import "../css/card-style.css";

function Team(){
    return(
        <div className="container-xxl pt-5 pb-3" >
            <div className="container" >
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h2 className="section-title ff-secondary text-center text-primary fw-normal">Team Members</h2><br/><br/><br/>
                </div>
                <div className= "row g-4">
                <div className= "col-lg-2 col-md-2 wow fadeInUp" data-wow-delay="0.3s">
                <div className= "text-center rounded overflow-hidden">
                    <div className= "rounded-circle overflow-hidden m-4">
                        <img className= "img-fluid" src={ninad} alt="" />
                    </div>
                    <h6 className="text-primary">Ninad Raut</h6>
                </div>
            </div>
                    <div className="col-lg-2 col-md-2 wow fadeInUp" data-wow-delay="0.3s">
                        <div className=" text-center rounded overflow-hidden">
                            <div className="rounded-circle overflow-hidden m-4">
                                <img className="img-fluid" src={varun} alt=""/>
                            </div>
                            <h6 className="text-primary">Varun Patakrod</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team;
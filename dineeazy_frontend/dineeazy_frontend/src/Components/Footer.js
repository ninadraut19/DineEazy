
function Footer(){
    return(
        <div className="container-fluid bg-dark text-light footer pt-5 mt-3 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-2">
            <div className="row g-5">
                <div className="col-lg-3 col-md-6">
                    <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Company</h4>
                    <a className="btn btn-link" href="">About Us</a>
                    <a className="btn btn-link" href="">Contact Us</a>
                    <a className="btn btn-link" href="">Reservation</a>
                    <a className="btn btn-link" href="">Login-Signup</a>
                    <a className="btn btn-link" href="">Add Restaurant</a>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Contact</h4>
                    <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>Baner, Pune</p>
                    <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>1800 80 1454</p>
                    <p className="mb-2"><i className="fa fa-envelope me-3"></i>team.dineeazy@gmail.com</p>
                    <div className="d-flex pt-2">
                        <a className="btn btn-outline-light btn-social" href="twitter.com/DineEazy"><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-outline-light btn-social" href="facebook.com/DineEazy"><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-outline-light btn-social" href="youtube.com/DineEazy"><i className="fab fa-youtube"></i></a>
                        <a className="btn btn-outline-light btn-social" href="linkdin.com/DineEazy"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">More Information</h4>
                    
                    <a className="btn btn-link" href="">Privacy Policy</a>
                    <a className="btn btn-link" href="">CSR</a>
                    <a className="btn btn-link" href="">Terms & Conditions</a>  
                    <a className="btn btn-link" href="">Careers</a>  
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Our Aim</h4>

                    <p><h6 className="text-light fw-normal">We proudly support Share Our Strength’s No Kid Hungry campaign. Together, our goal is to ensure that all Indian children get the healthy food they need to live and grow everyday.</h6></p>
                    <div className="position-relative mx-auto" style={{maxWidth:400}}></div>
                </div>
            </div>
            <div className="container">
                <div className="copyright">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">          
                            &copy; <a className="border-bottom" href="#">DineEazy</a>, All Right Reserved. 
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <div className="footer-menu">
                                <a href="">Home</a>
                                <a href="">Cookies</a>
                                <a href="">Help</a>
                                <a href="">FQAs</a>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        </div> 
    </div>
    )
}

export default Footer;
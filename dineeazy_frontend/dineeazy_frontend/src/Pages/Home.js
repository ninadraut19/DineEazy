import About from "../Components/About";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Service from "../Components/Service";
import Team from "../Components/Team";
import Testimonial from "../Components/Testimonial";
import RestaurantsList from "./RestaurantList";
import RestaurantsListCities from "./RestaurantListCities";


function Home() {
    return (
      <div className="container-xxl bg-white p-0">
        {/* <Spinner></Spinner> */}
        <Navbar></Navbar>
        <Service></Service>
        <RestaurantsListCities city="pune"></RestaurantsListCities>
        <RestaurantsListCities city="mumbai"></RestaurantsListCities>
        {/* <RestaurantsList></RestaurantsList> */}
        <About></About>
        <Testimonial></Testimonial>
        <Team></Team>
        <Footer></Footer>
        <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
      </div>
    );
  }

  export default Home;
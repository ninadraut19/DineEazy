import './App.css';
import Spinner from './Components/Spinner';
import Navbar from './Components/Navbar';
import Service from './Components/Service';
import Testimonial from './Components/Testimonial';
import Footer from './Components/Footer';
import Login from './Pages/Login';
import HomeRestCards from './Components/HomeRestCards';
import Home from './Pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './Pages/SignUp';
import ContactUs from './Pages/ContactUs';
import AboutUs from './Pages/AboutUs';
import TableBooking from './Pages/TableBooking';
import Restaurant from './Pages/Restaurant';
import AddRestaurant from './Pages/AddRestaurant';
import SignUpRestaurant from './Pages/Restaurant/SignUpRestaurant';
import LoginRestaurant from './Pages/Restaurant/LoginRestaurant';
import BookingRestaurant from './Pages/BookingRestaurant';
import { Provider } from 'react-redux';
import store from './Pages/Store';
import Mybookings from './Pages/Mybookings';
import AddMenu from './Pages/Restaurant/AddMenu';
import RestContact from './Pages/Restaurant/RestContact';
import RestAboutUs from './Pages/Restaurant/RestAboutUs';



function App(){
  return (
    <div>
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path='home' element={<Home></Home>}></Route> 
            <Route path='login' element={<Login></Login>}></Route>  
            <Route path='signUp' element={<SignUp></SignUp>}></Route> 
            <Route path='contact' element={<ContactUs></ContactUs>}></Route>                           
            <Route path='aboutUs' element={<AboutUs></AboutUs>}></Route> 
            <Route path='tableBooking' element={<TableBooking></TableBooking>}></Route>
            <Route path='restaurant' element={<Restaurant></Restaurant>}></Route>   
            <Route path='addRestaurant' element={<AddRestaurant></AddRestaurant>}></Route>
            <Route path='restSignUp' element={<SignUpRestaurant></SignUpRestaurant>}></Route>
            <Route path='restLogin' element={<LoginRestaurant></LoginRestaurant>}></Route>
            <Route path='booking' element={<BookingRestaurant></BookingRestaurant>}></Route>
            <Route path='myBookings' element={<Mybookings></Mybookings>}></Route>   
            <Route path='addMenu' element={<AddMenu></AddMenu>}></Route> 
            <Route path='restContact' element={<RestContact></RestContact>}></Route>
            <Route path='restAboutUs' element={<RestAboutUs></RestAboutUs>}></Route>                
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  )
}

export default App;

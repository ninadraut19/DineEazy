import { useState } from "react";
import Footer from "../Components/Footer";
import TableBookingNavbar from "../Components/TableBookingNavbar";
import Bookatable from "./Bookatable";
import BookingRestaurant from "./BookingRestaurant";

function TableBooking() {

    return (
        <div className="container-xxl bg-white p-0">
          <TableBookingNavbar></TableBookingNavbar>
          <Bookatable></Bookatable>
          {/* <BookingRestaurant></BookingRestaurant> */}
          <Footer></Footer>
          <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
        </div>
    );
  }

  export default TableBooking;
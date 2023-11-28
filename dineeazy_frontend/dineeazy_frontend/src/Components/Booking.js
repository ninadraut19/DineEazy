import axios from "axios";
import { useState } from "react"
import img2 from '../assets/reserved.jpg';
import { URL } from "../config";

const Booking = (props) =>{

    const [booking, setBooking] = useState(props.booking);

    const cancelBooking = (e) =>{

        e.preventDefault();

        let url = `${URL}/tableBooking/deleteTableBooking/${booking.bookingId}`
        
        axios.delete(url).then((response) => {
            const result = response.data
            console.log(result)
            if (result['status'] == 'Success') {
                console.log(result);
                alert(" Your booking has been cancelled")
                window.location.reload(false);
            }else {
                alert(result['error'])
            }
        })

    }

    return (
        <div>
            <table border={4} >
                <tr>
                    <td rowSpan="3"><img src={img2} alt="login" width={200}></img></td>
                    <td className="text-primary">&ensp;Guest Name : {booking.guestName} &ensp;</td>
                    <td className="text-primary">&ensp;Time Slot : {booking.timeslot} &ensp; </td>
                    <td className="text-primary">&ensp;Booking Status : {booking.bookingStatus} &ensp;</td>
                </tr>
                <tr>
                    <td className="text-primary">&ensp;Restaurant Name : {booking.restInfo1.restaurantName} &ensp;</td> 
                    <td className="text-primary">&ensp;No. of Guest : {booking.numberOfGuest} &ensp;</td>
                    <td className="text-primary">&ensp;Booking Id : {booking.bookingId} &ensp;</td>
                </tr>
                <tr>
                    <td className="text-primary">&ensp;Booking Date : {booking.bookingDate} &ensp;</td>
                    <td className="text-primary">&ensp;Booking Amount : {booking.tableBookingAmount } &ensp;</td>
                    <td className="text-primary">&ensp;Special Request : {booking.specialRequest} &ensp;</td>
                </tr>  
            </table>
            <button className="btn btn-primary w-100 py-1" type="submit" onClick={cancelBooking}>Cancel Booking</button>
            <br></br><br></br>  
        </div>
    )

}


export default Booking;
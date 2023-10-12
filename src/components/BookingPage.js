import React, {useState, useReducer} from "react";
import Header from "./Header";
import Footer from "./Footer";
import BookingForm from "./BookingForm";
import BookingHeader from "./BookingHeader";
import "../styles/Booking.css";
import { fetchAPI } from "../api/api.js"

function BookingPage() {
    const [booking, setBooking] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        guests: "",
        occassion: "",
        note: "",
      });

    function updateTimes(date) {
        return fetchAPI(date);
    }

    const output = fetchAPI(new Date());
    const [availableTimes, dispatch] = useReducer(updateTimes, output);

    return (
        <>
            <Header />
            <BookingHeader />
            <BookingForm 
                booking={booking} 
                setBooking={setBooking}
                availableTimes={availableTimes} 
                updateTimes={dispatch}   />
            <Footer />
        </>
    )
};

export default BookingPage;
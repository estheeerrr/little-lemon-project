import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import BookingForm from "./BookingForm";
import BookingHeader from "./BookingHeader";
import "../styles/Booking.css";

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

    return (
        <>
            <Header />
            <BookingHeader />
            <BookingForm 
                booking={booking} 
                setBooking={setBooking}  />
            <Footer />
        </>
    )
};

export default BookingPage;
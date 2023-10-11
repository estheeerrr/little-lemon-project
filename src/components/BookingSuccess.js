import React from "react";
import { useLocation } from "react-router-dom";
import Logo from "../images/Logo.png";
import BookingHeader from "./BookingHeader";
import Header from "./Header";
import Footer from "./Footer";

const BookingSuccess = () => {
    const location = useLocation();
    const { booking } = location.state || {};

    return (
        <>
            <Header />
            <BookingHeader/>
            <div className="success-page">
                <div className="success">
                    <img src={Logo} alt="Logo" />
                    <h1>See You Soon, {booking.firstName}!</h1>
                    <p>
                        Your reservation at Little Lemon Chicago is confirmed. 
                        A copy of your reservation has been sent to your email ({booking.email})
                        and phone number ({booking.phone}).
                    </p>
                </div>
                <h2>Booking Summary</h2>
                <div className="confirmation">
                    <div className="info-item">
                        <p id="item">Date</p>
                        <p>{booking.date}</p>
                    </div>
                    <div className="info-item">
                        <p id="item">Time</p>
                        <p>{booking.time}</p>
                    </div>
                    <div className="info-item">
                        <p id="item">Number of Guest</p>
                        <p>{booking.guest}</p>
                    </div>
                    {booking.occassion?              
                        <div className="info-item">
                            <p id="item">Occassion</p>
                            <p>{booking.occassion}</p>
                        </div> : null }
                    {booking.note ? 
                        <div className="info-item">
                            <p id="item">Special Note</p>
                            <p>{booking.note}</p>
                        </div> : null }
                </div>
            </div>
            <Footer />
        </>
    )

}

export default BookingSuccess;
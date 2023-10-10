import React, {useState}  from "react";
import dish from "../icons/Dish icon.svg";
import { useNavigate} from "react-router-dom";

const BookingForm = ({booking, setBooking}) => {
    const [error, setError] = useState({
        firstName: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        guests: "",
      });

    const clearForm = () => {
        setBooking({
            firstName: "",
            lastName:"",
            email: "",
            phone: "",
            date: "",
            time: "",
            guests: "",
            occassion: "",
            note: "",
        })
    };

    const validateForm = (userInput) => {
        const inputError = { ...error };

        const validations = {
            firstName: (value) => {
                if (value.length < 2) {
                    return "Please enter at least 2 characters for first name.";
                }
                return "";
            },
            email: (value) => {
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                    return "Please enter a valid email.";
                }
                return "";
            },
            phone: (value) => {
                if (value.length < 10) {
                    return "Please enter a valid phone number.";
                }
                return "";
            },
            date: (value) => {
                if (!value) {
                    return "Please select a date.";
                }
                return "";
            },
            time: (value) => {
                if (!value) {
                    return "Please select a time.";
                }
                return "";
            },
            guest: (value) => {
                if (!value) {
                    return "Please fill in a number between 1 to 20.";
                }
                return "";
            },
        };

        const validateInput = validations[userInput];
        if (validations[userInput]) {
            const errorMessage = validateInput(booking[userInput]);
            inputError[userInput] = errorMessage;
        }

        setError(inputError);
    };

    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        clearForm();

        navigate("/success", { state: { booking } });
    };

    return (
        <div className="booking-form">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <div className="section-title">
                        <img src={dish} alt="icon"></img>
                        <h2>Guest Information</h2>
                    </div>
                    <div className="guest-section">
                        <div className="guest-info">
                            <label>
                            First Name
                            </label>
                            <input 
                                type="text"
                                id="first-name"
                                value={booking.firstName}
                                onChange={(e) => setBooking({ ...booking, firstName: e.target.value })}
                                onBlur={() => validateForm("firstName")}
                                placeholder="First Name" 
                                required/>
                            {error.firstName && <div className="error">{error.firstName}</div>}
                        </div>
                        <div className="guest-info">
                            <label>Last Name</label>
                            <input 
                                type="text"
                                id="last-name"
                                value={booking.lastName}
                                onChange={(e) => setBooking({ ...booking, lastName: e.target.value })}
                                placeholder="Last Name"/>
                        </div>
                        <div className="guest-info">
                            <label>
                            Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={booking.email}
                                onChange={(e) => setBooking({ ...booking, email: e.target.value })}
                                onBlur={() => validateForm("email")}
                                placeholder="Email"
                                required />
                            {error.email && <p className="error">{error.email}</p>}
                        </div>
                        <div className="guest-info">
                            <label>
                            Phone Number
                            </label>
                            <input
                                type="text"
                                id="phone"
                                value={booking.phone}
                                onChange={(e) => setBooking({ ...booking, phone: e.target.value })} 
                                onBlur={() => validateForm("phone")}
                                placeholder="(xxx) xxx-xxxx"
                                required />
                            {error.phone && <div className="error">{error.phone}</div>}
                        </div>
                    </div>

                    <div className="section-title">
                        <img src={dish} alt="icon"></img>
                        <h2>Booking Information</h2>
                    </div>
                    <div className="booking-section">
                        <div className="booking-info">
                            <label>Date</label>
                            <input
                                type="date"
                                id="date"
                                value={booking.date}
                                onChange={(e) => setBooking({ ...booking, date: e.target.value })}
                                onBlur={() => validateForm("date")}
                                required />
                            {error.date && <div className="error">{error.date}</div>}
                        </div>
                        <div className="booking-info">
                            <label>Time</label>
                            <input
                                type="time"
                                id="time"
                                value={booking.time}
                                onChange={(e) => setBooking({ ...booking, time: e.target.value })}
                                onBlur={() => validateForm("time")}
                                required />
                            {error.time && <div className="error">{error.time}</div>}
                        </div>
                        <div className="booking-info">
                            <label>Number of Guests</label>
                            <input
                                type="number"
                                id="guest"
                                value={booking.guest}
                                onChange={(e) => setBooking({ ...booking, guest: e.target.value })}
                                onBlur={() => validateForm("guest")}
                                min="1"
                                max="20"
                                placeholder="1 - 20 People"
                                required />
                            {error.guest && <div className="error">{error.guest}</div>}
                        </div>
                        <div className="booking-info">
                            <label>Occassion</label>
                            <select id="occassion" 
                                    value={booking.occassion} 
                                    onChange={(e) => setBooking({ ...booking, occassion: e.target.value })}>
                                <option>Occassion</option>
                                <option value="Birthday">Birthday</option>
                                <option value="Engagement">Engagement</option>
                                <option value="Anniversary">Anniversary</option>
                            </select>
                        </div>
                        <div className="booking-info">
                            <label>Special Note</label>
                            <textarea
                                id="note"
                                value={booking.note}
                                onChange={(e) => setBooking({ ...booking, note: e.target.value })} />
                        </div>
                    </div>
                    <button id="button" type="submit" onSubmit={handleSubmit} to="/success">
                        Submit Booking
                    </button>
                </fieldset>
            </form>
        </div>
    )
};

export default BookingForm;
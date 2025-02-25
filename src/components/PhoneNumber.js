import React, { useState } from "react";
import './PhoneNumber.css'
import { useAuth } from "../AuthContext";

function PhoneNumber({phone}) {
    const [showNumber, setShowNumber] = useState(false);
    const {user} = useAuth();
    const hiddenNumber = '+xx-xxx-xx-xx';
    const fullNumber = phone;
    
    const toggleNumber = () => {
        setShowNumber(!showNumber);
    };

    return(
        <div>
            <div className="phoneNumberDiv">
                <h3 className="contactSeller">Contact Seller</h3>
            </div>
            <div className="phoneNuberDiv">
                <p>{showNumber ? fullNumber : hiddenNumber}</p>
                {!user && <button className="see-button">
                        <img src="/img/eye.png" alt="View"/>
                    </button>}
                {user && <button className="see-button" onClick={toggleNumber}>
                    <img src="/img/eye.png" alt="View"/>
                    </button>}
            </div>
            <div className="phoneNumberDiv">
                {!user && <p className="auth-message">You need to log in to view the number</p>}
            </div>
        </div>
    )
}

export default PhoneNumber;
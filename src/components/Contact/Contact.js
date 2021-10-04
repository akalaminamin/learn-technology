import React from 'react'
import PageHeader from '../PageHeader/PageHeader';
import contactImg from "../../image/contact_1.jpg";
import "./Contact.css";
const Contact = () => {
    return (
        <>
            <PageHeader>Contact Us</PageHeader>
            <div className="contact container">
                <span>Sent Us a Message</span>
                <h2>We will Answer all your Questions</h2>
                <div className="contact-content">
                    <div className="contact-img">
                        <img src={contactImg} alt="contact" />
                    </div>
                    <div className="input-field">
                        <input className="input" type="text" placeholder="Name" />
                        <br />
                        <input className="input" type="email" placeholder="Email" />
                        <br />
                        <textarea className="input" placeholder="write message" name="txtname" rows="11" cols="50"/>  
                        <button type="submit" className="same-btn submit-btn">SEND</button>      
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;

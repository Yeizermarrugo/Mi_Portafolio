import { useState } from "react";
import { useForm } from "react-hook-form";
import  "./contact.css"
import emailjs from '@emailjs/browser';
import { Link } from "react-router-dom";

const Contact = () => {   

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_dodlgjs','template_i527ad8', e.target,'nAnadIyxU5uL_khaW')
        .then(res => console.log('SUCCESS!', res.status, res.text))
        .catch(err => console.log(err))
    }
  
    return (
        <>
            <form onSubmit={sendEmail}>
              <label>Name</label>
              <input type="text" name="user_name" placeholder="Full Name" required minlength="1" maxlength="50"/>
              <label>Email</label>
              <input type="email" name="user_email" placeholder="@email.com" required  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"/>
              <label>Message</label>
              <textarea name="message" placeholder="Message" required maxlength="500" />
              <button>Submit</button>
            </form>
         <div className="arrow">
         <Link to='/proyectos'>
             <i className="fa-solid fa-circle-arrow-left"></i>
         </Link>
         </div>
        </>
    )
  }
  

export default Contact
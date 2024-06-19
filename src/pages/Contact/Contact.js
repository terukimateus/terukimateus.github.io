import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import './Contact.css'
import emailjs from '@emailjs/browser'


function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    function sendEmail(e) {
        e.preventDefault()

        if  (name === '' || email === '' || message === '' ) {
            return
        }

        const templateParams = {
            from_name: name,
            message: message,
            email: email,
        }

        emailjs.send('service_t854f88','template_zera25m', templateParams, 'lSxpb1mIR_uU-JY8C')
        .then((response) => {
            console.log('Email enviado', response.status)
            setName('')
            setEmail('')
            setMessage('')
        })
    }

    return(
        <div className="App">
            <Header/>
            <div className="content init padding forms">
                <div className="title-form">
                    <span className="h3">Contact</span>
                    <span className="title-desc">Send-me your message, I will answer when possible.</span>
                </div>

                <form className="form" onSubmit={sendEmail}>
                    <div className="form-user">
                        <div className="input-label">
                            <label>Name</label>
                            <input type="text" placeholder="Enter your name" onChange={(e) => setName(e.target.value)} value={name} required/>
                        </div>
                        <div className="input-label">
                            <label>Email</label>
                            <input type="text" placeholder="Enter your e-mail" onChange={(e) => setEmail(e.target.value)} value={email} required/>        
                        </div>
                    </div>
                    <div className="input-label">
                        <label>Message</label>
                        <textarea placeholder="Enter your message" onChange={(e) => setMessage(e.target.value)} value={message} required=''/>
                    </div>
                    <button className='form-submit'type="submit">Send e-mail</button>
                </form>
            </div>
            <Footer/>
        </div>
    )
}

export default Contact
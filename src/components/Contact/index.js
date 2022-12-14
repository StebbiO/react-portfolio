import './index.scss';
import { Loader } from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef();

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_updefjc', 'template_3n5alca', refForm.current, 'vMNI958LAFYC1ELhC')
        .then(
            () => {
                alert('Message successfully sent!')
                window.location.reload(false)
            },
            () => {
                alert('Failed to send message, please try again.')
            }
        )
    }
    
    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass} 
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']} 
                            idx={15}
                        />
                    </h1>
                    <p>
                        Please contact me with any questions or opportunities you may have and I will reply shortly!
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type='email' name='email' placeholder='Email' required />
                                </li>
                                <li>
                                    <input placeholder='Subject' type='text' name='subject' required />
                                </li>
                                <li>
                                    <textarea placeholder='Message' name='message' required></textarea>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value ='SEND' />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Stefan Oddsson,
                    <br />
                    909 Reinli St <br />
                    Austin, TX 78751 <br />
                    <span>stefodd@yahoo.com</span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[30.318968, -97.710358]} zoom={14}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[30.318968, -97.710358]}></Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
};

export default Contact;
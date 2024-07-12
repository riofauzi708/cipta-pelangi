import React, { useState } from 'react';
import { FaWhatsapp, FaEnvelope, FaSms, FaPhone } from 'react-icons/fa';
import Logo from '../assets/img/logo.png';
import '../assets/css/Navbar.css';
import '../assets/css/Animations.css'

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <nav style={styles.navbar}>
            <div style={styles.navbarLeft}>
                <img src={Logo} alt="PT Cipta Pelangi Logo" style={styles.navbarLogo} />
                <span style={styles.navbarCompanyName}>PT Cipta Pelangi</span>
            </div>
            <div style={styles.navbarRight}>
                <div style={styles.contactUs}>
                    <button
                        style={styles.contactUsButton}
                        onClick={toggleDropdown}
                        aria-expanded={dropdownOpen}
                        aria-controls="contact-dropdown"
                    >
                        Hubungi Kami <FaPhone />
                    </button>
                    {dropdownOpen && (
                        <div style={styles.contactDropdown} id="contact-dropdown">
                            <a href="https://wa.me/NOMOR_WHATSAPP" style={styles.contactButton} aria-label="WhatsApp">
                                <FaWhatsapp style={styles.whatsappIcon} /> WhatsApp
                            </a>
                            <a href="mailto:EMAIL_ANDA" style={styles.contactButton} aria-label="Email">
                                <FaEnvelope style={styles.emailIcon} /> Email
                            </a>
                            <a href="sms:NOMOR_TELEPON" style={styles.contactButton} aria-label="SMS">
                                <FaSms style={styles.smsIcon} /> SMS
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

const styles = {
    navbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#333',
        padding: '10px 20px',
        color: 'white',
    },
    navbarLeft: {
        display: 'flex',
        alignItems: 'center',
    },
    navbarLogo: {
        height: '40px',
        marginRight: '10px',
    },
    navbarCompanyName: {
        fontSize: '1.5em',
        fontWeight: 'bold',
    },
    navbarRight: {
        display: 'flex',
        alignItems: 'center',
    },
    contactUs: {
        position: 'relative',
    },
    contactUsButton: {
        backgroundColor: '#555',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        animation: 'jump 2s infinite',
        transition: 'background-color 0.3s ease',
        borderRadius: '5px',
    },
    contactDropdown: {
        position: 'absolute',
        top: '100%',
        right: '0',
        backgroundColor: 'white',
        color: 'black',
        border: '1px solid #ccc',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        zIndex: 1000,
        animation: 'slideIn 0.5s ease-in-out',
        overflow: 'hidden',
        borderRadius: '5px',
        padding: '10px 0',
        minWidth: '200px',
    },
    contactButton: {
        display: 'flex',
        alignItems: 'center',
        padding: '10px 20px',
        textDecoration: 'none',
        color: 'black',
        transition: 'background-color 0.3s ease, transform 0.3s ease',
        borderBottom: '1px solid #ccc',
    },
    whatsappIcon: {
        color: '#25D366',
        marginRight: '10px',
    },
    emailIcon: {
        color: '#D44638',
        marginRight: '10px',
    },
    smsIcon: {
        color: '#34B7F1',
        marginRight: '10px',
    },
};

export default Navbar;

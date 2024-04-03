import React, { useEffect, useState } from "react";
import { Navbar as BootstrapNavbar, Container, Nav } from "react-bootstrap";
import logo from '../assets/images/img/logo.svg';


const CustomNavbar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    // Import useHistory hook

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    const handleConnectClick = () => {
        // Navigate to Projects page
        
    }

    return (
        <BootstrapNavbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <BootstrapNavbar.Brand href="#home" ma>
                    <img src={logo} alt="Logo" />
                </BootstrapNavbar.Brand>
                <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </BootstrapNavbar.Toggle>
                <BootstrapNavbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#plans" className={activeLink === 'plans' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('plans')}>Plans</Nav.Link>
                        <Nav.Link href="#services" className={activeLink === 'services' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('services')}>Services</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            
                        </div>
                    </span>
                </BootstrapNavbar.Collapse>
            </Container>
        </BootstrapNavbar>
    )
}

export default CustomNavbar;

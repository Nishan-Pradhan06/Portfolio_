import React, { useEffect, useState } from 'react';

const NavBar = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        document.body.style.overflow = 'auto';
    };

    return (
        <header>
            <nav className={isSticky ? 'sticky' : ''}>
                <div className="navbar">
                    <div className="logo"><a href="#home">Nishan.</a></div>
                    <ul className={`menu ${isMenuOpen ? 'active' : ''}`}>
                        <li><a href="#home" onClick={closeMenu}>Home</a></li>
                        <li><a href="#about" onClick={closeMenu}>About</a></li>
                        <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
                        <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
                        <li><a href="#services" onClick={closeMenu}>Services</a></li>
                        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
                        <div className="cancel-btn" onClick={closeMenu}>
                            <i className="fas fa-times"></i>
                        </div>
                    </ul>
                    <div className="media-icons">
                        <a href="https://www.facebook.com/profile.php?id=100015085275074" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                        <a href="https://twitter.com/home" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                        <a href="https://github.com/Nishan-Pradhan06" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                        <a href="https://www.instagram.com/pradhan_nishan_16/?hl=en" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                        <a href="https://www.linkedin.com/in/nishan-pradhan06/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                        <a href="https://www.youtube.com/channel/UCXmNBkIr2PfY-tzKwGukH4w" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
                    </div>
                </div>
                <div className="menu-btn" onClick={toggleMenu}>
                    <i className="fas fa-bars"></i>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;

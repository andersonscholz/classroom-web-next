import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <header>
            <link
                href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
                rel="stylesheet"
            />
            <nav className="navbar">
                <section className="navbar-brand">
                    <Link href="./" className="material-icons menu-icon">menu</Link>
                    <img
                        className="brand-logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"
                        alt="Google Logo"
                    />
                    <span className="brand-text">Classroom</span>
                </section>
                <section className="navbar-menu">
                    <Link href="./AddTurmaPage" className="material-icons add-icon">add</Link>
                    <span className="material-icons apps-icon">apps</span>
                    <span className="material-icons big-img account-icon">account_circle</span>
                </section>
            </nav>
        </header>
    );
};

export default Navbar;

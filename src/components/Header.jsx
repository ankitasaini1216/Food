import React from 'react'

export default function Header() {
    return (
        <>
            <header id="home">
                
                <div className="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                                <div className="full">
                                    <div className="center-desk">
                                        <div className="logo">
                                            <a href="/">
                                                <img src="images/logo.png" alt="#" />
                                            </a>
                                            <a href="https://www.w3schools.com" className="d-none" target="_new">Visit W3Schools</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                                <div className="menu-area">
                                    <div className="limit-box">
                                        <nav className="main-menu">
                                            <ul className="menu-area-main">
                                                <li className="active"><a href="#home">Home</a></li>
                                                <li><a href="#about">About Us</a></li>
                                                <li><a href="#fruits">Fruits</a></li>
                                                <li><a href="#blog">Blog</a></li>
                                                <li><a href="#contact">Contact Us</a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </header>
            
        </>
    )
}

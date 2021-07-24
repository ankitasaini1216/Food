import React from 'react'

export default function Footer() {
    return (
        <>
            <footer>
                <div className="footer layout_padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <h3>Contact Us</h3>
                                <p>Healing Center, 176 W Street name, New York, NY<br /><br />(+91) 987 654 3210<br /><br />demo@gmail.com</p>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <h3>Pages</h3>
                                <p>
                                    <a href="#h">Home</a><br />
                                    <a href="#h">About Us</a><br />
                                    <a href="#h">Fruits</a><br />
                                    <a href="#h">Blog</a><br />
                                    <a href="#h">Contact Us</a>
                                </p>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <h3>Recent Post</h3>
                                <p>
                                    <span><img src="images/f_b1.png" alt="#" /></span>
                                    <span>consectetur adipisc elit,<br />sed do eiusmod</span>
                                </p>
                                <p className="margin_top_20"><span><img src="images/f_b2.png" alt="#" /></span>
                                    <span>consectetur adipisc elit,<br />sed do eiusmod</span>
                                </p>
                                <p className="margin_top_20"><span><img src="images/f_b3.png" alt="#" /></span>
                                    <span>consectetur adipisc elit,<br />sed do eiusmod</span>
                                </p>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <h3>Newsletter</h3>
                                <p>
                                    <form>
                                        <input type="text" name="email" placeholder="Enter Your Email" />
                                        <button>Subscribe</button>
                                    </form>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <div className="container">
                        <p>Copyright 2019 All Right Reserved By <a href="//#region ">dsf</a></p>
                    </div>
                </div>
            </footer>
        </>
    )
}

import React from 'react'

export default function About() {
    return (
        <>
            <div id="about" className="about layout_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img className="img-responsive" src="images/about_img.png" alt="#"/>
                        </div>
                        <div className="col-md-6">
                            <div className="heading margin_top_30">
                                <h2>About our shop</h2>
                            </div>
                            <div className="full margin_top_20">
                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                            <div className="full margin_top_30">
                                <a className="main_bt" href="/">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

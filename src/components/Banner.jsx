import React from 'react'

export default function Banner() {
    return (
        <>
       
           <section className="slider_section">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="full">
                            <h1><strong className="cur">Best</strong><br />Fresh Red Apple</h1>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature</p>
                            <div className="button_section"><a className="main_bt" href="/">Buy Now</a></div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="full text_align_center">
                            <img className="slide_img" src="images/slider_img.png" alt="#" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

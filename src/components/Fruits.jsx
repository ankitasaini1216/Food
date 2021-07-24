import React from 'react'

export default function Fruits() {
    return (
        <>
            <div id="fruits" className="section dark_bg layout_padding left_white">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="heading full text_align_center">
                                <h2 className="white_font full text_align_center">Our Fruits</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 margin_top_30">
                            <div className="full fr">
                                <img className="img-responsive" src="images/f1.png" alt="#" />
                            </div>
                            <div className="full text_align_center">
                                <h3 className="white_font">Black Grapes<br/><strong className="theme_blue">Fresh Fruit</strong></h3>
                    </div>
                            </div>
                            <div className="col-md-4 margin_top_30">
                                <div className="full fr">
                                    <img className="img-responsive" src="images/f2.png" alt="#" />
                                </div>
                                <div className="full text_align_center">
                                    <h3 className="white_font">Pineapple<br/><strong className="theme_blue">Fresh Fruit</strong></h3>
                    </div>
                                </div>
                                <div className="col-md-4 margin_top_30">
                                    <div className="full fr">
                                        <img className="img-responsive" src="images/f3.png" alt="#" />
                                    </div>
                                    <div className="full text_align_center">
                                        <h3 className="white_font">Bananas<br/><strong className="theme_blue">Fresh Fruit</strong></h3>
                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        </>
                    )
}

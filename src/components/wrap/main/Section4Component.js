import React, { Component } from 'react';

class Section4Component extends Component {
    render() {
        return (
            <section id="section4">
                <div className="container">
                    <div className="gap">
                        <div className="wrap">
                            <div className="title">
                                <div>
                                    <ul>
                                        <li><a href="{()=>false}" className="gallery-btn">ALL</a></li>
                                        <li><a href="{()=>false}" className="gallery-btn">BROCHURE</a></li>
                                        <li><a href="{()=>false}" className="gallery-btn">BRANDING</a></li>
                                        <li><a href="{()=>false}" className="gallery-btn">IDENTITY</a></li>
                                        <li><a href="{()=>false}" className="gallery-btn">WEB</a></li>
                                        <li><a href="{()=>false}" className="gallery-btn">PHOTOGRAPHY</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="content">
                                <ul className="gallelry">
                                    <li>
                                        <div className="img-wrap"><a href="#!" className="img-btn"><img src="./img/portfolio-item20.jpg.webp" alt="" /></a></div>
                                    </li>
                                    <li>
                                        <div className="img-wrap"><a href="#!" className="img-btn"><img src="./img/portfolio-item23.jpg.webp" alt="" /></a></div>
                                    </li>
                                    <li>
                                        <div className="img-wrap"><a href="#!" className="img-btn"><img src="./img/portfolio-item22.jpg.webp" alt="" /></a></div>
                                    </li>
                                    <li>
                                        <div className="img-wrap"><a href="#!" className="img-btn"><img src="./img/portfolio-item21.jpg.webp" alt="" /></a></div>
                                    </li>
                                    <li>
                                        <div className="img-wrap"><a href="#!" className="img-btn"><img src="./img/portfolio-item24.jpg.webp" alt="" /></a></div>
                                    </li>
                                    <li>
                                        <div className="img-wrap"><a href="#!" className="img-btn"><img src="./img/portfolio-item16.jpg.webp" alt="" /></a></div>
                                    </li>
                                    <li>
                                        <div className="img-wrap"><a href="#!" className="img-btn"><img src="./img/portfolio-item26.jpg.webp" alt="" /></a></div>
                                    </li>
                                    <li>
                                        <div className="img-wrap"><a href="#!" className="img-btn"><img src="./img/portfolio-item19.jpg.webp" alt="" /></a></div>
                                    </li>
                                </ul>
                            </div>
                        </div>  
                    </div>
                </div>
            </section>
        );
    }
}

export default Section4Component;
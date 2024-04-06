import React, { useState } from 'react';
import "../style/Home.css";
import Laptop from "../Images/pp-hero-web.png";

function LoginPage() {


    return (
        <div className='post-property'>
            <div className='property-image'>
                <img src={Laptop} alt="laptop-Image" />
            </div>
            <div className='property-text'>
                <h1>
                    Post property Ad to sell or rent online for
                    &nbsp;&nbsp;
                    <span className='text-free'>free</span>
                </h1>
                <div className='text-post'>
                    <i className="fa-solid fa-check"></i><p> Get Access to 4 Lakh +
                        Buyers</p>
                    <i className="fa-solid fa-check"></i><p> Sell Faster with
                        Premium Service</p>
                    <i className="fa-solid fa-check"></i><p> Get Expert Advice on
                        Market Trends and Insights</p>
                </div>
            </div>

            <div className="post-form">
                <div className="postform-header">LOGIN</div>
                <div className="postform-content">
                    <div>
                        <input style={{ width: "100%", "margin-left": "5px", height: "40px" }} className='number-input' type="number" placeholder="Enter Email ID or Mobile No." />
                    </div>
                </div>
                <button className="start-now-button" >
                    Next
                </button>
            </div>

        </div>

    );
}

export default LoginPage;

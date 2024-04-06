import React, { useState } from 'react';
import "./Home.css";
import Laptop from "../Images/pp-hero-web.png";

function PostPage() {


  return (
    <div className='post-property'>
    <div className='property-image'>
    <img src={Laptop} alt="laptop-Image"/>
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
      <div className="postform-header">Let's get you started</div>
      <div className="postform-content">
        <p>You are:</p>
         
        <div  >
          <select style={{ width: "90%", height: "40px","border": "none !important;" }}>
            <option value="owner">Owner</option>
            <option value="agent">Agent</option>
            <option value="builder">Builder</option>
          </select>
        </div>
     
        <p>You are here to:</p>
        <div>
          <select style={{ width: "90%", height: "40px" }}>
            <option value="sell">Sell</option>
            <option value="rent">Buy</option>
            {/* <option value="pg">List as PG</option> */}
          </select>
        </div>
      
        <p>Your contact number</p>
        <div>
          <select  style={{height: "40px" }}  className='number-select'>
            <option value="india">+91</option>
            <option value="us">+1</option>
          </select>
          <input style={{ width: "72%","margin-left":"5px", height: "40px" }} className='number-input' type="number" placeholder="Whastsapp Number" />
        </div>
        &nbsp;
        <p className="whatsapp-text">WhatsApp Number (Enter your WhatsApp No. to get enquiries from Buyer/Tenant)</p>
        
      </div>
      <button className="start-now-button" >
        Start Now
      </button>
    </div>

    </div>
  
  );
}

export default PostPage;

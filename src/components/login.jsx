import React, { useState } from 'react';
import "../style/Home.css";
import Laptop from "../Images/pp-hero-web.png";
import { RxArrowTopRight } from "react-icons/rx";
function LoginPage() {


    return (
        // <div className='post-property'>
        //     <div className='property-image'>
        //         <img src={Laptop} alt="laptop-Image" />
        //     </div>
        //     <div className='property-text'>
        //         <h1>
        //             Post property Ad to sell or rent online for
        //             &nbsp;&nbsp;
        //             <span className='text-free'>free</span>
        //         </h1>
        //         <div className='text-post'>
        //             <i className="fa-solid fa-check"></i><p> Get Access to 4 Lakh +
        //                 Buyers</p>
        //             <i className="fa-solid fa-check"></i><p> Sell Faster with
        //                 Premium Service</p>
        //             <i className="fa-solid fa-check"></i><p> Get Expert Advice on
        //                 Market Trends and Insights</p>
        //         </div>
        //     </div>

        //     <div className="post-form">
        //         <div className="postform-header">LOGIN</div>
        //         <div className="postform-content">
        //             <div>
        //                 <input style={{ width: "100%", "margin-left": "5px", height: "40px" }} className='number-input' type="number" placeholder="Enter Email ID or Mobile No." />
        //             </div>
        //         </div>
        //         <button className="start-now-button" >
        //             Next
        //         </button>
        //     </div>

        // </div>

        <div>
            <header className='bg-[#009681]'>
                <img src='' />
            </header>
            <div className='h-[700px] flex'>
                     
                <div className='w-[35%] bg-slate-500'>
                    <div className=' text-start p-10 flex justify-evenly flex-col h-[70%]'>
                        <p className='p-2 pl-0 text-2xl text-[#FFFFFF]'>Things you Can Do with<br /> Magicbricks Account</p>
                        <p className="text-[#AFBCBE] flex items-center"><RxArrowTopRight /> Post one Single Property for FREE</p>
                        <p className="text-[#AFBCBE] flex items-center"><RxArrowTopRight /> Set property alerts for your requirement</p>
                        <p className="text-[#AFBCBE] flex items-center"><RxArrowTopRight /> Get accessed by over 1 Lakh buyers</p>
                        <p className='text-[#AFBCBE] flex items-center'><RxArrowTopRight /> Showcase your property as Rental, PG or for Sale</p>
                        <p className="text-[#AFBCBE] flex items-center"><RxArrowTopRight /> Get instant queries over Phone, Email and SMS</p>
                        <p className="text-[#AFBCBE] flex items-center"><RxArrowTopRight /> Performance in search & Track responses & views online</p>
                        <p className="text-[#AFBCBE] flex items-center"><RxArrowTopRight />Add detailed property information & multiple photos per listing</p>
                    </div>
                </div>
                <div className='w-[65%] bg-[#f1eaea] flex justify-center pt-10 text-start'>
                    <div className='h-[80%] w-[33%] bg-white rounded-md'>
                        <div className='flex flex-col justify-between h-[60%]  mb-10 pb-10 p-6'>
                         <p className='font-bold text-lg'>Login</p>
                         <div className=''>
                         <input type="text" className='outline-none  bg-transparent w-full p-2 pl-0 mb-10' placeholder='Enter Email ID or Mobile No.'/>
                         <button className='bg-[#009681] mb-2 text-white w-full rounded-md text-center p-1 font-bold text-lg' > Next</button>
                         <div className='flex justify-end border-b pb-10'>
                         <button className='text-end text-[#909090]'>Need Help?</button>
                         </div>
                         </div>
                         </div>
                         <div className='h-[40%] bg-[#F7F7F7] rounded-b-md'>
                         <p className='text-center pt-16'>New to Magicbricks? <button className='text-[#009681]'>Sign Up</button></p>
                         </div>
                    </div>
                </div>
               
            </div>
            <div className=' bg-[#202730] w-full text-white p-10'>
                <p className='p-2 text-[#747D83]'>&copy; Magic bricks</p>
                <nav className='flex justify-center'>
                    <div className='w-[40%] flex justify-center gap-3 text-[#D2D4CB]'>
                        <p>Sitemap </p>
                        <p>About Us</p>
                        <p>Terms & Conditions</p>
                        <p>Privacy</p>
                    </div>

                </nav>
            </div>
        </div>

    );
}

export default LoginPage;

import React from 'react'
import { RxArrowTopRight } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    
    const navigate = useNavigate(); 
    const redirectToLogin = () => {
    
        navigate('/login'); // Navigate to the "/post" route
      };
    
    return (
        <>
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
            <div className='w-[95%] bg-slate-900 flex justify-center pt-10 text-start'>
                <div className='h-[80%] w-[40%] bg-white rounded-md  '>
                    <div className='flex flex-col justify-between mb-10 pb-10 p-6 h-[100%]'>
                        <p className='font-bold text-lg'>Sign Up</p>
                        <div>
                            <p className='text-[#909090]'>I am</p>
                            <div className='flex justify-between '>
                                <div>

                                    <input type="radio" id="html" name="fav_language" value="HTML" className='m-2 ml-0 pl-0' />
                                    <label for="html">Buyer/Owner/Tenant</label>
                                </div>

                                <div className=''>
                                    <input type="radio" id="css" name="fav_language" value="CSS" className='m-2' />
                                    <label for="css">Agent</label>
                                </div>
                                <div>
                                    <input type="radio" id="javascript" name="fav_language" value="JavaScript" className='m-2' />
                                    <label for="javascript">Builder</label>
                                </div>

                            </div>
                        </div>
                        <input type="text" placeholder='Name' className='border-b pb-2' />
                        <input type="text" placeholder='Email' className='border-b pb-2' />
                        <input type="text" placeholder='Password' className='border-b pb-2' />
                        <div className='w-full flex justify-between gap-5'>
                            <select name="" id="" className='outline-none border-b pb-2'>
                                <option value=""className=''>+91</option>
                            </select>
                        <input type="text" placeholder='Mobile Number' className='border-b pb-2 w-full' />
                        </div>
                        <div className='flex gap-2'>
                            <input type="checkbox" name="" id="" />
                            <p>I agree to Magicbricks T&C, Privacy Policy, & Cookie Policy</p>
                        </div>
                        <div>
                            <button className='w-full p-2 bg-[#009681] text-white rounded-md' >Sign Up</button>
                        </div>
                        <div className='  '>
                            <p className='text-center '>Already Registered? <button className='text-[#009681]' onClick={redirectToLogin}>Login Now</button></p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
      
        </>
        
    )
}

export default SignUp
import React from 'react';
import "../style/Home.css";

const Footer = () => {
  return (
    <footer className=' bg-[#F5F5F5] '>
        <div className='flex justify-center pt-20 pb-20'>
          <div className='grid grid-cols-2 w-[90%] text-start gap-x-20 gap-y-8'>
            <div className='pb-2 '>
              <p className='font-bold text-xl pb-2'>
                About propertySell
              </p>
              <p className='pt-2 text-[#363636]'>
                propertySell is a full stack service provider for all real estate needs, with 15+ services including home loans, pay rent, packers and movers, legal assistance, property valuation, and expert advice. As the largest platform for buyers and sellers of property to connect in a transparent manner, propertySell has an active base of over 15 lakh property listings.
              </p>
            </div>


            <div>
              <p className='font-bold text-xl pb-5'>Properties in India</p>
              <p className='text-[#363636]'>Property in New Delhi Property in Mumbai Property in Chennai Property in Pune Property in Noida Property in Gurgaon Property in Bangalore Property in Ahmedabad</p>
            </div>

            {/* <div>
              <p className='font-bold text-xl pb-5'>More from our Network</p>
              <div className='grid grid-cols-4 gap-1 text-sm foot text-[#363636]'>
                <p>Times of India</p>
                <p>Economic Times</p>
                <p>Navbharat times</p>
                <p>India Times</p>

                <p>MensXp</p>
                <p>iDiva</p>
                <p>TimesJobs</p>
                <p>Gadgets Now</p>
              </div>
            </div>



            <div >
              <p className='font-bold text-xl pb-5'>New Projects in India</p>
              <p className='text-[#363636]'>New Projects in New Delhi New Projects in Mumbai New Projects in Chennai New Projects in Pune New Projects in Noida New Projects in Gurgaon New Projects in Bangalore New Projects in Ahmedabad</p>
            </div> */}
          </div>
        </div>


        {/* <div className='flex justify-center bg-[#E8E8E8] h-14 items-center'>
          <div className='w-[90%] flex justify-between cursor-pointer '>
            <p>Sitemap </p>
            <p>Terms & Conditions </p>
            <p>Privacy Policy</p>
            <p>Blog</p>
            <p>Careers</p>
            <p>Testimonials</p>

            <p>Feedback</p>
            <p>Unsubscribe</p>
            <p>Help Center</p>
            <p>Sales Enquiry</p>

            <p>Buy Our Services</p>
          </div>
        </div>
        <div className='flex justify-center'>
          <p className='w-[60%] text-start text-[#363636] pt-6 pb-6 text-sm'>Disclaimer: propertySell Realty Services Limited is only an intermediary offering its platform to advertise properties of Seller for a Customer/Buyer/User coming on its Website and is not and cannot be a party to or privy to or control in any manner any transactions between the Seller and the Customer/Buyer/User. All the offers and discounts on this Website have been extended by Read more</p>
        </div> */}
        <div className='flex justify-center bg-[#303030]'>
          <p className='text-sm text-white pt-6 pb-6 text-start w-[60%]'>
            All trademarks, logos and names are properties of their respective owners. All Rights Reserved. © Copyright 2024 propertySell Realty Services Limited.
          </p>
        </div>
      </footer>

  )
}

export default Footer

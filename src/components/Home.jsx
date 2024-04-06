
import React,{useState,useEffect,useRef} from 'react';
import "../style/Home.css";
import owner from "../Images/flatImage1.jpg";
import fur from "../Images/flatImage2.jpg";
import ver from "../Images/flatImage3.jpg";
import imm from "../Images/flatImage4.jpg";
import project from "../Images/projectshowcase-img.jpg";

import project2 from "../Images/projectshowcase-img(1).jpg";
import kolkata from '../Images/kolkata.jpg'
import kolkata1 from '../Images/kolkata4.jpg'
import kolkata2 from '../Images/kolkata2.jpg'
import kolkata3 from '../Images/kolkata3.jpg'
import owner2 from '../Images/owner2.jpeg'
import owner3 from '../Images/owner3.jpeg'
import owner4 from '../Images/owner4.jpg'
import { MdKeyboardArrowDown } from "react-icons/md";
import { BiSearchAlt } from "react-icons/bi";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { MdHome } from "react-icons/md";
import { TbCoinRupeeFilled } from "react-icons/tb";
import Header from '../common/Header';


const Home = () => {
 

  const [openDropdown, setOpenDropdown] = useState(null);


  const handleMouseEnter = (dropdownId) => {
    setOpenDropdown(dropdownId);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };
  


  console.log("Gourab")

 
  
  return (
    <div>
    {/*Main Header Section */}
   
  <Header/>

  
   {/*sub Header Section */}
  <div className='nav-main'>
  <nav className='nav'>
    <div className="relative inline-block text-left">
      <a href=""  onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={handleMouseLeave}>Buy <MdKeyboardArrowDown color='#D8232A' /></a>
      {openDropdown === 1 && (
        <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div className="py-1" role="none">
            <a href="#"  className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">Ready to Move</a>
            <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-1">Owner Properties</a>
            <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">Budget Homes</a>
          </div>
        </div>
      )}
    </div>

    {/* <div className="relative inline-block text-left">
      <a href="" onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={handleMouseLeave}>Rent <MdKeyboardArrowDown color='#D8232A' /></a>
    
      {openDropdown === 2 && (
        <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div className="py-1" role="none">
            <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">Owner Properties</a>
            <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-1">Verified Properties</a>
            <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">Furnished Homes</a>
          </div>
        </div>
      )}
    </div> */}

    <div className="relative inline-block text-left">
      <a href="" onMouseEnter={() => handleMouseEnter(3)} onMouseLeave={handleMouseLeave}>Sell <MdKeyboardArrowDown color='#D8232A' /></a>
      {/* Dropdown content */}
      {openDropdown === 3 && (
        <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div className="py-1" role="none">
            <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">Property Valuation</a>
            <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-1">Find an Agents</a>
            <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">Rate & Trends</a>
          </div>
        </div>
      )}
    </div>

    {/* <div className="relative inline-block text-left">
      <a href="" onMouseEnter={() => handleMouseEnter(4)} onMouseLeave={handleMouseLeave}>Home Loans <MdKeyboardArrowDown color='#D8232A' /></a>
      
      {openDropdown === 4 && (
        <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div className="py-1" role="none">
            <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">SBI Home Loans</a>
            <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-1">Axis Home Loans</a>
            <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">Kotak Home Loans</a>
          </div>
        </div>
      )}
    </div> */}

    <div className="relative inline-block text-left">
      <a href="" onMouseEnter={() => handleMouseEnter(5)} onMouseLeave={handleMouseLeave}>Property Services <MdKeyboardArrowDown color='#D8232A' /></a>
      {/* Dropdown content */}
      {openDropdown === 5 && (
        <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div className="py-1" role="none">
            <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">Rent Agreement </a>
            <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-1">Generate Rent Recieve</a>
            <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">Tenanat Verification</a>
          </div>
        </div>
      )}
    </div>

    {/* <div className="relative inline-block text-left">
      <a href="" onMouseEnter={() => handleMouseEnter(6)} onMouseLeave={handleMouseLeave}>MB Advice <MdKeyboardArrowDown color='#D8232A' /></a>
    
      {openDropdown === 6 && (
        <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div className="py-1" role="none">
            <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">Insights </a>
            <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-1">Resarch</a>
            <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">Props Index</a>
          </div>
        </div>
      )}
    </div> */}

    <div className="relative inline-block text-left">
      <a href="" onMouseEnter={()=>handleMouseEnter(7)} onMouseLeave={handleMouseLeave}>Help <MdKeyboardArrowDown color='#D8232A' /></a>
      {/* Dropdown content */}
      {openDropdown === 7 && (
        <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div className="py-1" role="none">
            <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">Help Center</a>
            <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-1">Sales Enquiry</a>
         
          </div>
        </div>
      )}
    </div>
  </nav>
   {/*body Section */}
</div>
      <p className="text-3xl text-[#363636] flex justify-center items-center" style={{ margin: "40px" }}>Welcome back! Let’s continue your search</p>

      {/* <main class="main-search flex justify-center items-center ">
        <div class="search-main p-4  flex items-center w-[30%] relative">
          <input type="text" class="search bg-white px-4 py-2 rounded-full border-2 w-full border-gray-300 focus:outline-none" placeholder="Search properties and more..." />
          <button class="search-btn absolute right-5 bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 focus:outline-none">
            <BiSearchAlt />
          </button>
        </div>
      </main> */}



      <div className='flex justify-center items-center m-20'>
        <div className='w-[70%] flex justify-between items-center border-[1px] border-[#909090] h-14 rounded-full p-2'>
          <div className='flex items-center w-[30%] justify-evenly h-8 border-r border-[#D7D7D7]'>
            <p><IoLocation color='red'/></p>
            {/* <p className='bg-[#FBE9E9] rounded-full px-3 py-1' >kolkata</p> */}
            <input type="text" className="outline-none w-[60%]" placeholder='Your address..' />
          </div>
          <div className='flex justify-evenly w-[20%] items-center h-8 text-start border-r border-[#D7D7D7]'>
            <p><MdHome color="red"/></p>
            {/* <p>Flat +1</p> */}
            <div>
              <select className='outline-none'>
                <option defaultValue={"Residential"}>Residential</option>
                <option>Commmercial</option>
              </select>
            </div>

          </div>
          <div className='flex justify-around w-[20%] items-center h-8 text-start'>
            <p><TbCoinRupeeFilled color='red' /></p>
            {/* <p>Budget</p> */}
            <div>
              <select className='outline-none'>
                <option defaultValue={"Budget"}>Budget</option>
                <option >₹2 Lac</option>
                <option >₹3 Lac</option>
                <option >₹5 Lac</option>
                <option >₹10 Lac</option>
              </select>
            </div>
          </div>
          <div>
            <button className='bg-[#4eaea2] text-white px-8 py-2 rounded-full items-center flex justify-evenly'>
              <p><BiSearchAlt/></p>
              <p>search</p>
              </button>
          </div>
        </div>
      </div>





      <div style={{ display: 'flex', justifyContent: "center" }}>
        <p className='text-start w-[90%] m-10 text-3xl text-[#363636]'>We've got properties in Kolkata for everyone</p>
      </div>

      <section className='flex justify-center'>
        <div className='w-[90%] grid grid-cols-4 gap-3 '>
          <div className=' min-w-full h-[200px] object-cover object-top flex justify-center items-end rounded-lg border-[1px] border-[#D7D7D7]' style={{ backgroundImage: `linear-gradient(to right, rgba(1,0,5,0.6727065826330532) 0%, rgba(14,3,3,0.47102591036414565) 22%, rgba(9,0,0,0.4654236694677871) 47%, rgba(10,0,0,0.3113620448179272) 55%, rgba(10,0,0,0.258140756302521) 59%, rgba(10,0,0,0.13209033613445376) 63%, rgba(10,0,10,0.14889705882352944) 72%, rgba(0,0,10,0.053658963585434205) 79%, rgba(0,9,11,0.053658963585434205) 87%, rgba(0,7,10,0.09287464985994398) 94%, rgba(0,4,8,0) 100%),url(${owner})`, backgroundSize: "cover" }}>
            <div className=' w-4/5 h-3/5 flex flex-col justify-evenly text-start mb-2 text-white'>
              <p className='font-bold text-2xl'>6276 </p>
              <p className='text-xl'> owner properties</p>
              <p className='flex items-center'> Explore <IoIosArrowRoundForward /></p>
            </div>
          </div>
          <div className=' min-w-full h-[200px] object-cover object-top flex justify-center items-end rounded-lg border-[1px] border-[#D7D7D7]' style={{ backgroundImage: `linear-gradient(to right, rgba(1,0,5,0.6727065826330532) 0%, rgba(14,3,3,0.47102591036414565) 22%, rgba(9,0,0,0.4654236694677871) 47%, rgba(10,0,0,0.3113620448179272) 55%, rgba(10,0,0,0.258140756302521) 59%, rgba(10,0,0,0.13209033613445376) 63%, rgba(10,0,10,0.14889705882352944) 72%, rgba(0,0,10,0.053658963585434205) 79%, rgba(0,9,11,0.053658963585434205) 87%, rgba(0,7,10,0.09287464985994398) 94%, rgba(0,4,8,0) 100%),url(${fur})`, backgroundSize: "cover" }}>
            <div className='w-4/5 h-3/5 flex flex-col justify-evenly text-start mb-2 text-white'>
              <p className='font-bold text-2xl'>6276 </p>
              <p className='text-xl'> owner properties</p>
              <p className='flex items-center'>Explore <IoIosArrowRoundForward /></p>
            </div>
          </div>
          <div className=' min-w-full h-[200px] object-cover object-top flex justify-center items-end rounded-lg border-[1px] border-[#D7D7D7]' style={{ backgroundImage: `linear-gradient(to right, rgba(1,0,5,0.6727065826330532) 0%, rgba(14,3,3,0.47102591036414565) 22%, rgba(9,0,0,0.4654236694677871) 47%, rgba(10,0,0,0.3113620448179272) 55%, rgba(10,0,0,0.258140756302521) 59%, rgba(10,0,0,0.13209033613445376) 63%, rgba(10,0,10,0.14889705882352944) 72%, rgba(0,0,10,0.053658963585434205) 79%, rgba(0,9,11,0.053658963585434205) 87%, rgba(0,7,10,0.09287464985994398) 94%, rgba(0,4,8,0) 100%),url(${ver})`, backgroundSize: "cover" }}>
            <div className='w-4/5 h-3/5 flex flex-col justify-evenly text-start mb-2 text-white'>
              <p className='font-bold text-2xl'>6276 </p>
              <p className='text-xl'> owner properties</p>
              <p className='flex items-center'>Explore <IoIosArrowRoundForward /></p>
            </div>
          </div>
          <div className=' min-w-full h-[200px] object-cover object-top flex justify-center items-end rounded-lg border-[1px] border-[#D7D7D7]' style={{ backgroundImage: `linear-gradient(to right, rgba(1,0,5,0.6727065826330532) 0%, rgba(14,3,3,0.47102591036414565) 22%, rgba(9,0,0,0.4654236694677871) 47%, rgba(10,0,0,0.3113620448179272) 55%, rgba(10,0,0,0.258140756302521) 59%, rgba(10,0,0,0.13209033613445376) 63%, rgba(10,0,10,0.14889705882352944) 72%, rgba(0,0,10,0.053658963585434205) 79%, rgba(0,9,11,0.053658963585434205) 87%, rgba(0,7,10,0.09287464985994398) 94%, rgba(0,4,8,0) 100%),url(${imm})`, backgroundSize: "cover" }}>
            <div className='w-4/5 h-3/5 flex flex-col justify-evenly text-start mb-2 text-white'>
              <p className='font-bold text-2xl'>6276 </p>
              <p className='text-xl'> owner properties</p>
              <p className='flex items-center'>Explore <IoIosArrowRoundForward /></p>
            </div>
          </div>
        </div>
      </section>





      <div style={{ display: 'flex', justifyContent: "center" }}>
        <div className='w-[90%] flex justify-between'>
          <p className='text-start  mt-10 mb-10 text-3xl text-[#363636]'>Featured Projects </p>
          <p className='mt-10 mb-10 text-sm flex items-center text-red-500'>See all Projects <IoIosArrowRoundForward /></p>
        </div>
      </div>

      <section className='flex justify-center'>
        <div className='w-[90%] grid grid-cols-2 gap-3'>
          <div className='flex flex-col rounded-lg border-[1px] border-[#D7D7D7]' >
            <img src={project} alt="" className='h-[200px] w-full object-cover object-top rounded-t-lg' />
            <div className='text-start m-2 flex flex-row justify-between'>
              <div>
                <p className='font-bold ml-2 text-lg'>Skycraper Astha</p>
                <p className='text-sm ml-2 text-[#999999]'>By skycraper realtek properties </p>
                <p className='text-sm ml-2 text-[#999999]'>Newtown, Kolkata </p>
              </div>
              <div>
                <p className='text-sm mr-2 text-[#999999] text-end'>2BHK flat</p>
                <p className='text-sm mr-2 text-[#999999] text-end'>₹1.39cr onwards</p>
                <button className='rounded-full bg-red-700 text-xs p-2 m-2 text-white'>View Details</button>
              </div>
            </div>
          </div>

          <div className='flex flex-col rounded-lg border-[1px] border-[#D7D7D7]' >
            <img src={project2} alt="" className='h-[200px] w-full object-cover object-top rounded-t-lg' />
            <div className='text-start m-2 flex flex-row justify-between'>
              <div>
                <p className='font-bold ml-2 text-lg'>Skycraper Astha</p>
                <p className='text-sm ml-2 text-[#999999]'>By skycraper realtek properties </p>
                <p className='text-sm ml-2 text-[#999999]'>Newtown, Kolkata </p>
              </div>
              <div>
                <p className='text-sm mr-2 text-[#999999] text-end'>2BHK flat</p>
                <p className='text-sm mr-2 text-[#999999] text-end'>₹1.39cr onwards</p>
                <button className='rounded-full bg-red-700 text-xs p-2 m-2 text-white'>View Details</button>
              </div>
            </div>
          </div>

        </div>
      </section>




      <div style={{ display: 'flex', justifyContent: "center" }}>
        <div className='w-[90%] flex justify-between'>
          <p className='text-start  mt-10 mb-10 text-3xl text-[#363636]'>Popular Owner Properties </p>
          <p className='mt-10 mb-10 text-sm flex items-center text-red-500'>See all Projects <IoIosArrowRoundForward /></p>
        </div>
      </div>
      <section className='flex justify-center'>
        <div className='w-[90%] grid grid-cols-4 gap-3'>
          <div className='flex flex-col rounded-lg border-[1px] border-[#D7D7D7]' >
            <img src={owner2} alt="" className='h-[150px] w-full object-cover object-top rounded-t-lg' />
            <div className='text-start m-2'>
              <p className='text-sm m-2'>2BHK flat </p>
              <p className='font-bold m-2'>₹14 lac | 500 square ft.</p>
              <p className='text-sm m-2'>Behala, Kolkata</p>
              <button className='rounded-full bg-red-700 text-xs p-2 m-2 text-white'>View Details</button>
            </div>
          </div>
          <div className='flex flex-col rounded-lg border-[1px] border-[#D7D7D7]'>
            <img src={owner3} alt="" className='h-[150px] w-full object-cover object-top rounded-t-lg' />
            <div className='text-start m-2'>
              <p className='text-sm m-2'>2BHK flat </p>
              <p className='font-bold m-2'>₹14 lac | 500 square ft.</p>
              <p className='text-sm m-2'>Behala, Kolkata</p>
              <button className='rounded-full bg-red-700 text-xs p-2 m-2 text-white'>View Details</button>
            </div>
          </div>
          <div className='flex flex-col rounded-lg border-[1px] border-[#D7D7D7]'>
            <img src={owner4} alt="" className='h-[150px] w-full object-cover object-top rounded-t-lg' />
            <div className='text-start m-2'>
              <p className='text-sm m-2'>2BHK flat </p>
              <p className='font-bold m-2'>₹14 lac | 500 square ft.</p>
              <p className='text-sm m-2'>Behala, Kolkata</p>
              <button className='rounded-full bg-red-700 text-xs p-2 m-2 text-white'>View Details</button>
            </div>
          </div>
          <div className='flex flex-col rounded-lg border-[1px] border-[#D7D7D7]'>
            <img src={imm} alt="" className='h-[150px] w-full object-cover object-top rounded-t-lg' />
            <div className='text-start m-2'>
              <p className='text-sm m-2'>2BHK flat </p>
              <p className='font-bold m-2'>₹14 lac | 500 square ft.</p>
              <p className='text-sm m-2'>Behala, Kolkata</p>
              <button className='rounded-full bg-red-700 text-xs p-2 m-2 text-white'>View Details</button>
            </div>
          </div>
        </div>
      </section>



      {/* <div style={{ display: 'flex', justifyContent: "center" }}>
        <div className='w-[90%] flex justify-between'>
          <p className='text-start  mt-10 mb-10 text-3xl text-[#363636]'>MB Preferred Agents in Kolkata </p>
          <p className='mt-10 mb-10 text-sm flex items-center text-red-500'>See all <IoIosArrowRoundForward /></p>
        </div>
      </div> */}

      {/* <section className='flex justify-center'>
        <div className='w-[90%] grid grid-cols-4 gap-3'>


          <div className='text-start m-2 rounded-lg border-[1px] border-[#D7D7D7]'>
            <div className='text-sm p-2 text-start bg-[#DFF6F9]'>
              <p className='font-bold'>MB Preferred</p>
              <p>Vikhash Surana</p>
            </div>
            <div className='p-2'>
              <p className='font-bold '>Hamlyn Realty Pvt Ltd</p>
              <p className='text-xs text-[#999999]'>Operating Since  | Buyers Serverd</p>
            </div>


            <div className='flex justify-between p-2'>
              <div>
                <p className='text-lg font-bold'>156</p>
                <p>Properties <br />for sale</p>
              </div>
              <div>
                <p className='text-lg font-bold'>1</p>
                <p>Properties <br />for Rent</p>
              </div>
            </div>
          </div>


          <div className='text-start m-2 rounded-lg border-[1px] border-[#D7D7D7]'>
            <div className='text-sm p-2 text-start bg-[#DFF6F9]'>
              <p className='font-bold'>MB Preferred</p>
              <p>Vikhash Surana</p>
            </div>
            <div className='p-2'>
              <p className='font-bold '>Hamlyn Realty Pvt Ltd</p>
              <p className='text-xs text-[#999999]'>Operating Since  | Buyers Serverd</p>
            </div>


            <div className='flex justify-between p-2'>
              <div>
                <p className='text-lg font-bold'>156</p>
                <p>Properties <br />for sale</p>
              </div>
              <div>
                <p className='text-lg font-bold'>1</p>
                <p>Properties <br />for Rent</p>
              </div>
            </div>
          </div>



          <div className='text-start m-2 rounded-lg border-[1px] border-[#D7D7D7]'>
            <div className='text-sm p-2 text-start bg-[#DFF6F9]'>
              <p className='font-bold'>MB Preferred</p>
              <p>Vikhash Surana</p>
            </div>
            <div className='p-2'>
              <p className='font-bold '>Hamlyn Realty Pvt Ltd</p>
              <p className='text-xs text-[#999999]'>Operating Since  | Buyers Serverd</p>
            </div>


            <div className='flex justify-between p-2'>
              <div>
                <p className='text-lg font-bold'>156</p>
                <p>Properties <br />for sale</p>
              </div>
              <div>
                <p className='text-lg font-bold'>1</p>
                <p>Properties <br />for Rent</p>
              </div>
            </div>
          </div>



          <div className='text-start m-2 rounded-lg border-[1px] border-[#D7D7D7]'>
            <div className='text-sm p-2 text-start bg-[#DFF6F9]'>
              <p className='font-bold'>MB Preferred</p>
              <p>Vikhash Surana</p>
            </div>
            <div className='p-2'>
              <p className='font-bold '>Hamlyn Realty Pvt Ltd</p>
              <p className='text-xs text-[#999999]'>Operating Since  | Buyers Serverd</p>
            </div>


            <div className='flex justify-between p-2'>
              <div>
                <p className='text-lg font-bold'>156</p>
                <p>Properties <br />for sale</p>
              </div>
              <div>
                <p className='text-lg font-bold'>1</p>
                <p>Properties <br />for Rent</p>
              </div>
            </div>
          </div>

        </div>
      </section > */}



      <div style={{ display: 'flex', justifyContent: "center" }}>
        <div className='w-[90%] flex justify-between'>
          <p className='text-start  mt-10 mb-10 text-3xl text-[#363636]'>Exclusive Owner Properties in Kolkata </p>
          <p className='mt-10 mb-10 text-sm flex items-center text-red-500'>See all Properties<IoIosArrowRoundForward /></p>
        </div>
      </div>

      <section className='flex justify-center'>
        <div className='w-[90%] grid grid-cols-4 gap-3'>
          <div className='flex flex-col rounded-lg border-[1px] border-[#D7D7D7]' >
            <img src={kolkata} alt="" className='h-[150px] w-full object-cover object-top rounded-t-lg' />
            <div className='text-start m-2'>
              <p className='text-sm m-2'>2BHK flat </p>
              <p className='font-bold m-2'>₹14 lac | 500 square ft.</p>
              <p className='text-sm m-2'>Behala, Kolkata</p>
              <p className='text-sm m-2'>Ready to Move</p>
              <button className='rounded-full bg-red-700 text-xs p-2 m-2 text-white'>View Details</button>
            </div>
          </div>
          <div className='flex flex-col rounded-lg border-[1px] border-[#D7D7D7]'>
            <img src={kolkata1} alt="" className='h-[150px] w-full object-cover object-top rounded-t-lg' />
            <div className='text-start m-2'>
              <p className='text-sm m-2'>2BHK flat </p>
              <p className='font-bold m-2'>₹14 lac | 500 square ft.</p>
              <p className='text-sm m-2'>Behala, Kolkata</p>
              <p className='text-sm m-2'>Ready to Move</p>
              <button className='rounded-full bg-red-700 text-xs p-2 m-2 text-white'>View Details</button>
            </div>
          </div>
          <div className='flex flex-col rounded-lg border-[1px] border-[#D7D7D7]'>
            <img src={kolkata2} alt="" className='h-[150px] w-full object-cover object-top rounded-t-lg' />
            <div className='text-start m-2'>
              <p className='text-sm m-2'>2BHK flat </p>
              <p className='font-bold m-2'>₹14 lac | 500 square ft.</p>
              <p className='text-sm m-2'>Behala, Kolkata</p>
              <p className='text-sm m-2'>Ready to Move</p>
              <button className='rounded-full bg-red-700 text-xs p-2 m-2 text-white'>View Details</button>
            </div>
          </div>
          <div className='flex flex-col rounded-lg border-[1px] border-[#D7D7D7]'>
            <img src={kolkata3} alt="" className='h-[150px] w-full object-cover object-top rounded-t-lg' />
            <div className='text-start m-2'>
              <p className='text-sm m-2'>2BHK flat </p>
              <p className='font-bold m-2'>₹14 lac | 500 square ft.</p>
              <p className='text-sm m-2'>Behala, Kolkata</p>
              <p className='text-sm m-2'>Ready to Move</p>
              <button className='rounded-full bg-red-700 text-xs p-2 m-2 text-white'>View Details</button>
            </div>
          </div>
        </div>
      </section>

      <div style={{ display: 'flex', justifyContent: "center" }}>
        <div className='w-[90%] flex justify-between'>
          <p className='text-start  mt-10 mb-10 text-3xl text-[#363636]'>New Projects in Kolkata </p>
          <p className='mt-10 mb-10 text-sm flex items-center text-red-500'>See all Properties<IoIosArrowRoundForward /></p>
        </div>
      </div>
      <section className='mb-20'>
        <div className='flex justify-center'>
          <div className='justify-start w-[90%] border-b-[2px] border-[#D7D7D7] p-1'>
            <nav className='w-[70%] flex justify-between text-lg cursor-pointer'>

              <div className='hover:underline 
             underline-offset-[10px] hover:scale-105 transition-all duration-150 ease-in'>Rajarhat</div>

              <div className='hover:underline
             underline-offset-[10px] hover:scale-105 transition-all duration-150 ease-in'>New Town</div>

              <div className='hover:underline
               underline-offset-[10px] hover:scale-105 transition-all duration-150 ease-in'>Behala</div>

              <div className='hover:underline
               underline-offset-[10px] hover:scale-105 transition-all duration-150 ease-in'>E M Bypass
              </div>

              <div className='hover:underline
              underline-offset-[10px] hover:scale-105 transition-all duration-150 ease-in'>Park Street</div>

              <div className='hover:underline
              underline-offset-[10px] hover:scale-105 transition-all duration-150 ease-in'>Joka</div>

              <div className='hover:underline
              underline-offset-[10px] hover:scale-105 transition-all duration-150 ease-in'>Howrah</div>


            </nav>
          </div>

        </div>



        <div className='flex justify-center'>
          <div className='w-[90%] grid grid-cols-4 mt-10 gg'>
            <p>Balaji Enclave</p>
            <p>Sunrise Point </p>
            <p>Siddha Galaxia</p>
            <p>Krishna Kunj</p>
            <p>Green Island</p>
            <p>Silver Oak Estate</p>
            <p>Siddha Galaxia Phase 2</p>
            <p>Magnolia Merlion</p>
            <p>Magnolia Merlion</p>
            <p>Siddha Town</p>
            <p>Magnolia Oxygen</p>
            <p>Green Heights</p>
          </div>
        </div>
      </section>




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

    </div >
  )
}

export default Home;





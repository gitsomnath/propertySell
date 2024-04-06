import React from 'react';
import Logo from "../Images/logo.png";
import { useNavigate } from 'react-router-dom'; 

function Header() {
    const navigate = useNavigate(); 
    const redirectToPost = () => {
    
        navigate('/post'); // Navigate to the "/post" route
      };
      const redirectToLogin = () => {
    
        navigate('/login');
      };
  return (
    <header>
    <div className="container">
      <div className="headerleft">
        <a href="" className="sLogo">
          <img src={Logo} alt="propertySell Logo" />
        </a>
        <div className="header-menu-wrap">
          <a className="header-menu-link" href="#">
            Kolkata
          </a>
        </div>
      </div>
      <div className="headerright">
        <div className="header-menu-wrap">
          {/* <a className="header-menu-link" href="#">
            MB Prime
          </a> */}
          <div className="header__main__dropdown">
            <div className="prime__block">
              <div>
                <span className="prime__block__icn"></span>
              </div>
              <div className="prime__block__heading">
                Introducing <span className="bold">MB</span>{' '}
                <span className="c-gold-900 bold">Prime</span>
              </div>
              <div className="prime__block__text">
                Pay Zero Commission | Save Time &amp; Money
              </div>
            </div>
            <ul className="prime__features">
              <li>Contact upto 30 Owners directly</li>
              <li>Access to Prime Exclusive Properties</li>
            </ul>
            <div>
              <a href="#" className="prime-cta">
                Join Now
              </a>
            </div>
          </div>
        </div>
        <div className="header-menu-wrap">
          <a className="header-menu-link" onClick={redirectToLogin}>
            Login
          </a>
          <div className="header__main__dropdown">
            <div className="login__box">
              <div className="login__divider">
                <span className="login__divider__label">My Activity</span>
              </div>
              <ul className="login__drop-links">
                <li id="contactedId">
                  <a href="#">
                    Requested Properties <span className="badge">New</span>
                  </a>
                </li>
                <li id="contactedId">
                  <a href="#">Contacted Properties</a>
                </li>
                <li id="viewedId">
                  <a href="#">Viewed Properties</a>
                </li>
                <li>
                  <a href="#">Shortlisted Properties</a>
                </li>
                <li id="searchedId">
                  <a href="#">Searches</a>
                </li>
              </ul>
              <div className="login__divider"></div>
              <ul className="login__drop-links">
                <li>
                  <a href="#">Recommendations</a>
                </li>
                <li>
                  <a href="#">My Profile</a>
                </li>
              </ul>
            </div>
            <div className="login__box signup-box" onClick={redirectToLogin}>
              <a href="#" className="login__drop-cta">
                Login
              </a>
              <div className="login__drop-text-2" onClick={redirectToLogin}>
                New to propertySell? <a href="#">Sign Up</a>
              </div>
            </div>
          </div>
        </div>
        <div className="header-postproperty" onClick={redirectToPost}>
          <a href="#">Post Property<span className="badge">FREE</span></a>
        </div>
      </div>
    </div>
  </header>
  );
}

export default Header;
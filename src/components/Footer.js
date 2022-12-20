import React from 'react'

const Footer = () => {
  return (
    <>
   <div className="container-fluid footer-container">
    <div className="row">
        <div className="col-lg-4 col-sm-2">
            <img src='Images/Logo/logo.png' alt='logo'/>
         </div>   
            <div className="row">
          <div className="col-lg-8 col-sm-10 mx-auto Footer-RightSide-Main">
            <div className="row">
              <div className="col-4 col-lg-4 Footer-InnerSection">
                <h1>Quick Links</h1>
                  <ul>
                     <li><span>Our Story</span></li>
                     <li><span>NewsRoom</span></li>
                     <li><span>Causes</span></li>
                </ul>
                </div>
                <div className="col-4 col-lg-4 Footer-InnerSection">
                <h1>Learn More</h1>
                  <ul>
                     <li><span>Become a Partner</span></li>
                     <li><span>JoinUs</span></li>
                </ul>
                </div>
                <div className="col-4 col-lg-4 Footer-InnerSection">
                <h1>Contact Infomation</h1>
                  <ul>
                     <li><i class="fa-solid fa-phone"></i>120-240-9600</li>
                     <li><i class="fa-regular fa-envelope"></i>donate@charity.org</li>
                     <li><i class="fa-regular fa-address-book"></i>Aker 20, 0150 Oslo, Norway</li>
                </ul>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
   </>
  )
}

export default Footer

import React from 'react'

const Banner = () => {
  return (
   <>
    <section className="top-banner">
        <div className="container-fluid banner-container">
            <div className="row">
                <div className="col-lg-8 col-12 left-side-banner">
                    <div className="row">
                        <div className="col-lg-7 col-6 banner-inside-div ">
                            <li><i class="fa-solid fa-address-book"></i>Akersh 20, 0150 Oslo,Norway</li>
                        
                        </div>
                        <div className="col-lg-5 col-6 banner-inside-right-div ms-auto">
                        <li><i class="fa-solid fa-envelope"></i>Email-amar@yahoo.com</li>
                        
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 d-flex right-side-banner">
                </div>
            </div>
        </div>
    </section>
   </>
  )
}

export default Banner

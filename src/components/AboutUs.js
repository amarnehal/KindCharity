import React from 'react'

const AboutUs = () => {
  return (
    <>
        <section className="AboutUs mb-2">
            <div className="conatiner-fluid AboutUs-Container">
                <div className="row">
                    <div className="col-10 col-md-12 col-lg-6 leftSide-AboutUs">
                        <img src="Images/About/group.jpg" alt='group' className='img-fluid'/>
                    </div>
                    <div className="col-12 col-lg-6 rightSide-AboutUs">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-12 rightSide-InnerSection1">
                                <h2 className='mb-2'>Our Story</h2>
                                <h4 className='mb-2'>Kind Heart Charity Non-Profit Organisation</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis esse enim aperiam 
                                    voluptatem maxime, 
                                    deserunt dicta inventore praesentium natus corporis?</p>
                            </div>
                            <div className="row">
                            <div className="col-lg-8 col-md-8 col-12 rightSide-InnerSection2">
                                <h1 className='mb-3'>Our Mission</h1>
                                <p className='mb-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                                Officia reprehenderit, ratione autem laboriosam ab veniam. Lorem ipsum, dolor 
                                sit amet consectetur adipisicing elit.
                                </p>
    
                            </div>
                            <div className="col-lg-4 col-md-4 col-12 rightSide-InnerSection3">
                                <h1>2009</h1>
                                <p>Founded</p>
                                <h1>120B</h1>
                                <p>Donations</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className='AboutUs-Two'>
            <div className="conatiner AboutUs-Two-Container">
                <div className="row">
                    <div className="col-12 col-lg-6 AboutUs-Two-leftSide">
                        <img src='Images/AboutUsTwo/portrait.jpg' alt='SandyChan' className='img-fluid'/>
                    </div>
                    <div className="col-12 col-lg-6 AboutUs-Two-RightSide">
                        <h2 className='text-center'>Sandy Chan</h2>
                        <span>Co-Founder Partner</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Magnam aperiam esse cum sequi eum minima, nam accusamus a 
                            corporis nulla totam eius vel id ipsum.</p>
                            <br/>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, ea ipsam! Molestias.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, ratione vel cum quod tempora consectetur 
                                adipisci iste exercitationem facere distinctio.
                            </p>
                            <div className='text-center'>
                            <i className="fa-brands fa-facebook ms-2"></i>
                            <i className="fa-brands fa-twitter ms-3"></i>
                            <i className="fa-brands fa-instagram ms-3"></i>
                            </div>
                    </div>
                </div>
            </div>
        </section>
        <section className= 'mt-2'>
            <div className="container-fluid AboutUs-Two-Mid">
                <div className="row">
                    <div className='div1'></div>
                    <div className="col-lg-6 AboutUs-TwoMidLeft text-center">
                        <h2>Make an Impact <br/>Save Lives</h2>
                        <div className="div2"></div>
                    </div>
                    <div className="col-lg-6  text-center AboutUs-TwoMidRight">
                        <span className='me-4'>Make a donation</span>
                        <button className='Secondary-btn'>Become a Volunteer</button>
                    </div>
                </div>
            </div>
           
        </section>
    </>
  )
}

export default AboutUs

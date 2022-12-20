import React from 'react'
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HeroTwo from "../components/HeroTwo";
import AboutUs from "../components/AboutUs";
import OurCauses from "../components/OurCauses";
import JoinUs from "../components/JoinUs";
import Footer from '../components/Footer';


const Home = () => {
  return (
   <>
    <Banner/>
     <Navbar/>
     <Hero/>
     <HeroTwo/>
     <AboutUs/>
     <OurCauses/>
     <JoinUs/>
     <Footer/>
   </>
  )
}

export default Home

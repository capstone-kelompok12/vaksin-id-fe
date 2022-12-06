import React from 'react'
import Banner from '../components/Banner'
import Hero from '../components/Hero'
import NavbarLanding from '../components/NavbarLanding'
import FooterLanding from '../components/FooterLanding'
import Brosur from "../components/Brosur";
import FacilitiesLanding from "../components/FacilitiesLanding";

const Landing = () => {
  return (
    <>
      <NavbarLanding />
      <Hero />
      <Banner />
      <FacilitiesLanding />
      <Brosur />
      <FooterLanding/>
    </>
    
  )
}

export default Landing
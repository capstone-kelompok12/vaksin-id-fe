import React from 'react'
import Banner from '../components/Banner'
import Hero from '../components/Hero'
import NavbarLanding from '../components/NavbarLanding'
import FooterLanding from '../components/footerLanding'

const Landing = () => {
  return (
    <>
      <NavbarLanding />
      <Hero />
      <Banner />
      <FooterLanding/>
    </>
    
  )
}

export default Landing
import React from 'react'
import Navbar from './navbar'
import Hero from './Hero/hero'
import Information from './AboutSection/information'
import BlogInfo from './BlogInfo/bloginfo'
import Footer from '../Footer/footer'

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Information />
      <BlogInfo />
      <Footer />
    </div>
  )
}

export default HomePage

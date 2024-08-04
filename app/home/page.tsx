import React from 'react'
import Navbar from '../components/pages/HomePage/navbar'
import Hero from '../components/pages/HomePage/Hero/hero'
import Information from '../components/pages/HomePage/AboutSection/information'
import BlogInfo from '../components/pages/HomePage/BlogInfo/bloginfo'
import Footer from '../components/pages/Footer/footer'

const Page = () => {
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

export default Page

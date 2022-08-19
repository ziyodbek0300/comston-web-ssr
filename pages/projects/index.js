import React from 'react'
import Navbar from '../../components/navbar'
import NinthSection from '../app-development/NinthSection'
import FirstSection from './FirstSection.jsx'
import Footer from '../../components/footer/Footer'


export default function index() {
  return (
    <div>
         <Navbar />
         <FirstSection/>
         <NinthSection/>
         <Footer/>
    </div>
  )
}

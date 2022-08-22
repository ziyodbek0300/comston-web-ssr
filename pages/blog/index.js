import React from 'react'
import FirstSection from './FirstSection'
import Navbar from "../../components/navbar";
import Footer from '../../components/footer/Footer';


export default function index() {
  return (
    <div>
        <Navbar/>
        <FirstSection/>
        <Footer/>
    </div>
  )
}

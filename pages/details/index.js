import React from 'react'
import Navbar from "../../components/navbar";
import Details from "./Details"
import Footer from '../../components/footer/Footer';
export default function index() {
  return (
    <div>
        <Navbar />
        <Details/>
        <Footer />
    </div>
  )
}

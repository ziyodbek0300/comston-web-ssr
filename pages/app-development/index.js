import React from 'react'
import Navbar from '../../components/navbar'
import FirstSection from './FirstSection'
import SecondSection from './SecondSection'
import ThirdSection from './ThirdSection'
import FourthSection from './FourthSection'
import FifthSection from './FifthSection'
import SixthSection from './SixthSection'
import SeventhSection from './SeventhSection'
import EigthSection from './EigthSection'
import NinthSection from './NinthSection'
import Footer from '../../components/footer/Footer'

export default function index() {
   return (
      <div>
         <Navbar />
         <FirstSection />
         <SecondSection />
         <ThirdSection />
         <FourthSection />
         <FifthSection />
         <SixthSection />
         <SeventhSection />
         <EigthSection />
         <NinthSection />
         <Footer/>
      </div>
   )
}

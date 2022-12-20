import React from 'react'
import { product } from '../assets/icons'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import RightImgCard from '../components/RightImgCard/RightImgCard'

const Services = () => {
  return (<>
    <div style={{ backgroundColor: 'white' }}> <Navbar /></div>

    <div style={{ padding: '40px 10px' }}>
      <RightImgCard
        heading1={`Customer Services`}
        content1={`Innovative solutions to insurmountable problems
        <br/><br/>
        Restaurants have extremely hectic schedules and peak hours are enough to drive people crazy. In an attempt to make it easier for restaurateurs to manage their operations, we offer custom product development services.
        <br/><br/>
        Our services create solutions to suit your needs. Our solutions, tailor made for you, stem from extensive research and a deep understanding of the underlying issues.`}
        imageSrc={product} />
    </div>
    <Footer />
  </>
  )
}

export default Services
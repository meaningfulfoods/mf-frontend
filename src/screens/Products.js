import React from 'react'
import { COLORS } from '../assets/constants'
import Footer2 from '../components/Footer2/Footer2'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import RightImgCard from '../components/RightImgCard/RightImgCard'
import LeftImgCard from '../components/LeftImgCard/LeftImgCard'
import { fries, product, vendor } from '../assets/icons/index'

const Products = () => {
  return (<>
    <div style={{ backgroundColor: COLORS.lightYellow }}> <Navbar /></div>

    <div style={{ backgroundColor: 'white', paddingBottom: '150px', paddingTop: '50px' }}>
      <RightImgCard
        heading1={'Products'}
        content1={'Let our machines earn money for you!'}
        imageSrc={product}
      />

    </div>

    <div style={{ backgroundColor: 'white', padding: '0px 10px 150px 10px' }}> <LeftImgCard
      heading1={'Soft Serve Vending Machine'}
      content1={'Experience the future in the present at Icetronaut. Come, take a cup of your favorite ice cream and enjoy the futuristic view of the fully automatic vending machine.'}
      imageSrc={vendor} />
    </div>

    <div style={{ backgroundColor: 'white', padding: '0px 10px 150px 10px' }}> <RightImgCard
      heading1={'French Fries Vending Machine'}
      content1={'Experience the next level robotic technology with our French Fries vending machine. Find the most sustainable, high precision and low cost robotic arms doing the job.'}
      imageSrc={fries} />
    </div>

    <div style={{ paddingBottom: '100px' }}>
      <Footer2
        description={'Experience the future in the present at Icetronaut. Come, take a cup of your favorite ice cream and enjoy the futuristic view of the fully automatic vending machine.'} />
    </div>

    <Footer />
  </>
  )
}

export default Products
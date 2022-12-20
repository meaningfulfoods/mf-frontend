import { React, useEffect, useState, memo } from 'react'
import { COLORS } from '../assets/constants'
import Footer2 from '../components/Footer2/Footer2'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import RightImgCard from '../components/RightImgCard/RightImgCard'
import LeftImgCard from '../components/LeftImgCard/LeftImgCard'
import TopBanner from '../components/TopBanner/TopBanner'
import axios from 'axios'
import { fries, vendor } from '../assets/icons'

const Home = () => {

  const [loading, setLoading] = useState(true)
  const [productData, setProductData] = useState([])
  const [address, setAddress] = useState('')
  const [footerEnd, setFooterEnd] = useState('')
  const [apiCustomService, setApiCustomService] = useState('')

  useEffect(() => {
    async function fetchData() {
      try {
        const product = await axios.get(`/product`);
        if (product.data.success) {
          setProductData(product.data.data)
          console.log(product.data.data);
        }
        const getAbout = await axios.get(`/about`);
        if (getAbout.data.success) {
          setApiCustomService(getAbout.data.data[0].description)
        }
      } catch (err) {
        console.log(err);
      }
      setLoading(false)
    }
    fetchData();
  }, [])

  return (<>
    <div style={{ backgroundColor: COLORS.lightYellow }}> <Navbar /></div>
    <div style={{ backgroundColor: COLORS.lightYellow }}>
      <TopBanner
        heading1={'Meaningful Foods is a Kitchen automation and Robotics company endeavoring to harness the synergistic power of novelty and technology.'}
        content1={'Driven by the constant urge to challenge the status quo and a passion to explore new realms of possibilities, we roll out innovative products that simplify technology consumption, unleash rich experiences and create a longing impact. '} />
    </div>
    <div style={{ backgroundColor: 'transparent', textAlign: 'center', padding: '60px 0px' }}>
      <h2>Products</h2>
    </div>
    <div style={{ backgroundColor: 'white', padding: '0px 10px 150px 10px' }}> <LeftImgCard
      heading1={'Soft Serve Vending Machine'}
      content1={'Experience the future in the present at Icetronaut. Come, take a cup of your favorite ice cream and enjoy the futuristic view of the fully automatic vending machine.'}
      imageSrc={vendor}  /></div>

    <div style={{ backgroundColor: 'white', padding: '0px 10px 150px 10px' }}> <RightImgCard
      heading1={'French Fries Vending Machine'}
      content1={'Experience the next level robotic technology with our French Fries vending machine. Find the most sustainable, high precision and low cost robotic arms doing the job.'}
      imageSrc={fries} />
    </div>
    <div style={{ paddingBottom: '100px' }}><Footer2 description={apiCustomService} /></div>
    <Footer />
  </>

  )
}

export default memo(Home)
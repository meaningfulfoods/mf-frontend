import { React, useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import RightImgCard from '../components/RightImgCard/RightImgCard'
import { BUTTONS, COLORS } from '../assets/constants/index'
import { img1, product } from '../assets/icons/index'
import Footer from '../components/Footer/Footer'
import axios from 'axios'

const About = () => {

  const [loading, setLoading] = useState(false)
  const [apiData, setApiData] = useState(null)
  const [address, setAddress] = useState([])

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       setLoading(true)
  //       const getAbout = await axios.get(`/about`);
  //       if (getAbout.data.success) {
  //         setAddress(getAbout.data.data[0].address)
  //         console.log(getAbout);
  //       }
  //     } catch (err) {
  //       console.log(err);
  //     }
  //     setLoading(false)
  //   }
  //   fetchData();

  // }, [])

  return (<>
    <div style={{ backgroundColor: 'white' }}> <Navbar /></div>

    <div style={{ padding: '40px 10px' }}>
      <RightImgCard
        heading1={`About Us`}
        content1={`A company formed with love, and driven by passion and childlike enthusiasm, Meaningful Foods is Kitchen automation and Robotics Company based out of Hyderabad, India. 
        <br/><br/>
        Driven by the constant urge to challenge the status quo and a passion to explore new realms of possibilities, we roll out innovative products that simplify technology consumption, unleash rich experiences and create a longing impact.`}
        imageSrc={product} />
    </div>

    <div style={{ backgroundColor: 'transparent', textAlign: 'center', padding: '0px 0px 30px 0px' }}>
      <h2 style={{ padding: '25px' }}>Our Mission</h2>
      <div style={{ display: 'flex', justifyContent: 'space-evenly', gap: '10px' }}>

        <div className='gcard' style={{ maxWidth: '400px', padding: '25px', backgroundColor: COLORS.lightYellow }}>
          {/* <h3>Heading here - center aligned</h3> */}
          <p style={{ fontSize: '14px', maxWidth: '300px' }}>We help food companies achieve great growth, significantly reduce labor costs, and serve their customers better.</p>
        </div>

        {/* <div className='gcard' style={{ maxWidth: '400px', padding: '25px', backgroundColor: COLORS.lightYellow }}>
          <h3>Heading here - center aligned</h3>
          <p style={{ fontSize: '14px', maxWidth: '300px', paddingTop: '20px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text</p>
        </div>

        <div className='gcard' style={{ maxWidth: '400px', padding: '25px', backgroundColor: COLORS.lightYellow }}>
          <h3>Heading here - center aligned</h3>
          <p style={{ fontSize: '14px', maxWidth: '300px', paddingTop: '20px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text</p>
        </div> */}

      </div>
    </div>

    <div style={{ backgroundColor: 'transparent', display: 'flex', justifyContent: 'space-evenly', gap: '40px', alignItems: 'center', padding: '80px 10px 100px 10px ' }}>

      <div>
        <h2>Our Story</h2>
        <p style={{ maxWidth: '500px', paddingTop: '40px' }}>We build technology with Indian Engineering, resulting in a work intensive, low cost and mass productive machine. We wish to make you a part of 'our' family.
          We at Meaningful Foods design and create the best of our creativity for you. Our vending machines and kiosks work with high efficiency and accuracy to give you the desired outcome at an affordable price.
        </p>
      </div>

      <div>
        <img alt='' src={img1} style={{ maxWidth: '350px', width: '100%', height: '300px' }} />
      </div>

    </div>
    <Footer />
  </>
  )
}

export default About
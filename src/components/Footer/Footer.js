import { React, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Footer.css'
import { COLORS } from '../../assets/constants'
import axios from 'axios'

const Footer = () => {

  const [loading, setLoading] = useState(false)
  const [apiData, setApiData] = useState(null)
  const [address, setAddress] = useState('')
  const [footerEnd, setFooterEnd] = useState('')

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true)
        const getAbout = await axios.get(`/about`);
        if (getAbout.data.success) {
          setAddress(getAbout.data.data[0].address)
          setFooterEnd(getAbout.data.data[0].footerEnd)
        }
      } catch (err) {
        console.log(err);
      }
      setLoading(false)
    }
    fetchData();

  }, [])

  return (
    <>
      <div style={{ background: COLORS.black }}>
        <div style={{ display: 'flex', flex: 'wrap', justifyContent: 'flex-start', background: COLORS.black, padding: '25px 25px 25px 40px' }}>

          <div className='footerHeaderItem' style={{ color: COLORS.yellow, flex: '30%' }}>
            <p style={{ maxWidth: '250px', lineHeight: '30px', fontWeight: '600' }}>{address}</p></div>

          <div style={{ flex: '30%' }}>
            <NavLink to='/' className='footerHeaderItem' >Home</NavLink>
            <NavLink to='/about' className='footerHeaderItem'>About Us</NavLink>
            <NavLink to='/products' className='footerHeaderItem' >Products</NavLink>
            <NavLink to='/services' className='footerHeaderItem'>Customer services</NavLink>
            <NavLink to='/contact' className='footerHeaderItem'>Contact us</NavLink>
          </div>


          <div style={{ flex: '30%' }}>
            <div className='footerHeaderItem'>
              Linkedin
            </div>
            <div className='footerHeaderItem'>
              Facebook
            </div>
            <div className='footerHeaderItem'>
              Instagram
            </div>
            <div className='footerHeaderItem'>
              Twitter
            </div>
            <div className='footerHeaderItem'>
              Youtube
            </div>
          </div>

        </div>
        <p style={{ color: 'white', padding: '0px 0px 10px 40px' }}>{footerEnd}</p>
      </div>
    </>
  )
}

export default Footer
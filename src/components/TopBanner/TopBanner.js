import React from 'react'
import { COLORS, BUTTONS } from '../../assets/constants'
import { img1 } from '../../assets/icons/index'
import parse from 'html-react-parser';

const TopBanner = (props) => {
  return (<>
    <div style={{ backgroundColor: 'transparent', display: 'flex', justifyContent:'center', textAlign: 'center', padding: '40px' }}>

      <div style={{ textAlign: 'start' }}>
        <h2 style={{maxWidth: '500px'}}>{parse(props.heading1)}</h2>
        <p style={{maxWidth: '500px',paddingTop:'40px'}}>{parse(props.content1)}</p>

        <div style={{ marginTop: '25px' }}>
          <button style={{ ...BUTTONS.btn1, marginRight: '25px' }}>Book a demo</button>
          <button style={{ ...BUTTONS.btn2 }}>Watch video</button>
        </div>
      </div>

      <div>
        <img alt='' src={img1} style={{ maxWidth: '450px', width: '100%', height: '300px' }} />
      </div>
    </div>
  </>

  )
}

export default TopBanner
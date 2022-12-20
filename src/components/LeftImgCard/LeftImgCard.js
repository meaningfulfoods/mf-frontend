import React from 'react'
import { COLORS, BUTTONS } from '../../assets/constants'
import parse from 'html-react-parser';

const LeftImgCard = (props) => {
  return (<>

    <div style={{ backgroundColor: 'transparent', display: 'flex', justifyContent: 'space-evenly', gap: '40px', alignItems: 'center' }}>

      <div>
        <img alt='' src={props.imageSrc} style={{ maxWidth: '450px', width: '100%', height: '300px', paddingRight: '40px' }} />
      </div>

      <div>
        <h2 style={{ maxWidth: '500px' }}>{parse(props.heading1)}</h2>
        <p style={{ maxWidth: '500px', paddingTop: '40px' }}>{parse(props.content1)}</p>

        <div style={{ marginTop: '25px' }}>
          <button style={{ ...BUTTONS.btn1, marginRight: '25px' }}>Book a demo</button>
          <button style={{ ...BUTTONS.btn2 }}>Watch video</button>
        </div>
      </div>

    </div>
  </>

  )
}

export default LeftImgCard
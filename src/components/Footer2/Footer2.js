import { React, useEffect, useState } from 'react'
import { BUTTONS, COLORS } from '../../assets/constants'

const Footer2 = (props) => {

  return (<>

    <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', backgroundColor: COLORS.lightYellow }}>
      <h2 style={{ paddingTop: '25px' }}>Custom Development Services</h2>
      <div style={{ maxWidth: '380px', marginLeft: 'auto', marginRight: 'auto', padding: '25px' }}>
        <p>{props.description}</p>
      </div>

      <button style={{ marginLeft: 'auto', marginRight: 'auto', marginBottom: '25px', ...BUTTONS.btn1 }}>Contact us</button>
    </div>
  </>

  )
}

export default Footer2
import React from 'react'
import { AppSidebar, AppHeader } from '../components/index'
import { Outlet } from "react-router-dom"

const DefaultLayout = () => {
  return (<>
    <AppHeader />
    <div style={{ display: 'flex' }}>
      <AppSidebar />
      <div style={{ height: 'auto', display: 'flex', flexDirection: 'column', color: 'red' }}>
        <div>
          <Outlet />
        </div>

      </div>
    </div >
  </>

  )
}

export default DefaultLayout

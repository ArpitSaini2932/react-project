import React from 'react'
import Header from './component/header/header'
import { Outlet } from 'react-router'
import Footer from './component/footer/footer'
function layout() {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default layout
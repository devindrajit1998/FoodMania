import React from 'react'
import Header from '../../components/Header'
import Slider from './section/Slider'
import Story from './section/Story'
import HotMenu from './section/HotMenu'
import MenuList from '../../components/MenuList'
import Booking from '../../components/Booking'
import Footer from '../../components/Footer'

export default function Home() {
  return (
    <>
    <Header/>
    <Slider/>
    <Story/>
    <HotMenu/>
    <MenuList/>
    <Booking/>
    <Footer/>
    </>
  )
}

import React from 'react'
import styles from '../assets/page.module.css'
const {dancingClass,josefinSansClass,} = require('../assets/font')
import Carousel from '@/components/ui/Carousel'
const Home = () => {
  return (
<div className="relative"><Carousel fonts={[dancingClass,josefinSansClass]}/></div>
  )
}

export default Home
'use client'
import Image from 'next/image'
import styles from '../assets/page.module.css'
import Home from "../pages/Home"
import Link from 'next/link'
import About from '../pages/about'
import Header from '@/components/layouts/Header'

export default function Index() {
  
  return (
      <div>
        <Header/>
        <Home/>

      </div>
      
     
      
    
  )
}

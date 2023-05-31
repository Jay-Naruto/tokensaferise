import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
// import SliderBody from '../comp/SliderBody'
import dynamic from 'next/dynamic'
const SliderBody= dynamic(() => import('../comp/SliderBody'), {
  ssr:false
})
import TableComponent from '../comp/TableComponent'
import Steps from '../comp/Steps'
import Why from '../comp/Benefits2'
import Benefits from '../comp/Benefits'
import Launch from '../comp/Launch'
import Footer from '../comp/Footer'
import Header from '../comp/Header'
import Landing from '../comp/Landing'
import BenefitsGrid from '../comp/BenefitsGrid'
import Benefits2 from '../comp/Benefits2'
import Community from '../comp/Community'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Strive | Landing Page</title>
        <meta name="description" content="Strive landing page." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./fav.png" />
      </Head>
      <Header/>
      <img className={styles.img} src='./Ellipse 8.png' alt=''/>
      <img className={styles.img3} src='./gradient2.png' alt=''/>

      {/* <img className={styles.img2} src='./Ellipse 8.png' alt=''/>
      <img className={styles.img4} src='./gradient2.png' alt=''/> */}

      {/* <SliderBody/> */}
      {/* <TableComponent/> */}
      <Landing/>
      {/* <BenefitsGrid/> */}
      <Steps/>
      {/* <Why/> */}
      <Community/>
      <Benefits/>
      <Benefits2/>
      <Launch/>
      {/* <Footer/> */}
      
    </>
  )
}

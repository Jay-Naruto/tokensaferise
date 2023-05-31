import styles from '../styles/Landing.module.css'
import React from 'react'
import { useMediaQuery } from '@mui/material';
import { TypeAnimation } from 'react-type-animation';
export default function Landing() {
  const matches = useMediaQuery('(max-width:1000px)');
 console.log(matches)
  return (
    <div className={styles.body} >
        <div className={styles.container} >
        <div className={styles.containerText} >
        
     
            
            <div className={styles.containerTextTitle}>
            
            <TypeAnimation
        
      sequence={[
        '$SAFERISE', // Types 'One'
        1000, // Waits 1s
        '$SAFERISE', // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        '$SAFERISE', // Types 'Three' without deleting 'Two'
        1000,
        ""
      
      ]}
      style={{color:'#02a9a7'}}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
    />
            
            </div>


          
         
            <div className={styles.containerTextDescp}>
           <div style={{position:'relative'}}> 
           We are an enthusiastic and inclusive project driven by the community's spirit, committed to establishing an engaging and nurturing environment within the realm of Web3. SafeRise is fueled by our unwavering belief in the strength of collaboration, innovation, and the profound impact blockchain technology can have on revolutionizing community development. Our goal is to create a space where individuals can thrive, fostering a vibrant ecosystem that embraces diversity and empowers everyone to contribute to the future of Web3.
           
           </div>
             {/* <img className={styles.containerTextLshape} src='./Lshape.png' alt=''/> */}
            </div>
            <div className={styles.containerBtnRow}>
            <div className={styles.containerTextBtn}>
           DEX tools

            </div>

            <div style={{backgroundColor:'transparent !important', border:'1px solid #02a9a7'}} className={styles.containerTextBtn}>
           BUY NOW

            </div>
            
            </div>

     
         
            </div>
            <div className={styles.containerImage} >
            {/* <img  className={styles.containerImageTest} src='./testNFT.png' alt='' />
            <img className={styles.containerImageGradient} src='./gradient.png' alt='' /> */}
             <img  className={styles.containerImageTest} src='./hero.png' alt='' />




            </div> 

        </div>
        
    </div>
  )
}

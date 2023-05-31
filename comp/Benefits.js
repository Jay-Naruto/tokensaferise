import React from 'react'
import styles from '../styles/Benefit.module.css'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";
export default function Benefits() {
  return (
    <div id='benefits' className={styles.component} >
         <div className={styles.label} >
      TOKENOMICS
      </div>
    <AnimationOnScroll className={styles.benefitRow}  animateIn="animate__fadeInRight">

        <div className={styles.benefits}>

    <div className={styles.element}>
    
               <div  className={styles.title} >
               Redistribution Mechanism

                </div>
                <div  className={styles.text} >
                1% of each transaction is reflected back to holders, promoting long-term engagement and loyalty within the community.
                </div>
           
    </div>


            </div>

        <div className={styles.benefits}>

            <div className={styles.element}>
    
               <div  className={styles.title} >
               Liquidity Provision

                </div>
                <div  className={styles.text} >
                1% of each transaction is added to the liquidity pool, enhancing the stability and liquidity of the $EVERMOON token.
                </div>
           
    </div>

            </div>

        <div className={styles.benefits}>

        <div className={styles.element}>
    
               <div  className={styles.title} >
               Deflationary
                </div>
                <div  className={styles.text} >
                1% of each transaction is automatically burned, reducing the EverMoon supply forever.
                </div>
           
    </div>

            </div>

     
        </AnimationOnScroll>
        <AnimationOnScroll className={styles.benefitRow} animateIn="animate__fadeInLeft">

        <div className={styles.benefits}>

    
        <div className={styles.element}>
    
               <div  className={styles.title} >
               BuyBacks
                </div>
                <div  className={styles.text} >
                1% of each transaction will be used to buyback the token, and highlight the team's long term vision of EverMoon.
                </div>
           
    </div>

            </div>

        <div className={styles.benefits}>

            <div className={styles.element}>
    
               <div  className={styles.title} >
               Marketing
                </div>
                <div  className={styles.text} >
                1% of each transaction will be used to market the project, and enhance all marketing efforts.
                </div>
           
    </div>

            </div>

        <div style={{visibility:'hidden'}} className={styles.benefits}>

        <div className={styles.element}>
    
               <div  className={styles.title} >
               Innovation:
                </div>
                <div  className={styles.text} >
                Open the door to create new & unique utilities to differentiate & offer unique compelling experiences.
                </div>
           
    </div>

            </div>

     
    </AnimationOnScroll>

    </div>
  )
}

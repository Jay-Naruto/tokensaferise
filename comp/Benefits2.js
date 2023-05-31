import React from 'react'
import styles from '../styles/Benefit.module.css'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";
export default function Benefits2() {
  return (
    <div id='benefits' className={styles.component} >
         <div className={styles.label} >
      TOKEN DASHBOARD
      </div>
    <AnimationOnScroll className={styles.benefitRow}  animateIn="animate__fadeInRight">

        <div className={styles.benefits}>
        {/* <img src='./Group 654.png' alt=''/> */}

    <div className={styles.element}>
    
               <div  className={styles.title} >
               Total Supply

1,000,000,000 $EVERMOON

                </div>
             
           
    </div>


            </div>

        <div className={styles.benefits}>

            <div className={styles.element}>
    
               <div  className={styles.title} >
               Circulating Supply

944,600,655.855 $EVERMOON
                </div>
             
    </div>

            </div>

        <div className={styles.benefits}>

        <div className={styles.element}>
    
               <div  className={styles.title} >
               Buyback Wallet

2.368 ETH
                </div>
              
           
    </div>

            </div>

     
        </AnimationOnScroll>
        <AnimationOnScroll className={styles.benefitRow} animateIn="animate__fadeInLeft">

        <div className={styles.benefits}>

    
        <div className={styles.element}>
    
               <div  className={styles.title} >
               Marketing Wallet

15.73 ETH
                </div>
             
           
    </div>

            </div>

        <div className={styles.benefits}>

            <div className={styles.element}>
    
               <div  className={styles.title} >
               Burned

55,399,344.145 $EVERMOON
                </div>
            
           
    </div>

            </div>

        <div  className={styles.benefits}>

        <div className={styles.element}>
    
               <div  className={styles.title} >
               Reflections To Date

47,730,348.335 $EVERMOON
                </div>
            
           
    </div>

            </div>

     
    </AnimationOnScroll>

    </div>
  )
}

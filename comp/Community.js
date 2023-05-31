import React from 'react'
import styles from '../styles/Benefit.module.css'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";
export default function Community() {
  return (<>
    <div id='benefits' className={styles.component} >
         <div className={styles.label} >
      COMMUNITY
      </div>
    <AnimationOnScroll className={styles.benefitRow}  animateIn="animate__fadeInRight">

     <div className={styles.textComm} >
     Saferise thrives on fostering vibrant community engagement, fostering meaningful connections among its members. Through an array of events, initiatives, challenges, and milestones, we aim to create an environment that encourages active participation and personal growth. Our platform provides a dynamic stage for creators, developers, and innovators to showcase their talents, collaborate on groundbreaking projects, and embark on an exhilarating journey into the limitless world of Web3. Join us at Saferise as we shape a future where endless possibilities await.
     </div>
     
    </AnimationOnScroll>

    </div>
    <div id='benefits' className={styles.component} >
         <div className={styles.label} >
      DIAMOND HAND TAX
      </div>
    <AnimationOnScroll className={styles.benefitRow}  animateIn="animate__fadeInRight">

     <div className={styles.textComm} >
     To incentivize all holders to hold their bags like their lives depend on them, and also add more tokenomics to $EVERMOON, we tax 5% on all transfers, just like buys and sells, with all allocations being identical to the buy and sell taxes.
     </div>
     
    </AnimationOnScroll>

    </div>
    </>
  )
}

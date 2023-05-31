import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import styles from '../styles/Steps.module.css'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";
import $ from 'jquery'
import { useMediaQuery } from '@mui/material';
import { fontSize } from '@mui/system';

export default function Steps() {



  return (
    <div >

    <div id='how-to-use' className={styles.stepsBody} >

      <div className={styles.label} >
      WHY US
      </div>
      <div>
 
      </div>


        <div  className={styles.positions}>

        <div className={styles.cardsBody} >
          <AnimationOnScroll   animateIn="animate__fadeInLeft">

          <div className={styles.steps1}>
               {/* <div  className={styles.number} >
01
               </div> */}
               <div  className={styles.title} >
               Our Vision
                </div>
                <div  className={styles.text} >
                Saferise envisions a future where Web3 communities empower individuals to pursue their passions, exchange knowledge, and collaborate on projects alongside like-minded enthusiasts. Our mission is to dismantle barriers and foster inclusive opportunities, enabling people from diverse backgrounds to access the dynamic world of blockchain technology, irrespective of their expertise level.
                </div>
          </div>
          </AnimationOnScroll>
          <AnimationOnScroll  animateIn="animate__fadeInLeft">
          <div className={styles.steps2}>
               {/* <div  className={styles.number} >
02
               </div> */}
               <div  className={styles.title} >
               Our Mission
                </div>
                <div  className={styles.text} >
                Our mission is to establish an influential Web3 community that unites diverse individuals, fosters creativity, and encourages personal growth. We strive to create an inclusive atmosphere where learning, collaboration, and the collective wisdom of our members thrive, benefiting all.
                </div>
          </div>
          </AnimationOnScroll>



        </div>
        {/* <div className={styles.cardsBody} >
        <AnimationOnScroll  animateIn="animate__fadeInRight">

          <div className={styles.steps3}>
               <div  className={styles.number} >
03
               </div>
               <div  className={styles.title} >
              Community Engagement
                </div>
                <div  className={styles.text} >
                EverMoon values community engagement and encourages meaningful interactions among its members. Through regular events, raids, initiatives, and checkpoints, we aim to engagementg and personal growth. We provide a platform for creators, developers, and innovators to showcase their talents, collaborate on projects, and explore the limitless possibilities of Web3 together.
                </div>
          </div>
          </AnimationOnScroll>

          <AnimationOnScroll  animateIn="animate__fadeInRight">

          <div className={styles.steps4}>
               <div  className={styles.number} >
04
               </div>
               <div  className={styles.title} >
               Join Evermoon Today
                </div>
                <div  className={styles.text} >
                Whether you are an experienced blockchain enthusiast or new to the world of Web3, we welcome you to join EverMoon and become part of our growing community. Together, let's cultivate a space where ideas flourish, connections thrive, and innovation knows no bounds. Join us on this exciting journey and be part of shaping the future of Web3 with EverMoon.
                </div>
          </div>
          </AnimationOnScroll>


        </div> */}
    </div>

    </div>
    </div>


  )
}

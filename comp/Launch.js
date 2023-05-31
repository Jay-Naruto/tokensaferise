import React from 'react'
import styles from '../styles/Launch.module.css'
import { motion } from 'framer-motion'
import { AnimationOnScroll } from 'react-animation-on-scroll'
export default function Launch() {
  return (

    <div id='launch' className={styles.component} >

        {/* <img  className={styles.img} src='./image 1.png' alt=''/> */}

        <div className={styles.body}>

        <div  className={styles.title} >

        Are you ready to List or Buy your first utility?

        </div>

        <div  className={styles.button} >
        <a  target="_blank" href=''>

        <button>DEX Tools</button>

        </a>
        <a target="_blank"  href=''>

        <button>Twitter</button>

        </a>

        </div>


        </div>

    </div>

  )
}

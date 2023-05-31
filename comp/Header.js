import React, { useState } from 'react'
import styles from '../styles/Header.module.css'
import { useMediaQuery } from '@mui/material';

export default function Header() {
    const matches = useMediaQuery('(min-width:1200px)');
    const [click,setClick]=useState(0)
    console.log(click)
  return (
    <div className={styles.body} >
         <img className={styles.img} src='./gradient2.png' alt=''/>

         <div className={styles.logo}>


            <img src='./5.png' alt=''/>
            {/* <img className={styles.arrow} src='./arrowlogo.png' alt=''/> */}

         </div>
         {/* <img className={styles.wave} src='./wave.png' alt=''/> */}

         {
            !matches ?
            <>
             {
                !click ?
                <>
                <img className={styles.menu} onClick={()=>{setClick(1)}} src='./menu.svg' alt=''/>

                </>
                :
                <>
                <img className={styles.menu} onClick={()=>{setClick(0)}} src='./cancek.png' alt=''/>

                </>
             }
             <div className={ click ===1 ? styles.linkMobile : styles.links}>
             <div>
            <a href='#functions'>
 FUNCTIONALITIES

  </a>
            </div>
             <div>
            <a href='#how-to-use'>
  HOW TO USE

  </a>
            </div>
            <div>
            <a href='#why-us'>
WHY US

  </a>
            </div>
            <div>
            <a href='#benefits'>
BENEFITS

  </a>
            </div>
            <div>
            <a href='#launch'>
LAUNCH

  </a>
            </div>
            <div>
            <a target='_blank' href='https://strivenetwork.gitbook.io/strive-network-fnfts/MTVrH2q0wQgmslX775l0/overview/the-background'>
DOCS

  </a>
            </div>
         
         </div>
            </>
            :
            <div className={ styles.links}>
                          <div>
            <a href='#functions'>
FUNCTIONALITIES

  </a>
            </div>
            <div>
            <a href='#how-to-use'>
  HOW TO USE

  </a>
            </div>
            <div>
            <a href='#why-us'>
WHY US

  </a>
            </div>
            <div>
            <a href='#benefits'>
BENEFITS

  </a>
            </div>
            <div>
            <a href='#launch'>
LAUNCH

  </a>
            </div>
            <div>
            <a target='_blank' href='https://strivenetwork.gitbook.io/strive-network-fnfts/MTVrH2q0wQgmslX775l0/overview/the-background'>
DOCS

  </a>
            </div>
         </div>

         }
         
    </div>
  )
}

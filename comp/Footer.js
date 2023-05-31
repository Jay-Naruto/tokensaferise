import React from 'react'
import styles from '../styles/Footer.module.css'

export default function Footer() {
  return (<>
    <div className={styles.component} >
        <div  className={styles.component1} >
                    <img   className={styles.logo} src='./strive.png' alt=''/>

                    {/* <div  className={styles.button} >
                        <button>Start Now</button>
                            </div> */}
                    </div>
<div  className={styles.component2} >
<ul>
<li>
            <a href='#functions'>
 FUNCTIONALITIES

  </a>
            </li>
<li>
  <a href='#how-to-use'>
  HOW TO USE

  </a>
  </li><li>
  <a href='#why-us'>
WHY US

  </a>
    </li><li>
    <a href='#benefits'>
BENEFITS

  </a>
      </li><li>
        
      <a href='#launch'>
LAUNCH

  </a>
      </li>
</ul>
</div>
<div  className={styles.component3} >
  <a target="_blank"  href='https://www.facebook.com/strivenetwork01'>
  <img src='./face.png' alt=''/>

  </a>
  <a  target="_blank" href='https://www.linkedin.com/company/strivenetwork/mycompany/verification/?viewAsMember=true'>
 <img src='./linkd.png' alt=''/>
    
    </a>
    <a target="_blank"  href='https://twitter.com/StrvNetwork'>
 <img src='./twt.png' alt=''/>
    
    </a>
    
</div>

    </div>
    <div className={styles.bottom}>
    <a target="_blank" href="https://docs.google.com/document/d/1QhZlgxe5yoOF_6gVFcFZUXlwRd8OaX3SXliLnTUGW7A/edit">Privacy Policy | </a>
     <a target="_blank"  href="https://docs.google.com/document/d/15oAwoQPC2kjhRo5ucHVlDKyd2W9Q6zzokIRIg0e2em8/edit">Terms & Conditions</a>
    
    </div>
    </>
  )
}

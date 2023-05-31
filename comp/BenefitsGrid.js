import React from 'react'
import styles from '../styles/BenefitsGrid.module.css'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";
import { useMediaQuery } from '@mui/material';

export default function BenefitsGrid() {
  const matches = useMediaQuery('(max-width:1000px)');

  return (
    <div id="functions" className={styles.body} >
        <div  className={styles.title}>
        Functionalities
        </div>
           <div className={styles.container} >
    <AnimationOnScroll  animateIn="animate__fadeInLeft">

{
        matches ?
        <div className={styles.upper} >
                     <div className={styles.imgElements}>
     
     <div className={styles.element2}>
             <img src='./g1.png' alt=''/>
     </div>
     </div>
        <div className={styles.element1}>
                <div  className={styles.element1Title}>
                On-Chain Verification
                </div>
                <div  className={styles.element1Descp}>
                On-chain verifiability for the utilities provides transparency and authenticity, instilling confidence in collectors that the utilities they acquire are legitimate and provide valuable to your NFT Project.

                </div>
        </div>
        <div className={styles.imgElements}>
     
        <div className={styles.element2}>
                <img src='./g2.png' alt=''/>
        </div>
        </div>

        <div className={styles.element3}>
                <div  className={styles.element3Title}>
                Modular Utilities
                </div>
                <div  className={styles.element3Descp}>
                The modular utility of NFTs extends far beyond the realms of art and collectibles. These unique tokens have the potential to transform industries such as gaming, intellectual property, supply chain, real estate, and beyond.
                </div>
        </div>


       </div> 

       :


       <div className={styles.upper} >
       <div className={styles.element1}>
               <div  className={styles.element1Title}>
               On-Chain Verification
               </div>
               <div  className={styles.element1Descp}>
               On-chain verifiability for the utilities provides transparency and authenticity, instilling confidence in collectors that the utilities they acquire are legitimate and provide valuable to your NFT Project.

               </div>
       </div>
       <div className={styles.imgElements}>
       <div className={styles.element2}>
               <img src='./g1.png' alt=''/>
       </div>
       <div className={styles.element2}>
               <img src='./g2.png' alt=''/>
       </div>
       </div>

       <div className={styles.element3}>
               <div  className={styles.element3Title}>
               Modular Utilities
               </div>
               <div  className={styles.element3Descp}>
               The modular utility of NFTs extends far beyond the realms of art and collectibles. These unique tokens have the potential to transform industries such as gaming, intellectual property, supply chain, real estate, and beyond.
               </div>
       </div>


      </div> 
}

      

</AnimationOnScroll>




<AnimationOnScroll  animateIn="animate__fadeInRight">

{
        matches?
        <div className={styles.bottom} >
              <div className={styles.imgElements}>
      
      <div className={styles.element2}>
              <img src='./g3_.png' alt=''/>
      </div>
      </div>
        <div className={styles.element1}>
                <div  className={styles.element1Title}>
                Time-based Expiry
                </div>
                <div  className={styles.element1Descp}>
                Limited editions, dynamic assets, time-locked content, unlockable experiences, royalties, and time-limited events all contribute to the evolving nature and value of NFTs. 
                </div>
        </div>
        <div className={styles.imgElements}>
      
        <div className={styles.element2}>
                <img src='./g4_.png' alt=''/>
        </div>
        </div>
        <div className={styles.element3}>
                <div  className={styles.element3Title}>
                Expand Your Revenue
                </div>
                <div  className={styles.element3Descp}>
                Generate revenue beyond the Initial Mint, Create & distribute utilities as an airdrop or through a primary sale & earn royalties on trading of utilities attached to your NFT project.
              </div>
        </div>


       </div>

       :

       <div className={styles.bottom} >
       <div className={styles.element1}>
               <div  className={styles.element1Title}>
               Time-based Expiry
               </div>
               <div  className={styles.element1Descp}>
               Limited editions, dynamic assets, time-locked content, unlockable experiences, royalties, and time-limited events all contribute to the evolving nature and value of NFTs. 
               </div>
       </div>
       <div className={styles.imgElements}>
       <div className={styles.element2}>
               <img src='./g3_.png' alt=''/>
       </div>
       <div className={styles.element2}>
               <img src='./g4_.png' alt=''/>
       </div>
       </div>
       <div className={styles.element3}>
               <div  className={styles.element3Title}>
               Expand Your Revenue
               </div>
               <div  className={styles.element3Descp}>
               Generate revenue beyond the Initial Mint, Create & distribute utilities as an airdrop or through a primary sale & earn royalties on trading of utilities attached to your NFT project.
             </div>
       </div>


      </div>
}
         
</AnimationOnScroll>

        </div> 
    </div>
  )
}

import Image from 'next/image'
import React from 'react'
import styles from './Launch.module.css'

export default function Launch() {
  return <>
  
      <div className={styles.container}>
      <div className='mt-4 py-5 remove'></div>
        <div className="row pt-5 mt-5 pb-4 media">
          {/* Column 1 */}
          <div className="col-md-5">
            <div className="item">
              <div className={`${styles.color} latest`}>
                LATEST LAUNCHES
              </div>
              <div className={styles.fonts}>
                <p className={styles.colorText}>
                    Marakez builds with purpose. Every project we create comes to life through meticulous attention to detail for our client needs. Here are our latest responses to the market demands.
                </p>
              </div>
              <div className="my-3">
                <button type="button" className={styles.edit}>View all Properties</button>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="col-md-6 px-0 offset-md-1">
            <div className="d-flex">
              {/* Card 1 */}
              <div className={styles.card} >
                <div className={styles.imgContent}>
                <Image src='/campues.jpg' alt='img' width={500} height={500}/>
                <div className={styles.layer}>
                  <div className='district5 p-3' >
                  <span className='text-white'> District 5 </span>
                      <h2 className={styles.campuse}> Campues </h2>
                      <p className={styles.districtp}>  DISTRICT 5 CAMPUS offers an array of area ranges opens a world
                      of opportunities to choose from, with high-efficiency rates and office 
                      spaces that start from 160 sqm up to 690 sqm, ready for delivery within 
                      a year and a half 
                    </p>     
                  </div>
                  </div>
                </div>      
              </div>
              
              {/* Card 2 */}

              <div className={styles.card} >
                  <div className={styles.imgContent}>
                  <Image src='/plateau.jpg' alt='img' className='round' width={500} height={500}/>
                  <div className={styles.layer}>
                      <div className='district5 px-2 pt-5' >
                          <span className='text-white'> District 5 Residences</span>
                          <h2 className={styles.campuse}> Plateau </h2>
                          <p className={styles.districtp}>  DISTRICT 5 CAMPUS offers an array of area ranges opens a world
                          of opportunities to choose from, with high-efficiency rates and office 
                          spaces that start from 160 sqm up to 690 sqm, ready for delivery within 
                          a year and a half                    
                        </p>     
                      </div>
                    </div>
                </div>         
              </div>    
            </div>
          </div>
        </div>
        </div>
      <hr className='mt-5'/>
  </>
}

import Image from 'next/image'
import React from 'react'
import styles from './Business.module.css'
 
export default function Business() {

  return <>
  
  <div className={`${styles.container}`}>
    <div className= {`row ${styles.Business}`}  >
      <div className="col-lg-4 col-md-4 col-sm-12 my-1 text-center">
        <div className="cards">
          <Image
            className='card-img'
            src="/MofTanta.jpg"
            alt='text'
            width={550}
            height={600}
            objectFit="cover"
          />
        </div>
      </div>

      <div className="col-lg-4 col-md-4 col-sm-12 my-1 text-center">
        <div className="cards">
          <Image
            className='card-img'
            src="/west-cairo.jpg"
            alt='text'
            width={550}
            height={580}
            objectFit="cover"
          />
        </div>
      </div>

      <div className="col-lg-4 col-md-4 col-sm-12 my-1 text-center">
        <div className="cards">
          <Image
            className='card-img'
            src="/park.jpg"
            alt='text'
            width={550}
            height={580}
            objectFit="cover"
          />
        </div>
      </div>
      </div>
    </div>

  </>
}

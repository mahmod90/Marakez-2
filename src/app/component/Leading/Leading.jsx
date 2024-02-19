 import React from 'react'
import Image from "next/image";
import  './Leading.css'


 
 export default function Leading() {

  
   return <>
  
    <div className="portfolio">    
        <div className='container'>
          <div className="line-container my-5">
            <span className="text-layer">
              THE LEADING MIXED-USE DEVELOPER IN EGYPT
            </span>
          </div>
          <div className="portfolio-pic">
            <div className="row ParentBox">
              <div className="col-lg-4 col-md-4 col-12 row Media common-box">
                <div className="box-pic mb-4" style={{ borderRadius: "10px" }}>
                  <div className="img-container">
                      <div className="overlay-pic"></div>
                      <Image
                        src="/resedeital.jpg"
                        alt=""
                        width={500}
                        height={500}
                        layout="responsive"
                        className='responsive-image'
                      />
                    </div>
                    <div className="content-container p-4">
                      <h2 style={{fontSize:'25px' , marginBottom:'0'}}>Resedeital</h2>
                      <p style={{fontSize:'16px' , textDecoration:'underline' , cursor:'pointer'}}>Know more</p>
                    </div>
                </div>

                <div className="box-pic mb-4" style={{ borderRadius: "10px" }}>
                  <div className="img-container">
                    <div className="overlay-pic"></div>
                    <Image
                      src="/csr.jpg"
                      alt=""
                      width={500}
                      height={500}
                      layout="responsive"
                      className="responsive-image"
                    />
                  </div>

                  <div className="content-container p-4">
                      <h2 style={{fontSize:'25px' , marginBottom:'0'}}>CSR</h2>
                      <p style={{fontSize:'16px' , textDecoration:'underline' , cursor:'pointer'}}>Know more</p>
                  </div>

                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-6 single-Media common-box">
                <div
                  className="box-pic mb-4"
                  style={{ borderRadius: "10px", height: "96%" }}
                >
                  <div className='img-container' style={{height:'100%'}}>
                    <div className='overlay-pic'></div>
                      <Image
                      src="/Offices.jpg"
                      alt=""
                      width={500}
                      height={800}
                      layout="responsive"
                      className="picEdit "
                      />
                  </div>
                  <div className="content-container p-4">
                      <h2 style={{fontSize:'25px' , marginBottom:'0'}}>Office</h2>
                      <p style={{fontSize:'16px' , textDecoration:'underline' , cursor:'pointer'}}>Know more</p>
                  </div>

                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-12 Media common-box">
                <div className="box-pic mb-4" style={{ borderRadius: "10px" }}>

                <div className='img-container' style={{height:'100%'}}>
                    <div className='overlay-pic'></div>
                      <Image
                      src="/Entertainment.jpg"
                      alt=""
                      width={500}
                      height={800}
                      layout="responsive"
                      className="picEdit"
                      />
                  </div>

                  <div className="content-container p-4">
                      <h2 style={{fontSize:'25px', marginBottom:'0'}}>Entertainment</h2>
                      <p style={{fontSize:'16px' , textDecoration:'underline' , cursor:'pointer'}}>Know more</p>
                  </div>
                </div>
                <div className="box-pic mb-4" style={{ borderRadius: "10px" }}>

                <div className='img-container' style={{height:'100%'}}>
                    <div className='overlay-pic'></div>
                      <Image
                      src="/Retail.jpg"
                      alt=""
                      width={500}
                      height={800}
                      layout="responsive"
                      className="picEdit"
                      />
                </div>
                <div className="content-container p-4">
                      <h2 style={{fontSize:'25px' , marginBottom:'0'}}>Retail</h2>
                      <p style={{fontSize:'16px' , textDecoration:'underline' , cursor:'pointer'}}>Know more</p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
    </div>

   </>
 }
 
'use client'
// Import necessary modules
import React from 'react';
import Slider from 'react-slick';
// import Slider from "react-slick-slider";
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';

// Your functional component
export default function DevMedia() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <button className="slick-prev">Previous</button>,
    nextArrow: <button className="slick-next">Next</button>,
  };

  return (
    
    <>

    <div className='parent-img position-relative mt-2 mx-3'>
      <div className="line-container mt-5 mb-2">
          <span className="text-layer">OUR DEVELOPMENTS</span>
      </div>
         <Slider {...settings}>
        {/* Replace /path/to/image1.jpg, /path/to/image2.jpg, etc., with your actual image paths */}
        <div className=' col-md-3 col-lg-4 gallary position-relative pr-5'>
            <div className="imageContainer position-relative overflow-hidden">
              <div className="overlay-gallary">
                  <p className='layerText'> On the most beautiful of bays,
                    ramla lands on a mesmerizing beach in Ras El Hekma Sahel.
                  </p>
                <Link style={{color:'white'}} href="/dashboard">Know More</Link>
              </div>
              <Image src="/ramla.jpg " alt="Image 1" width={300} height={100} className='rounded w-100  p-2' />     
              </div>   
                <div className='text-center'>
                    <p className='gallaryText'>North Coast </p>
                    <p className='gText'>Residential</p>
                </div> 
            </div>
            <div className=' col-md-3 col-lg-4 gallary position-relative pr-5'>
              <div className="imageContainer position-relative overflow-hidden">
                <div className="overlay-gallary">
                    {/* <p className='layerText'> How to take matters to new heights is the question we answered 
                    with the first high-residential buildings in West Cairo. 20 floors of high-end & fully serviced
                    apartments/penthouses with the extravagant skyline of Cairo as their view. If shooting for the
                      stars is ambitious, then living above the stars is Aeon.
                    </p> */}
                  <Link style={{color:'white'}} href="/dashboard">Know More</Link>
                </div>
                <Image src="/Aeon.jpg " alt="Image 1" width={300} height={100} className='rounded w-100  p-2' />     
                </div>   
                  <div className='text-center'>
                      <p className='gallaryText'> West Cairo </p>
                      <p className='gText'>Residential</p>
                  </div> 
            </div>
            <div className='col-md-3 col-lg-4 gallary position-relative pr-5'>
              <div className="imageContainer position-relative overflow-hidden">
                <div className="overlay-gallary">
                    {/* <p className='layerText'> This is one of our evolved concepts. 
                    The answer to a simple question How to blend and get the best out 
                    of two opposite styles, Urban & Suburban’.
                    District 5 is a one-of-a-kind project that gives you urban vitality
                      with a unique shopping experience / entertainment at D5M, Club5,
                      and offices that bring life to work with District 5 work.
                    </p> */}
                    <Link style={{color:'white'}} href="/dashboard">Know More</Link>
                </div>
                    <Image src="/District5.jpg" alt="Image 1" width={300} height={100} className='rounded w-100  p-2' />     
                </div>   
                  <div className='text-center'>
                      <p className='gallaryText'>North Coast </p>
                      <p className='gText'>Residential</p>
                  </div> 
            </div>
            <div className='col-md-3 col-lg-4  gallary position-relative pr-5'>
              <div className="imageContainer position-relative overflow-hidden">
                <div className="overlay-gallary">
                    <p className='layerText'> On the most beautiful of bays,
                      ramla lands on a mesmerizing beach in Ras El Hekma Sahel.
                    </p>
                    <Link style={{color:'white'}} href="/dashboard">Know More</Link>
                </div>
                <Image src="/Mmansoura.jpg " alt="Image 1" width={300} height={100} className='rounded w-100  p-2' />     
                </div>   
                  <div className='text-center'>
                      <p className='gallaryText'> New Cairo </p>
                      <p className='gText'>Residential Offices Commerical </p>
                  </div> 
            </div>
            <div className='col-md-3 col-lg-4  gallary position-relative pr-5'>
              <div className="imageContainer position-relative overflow-hidden">
                <div className="overlay-gallary">
                    <p className='layerText'> On the most beautiful of bays,
                      ramla lands on a mesmerizing beach in Ras El Hekma Sahel.
                    </p>
                  <Link style={{color:'white'}} href="/dashboard">Know More</Link>
                </div>
                <Image src="/town-center.jpg" alt="Image 1" width={300} height={100} className='rounded w-100  p-2' />     
                </div>   
                  <div className='text-center'>
                      <p className='gallaryText'> New Cairo </p>
                      <p className='gText'>Commercial</p>
                  </div> 
            </div>
            <div className='col-md-3 col-lg-4  gallary position-relative pr-5'>
              <div className="imageContainer position-relative overflow-hidden">
                <div className="overlay-gallary">
                    <p className='layerText'> On the most beautiful of bays,
                      ramla lands on a mesmerizing beach in Ras El Hekma Sahel.
                    </p>
                  <Link style={{color:'white'}} href="/dashboard">Know More</Link>
                </div>
                <Image src="/District5.jpg" alt="Image 1" width={300} height={100} className='rounded w-100  p-2' />     
                </div>   
                    <div className='text-center'>
                      <p className='gallaryText'>West Cairo</p>
                      {/* <p className='gText'>  How to take matters to new heights
                      is the question we answered with the first high-residential
                        buildings in West Cairo. 20 floors of high-end & fully serviced
                        apartments/penthouses with the extravagant skyline of Cairo as their view. 
                        If shooting for the stars is ambitious,
                      then living above the stars is Aeon.</p> */}
                    </div> 
            </div>
            <div className='col-md-3 col-lg-4  gallary position-relative pr-5'>
              <div className="imageContainer position-relative overflow-hidden">
                <div className="overlay-gallary">
                    <p className='layerText'> On the most beautiful of bays,
                      ramla lands on a mesmerizing beach in Ras El Hekma Sahel.
                    </p>
                  <Link style={{color:'white'}} href="/dashboard">Know More</Link>
                </div>
                <Image src="/district-5.jpg" alt="Image 1" width={300} height={100} className='rounded w-100  p-2' />     
                </div>   
                  <div className='text-center'>
                      <p className='gallaryText'>New Cairo </p>
                      <p className='gText'>Commercial</p>
                  </div> 
            </div>
            <div className='col-md-3 col-lg-4  gallary position-relative pr-5'>
              <div className="imageContainer position-relative overflow-hidden">
                <div className="overlay-gallary">
                    <p className='layerText'> On the most beautiful of bays,
                      ramla lands on a mesmerizing beach in Ras El Hekma Sahel.
                    </p>
                  <Link style={{color:'white'}} href="/dashboard">Know More</Link>
                </div>
                <Image src="/dbm.jpg" alt="Image 1" width={300} height={100} className='rounded w-100  p-2' />     
                </div>   
                  <div className='text-center'>
                      <p className='gallaryText'>North Coast </p>
                      <p className='gText'>Residential</p>
                  </div> 
            </div>
      </Slider>
    </div>
    </>
  );
}
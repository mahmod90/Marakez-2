'use client'
 
import Image from 'next/image';
import { FaFacebook , FaYoutubeSquare , FaInstagramSquare , FaLinkedin} from 'react-icons/fa';
import styles from './Navbar.module.css'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons';


const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <>
    
    <nav className={styles.navSection}>
      <hr className='m-0'/>
      <div className="flex justify-end items-center" style={{borde:'1px solid #d0d0d0', height:'35px'}}>
          <div className="flex items-center pl-8">
            <i className="text-2xl fas fa-campground"></i>
          </div>

            <div className="hidden md:flex">
              <ul className="hidden md:flex mb-0">     
                <li className={styles.contact}>
      
                  <a href="#" className=" pt-3 text-decoration-none  " style={{ fontSize: '12px', color: '#6d7888' }}>
                    Contact Us
                  </a>
                  <span className={styles.verticalLine}></span>
                </li>
                  <div className="dropdown">
                      <button className="btn dropdown-toggle" style={{fontSize:'11px' , color:'#6d7888'}} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        About us
                      </button>
                      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                      </ul>
                      <span className={styles.verticalLine}></span>
                  </div>       
                    <li className="text-lg">
                      <a href="#" className="text-decoration-none transition duration-300 focus:outline-none focus:underline hover:underline" style={{paddingRight:'10px' ,color:'#6d7888', textUnderlineOffset: '8px' , fontSize:'12px' }}>
                        Home
                        </a>
                    </li>
                </ul>
            </div>
              <div className="hidden md:flex fs-5 mr-3">
                <div className='pr-1'> <FaLinkedin /></div>
                <div className='pr-1'><FaFacebook/></div>  
                <div className='pr-1'> <FaInstagramSquare /></div>
                <div className='pr-1'><FaYoutubeSquare/></div> 
              </div>
        </div>

       <hr className='m-0'/>
    
        {/* SECOND NAVBAR */}

        <nav className="p-1 mr-3 bg-white-800 text-black-200">
          <div className="flex justify-between items-center pt-3">
            <div className="flex items-center pl-8">
              <i className="text-2xl fas fa-campground"></i>
              <h1 className="font-serif tracking-wide text-[#21275b] text-xl pl-2" >Retail</h1>
              <h1 className="font-serif tracking-wide text-[#21275b] text-xl pl-3">Residential</h1>
              <h1 className="font-serif tracking-wide text-[#21275b] text-xl pl-3">Office</h1>
              <h1 className="font-serif tracking-wide text-[#21275b] text-xl pl-3">What We Do</h1>
              <h1 className="font-serif tracking-wide text-[#21275b] text-xl pl-3">Latest Update</h1>
            </div>
            <div className="hidden md:flex">
              <ul className="hidden md:flex">
                <li className="text-lg pr-8">
                  <a href="#"   style={{ textUnderlineOffset: '8px' }}>
                  <Image src='/marakezLogo.svg' width={200} height={100} alt=''/>
                    </a>
                </li>            
              </ul>
            </div>
            <div className="hidden md:flex">
              <button type="button" className="btn mr-2  fw-bold" style={{backgroundColor:'#21275b' , color:'white' , fontSize:'13px', padding: '8px 42px' ,borderRadius:'20px' }}>Start Video Call</button>
              <button type="button" className="btn  fw-bold"  style={{backgroundColor:'#21275b' , color:'white' , fontSize:'13px', padding: '8px 42px' ,borderRadius:'20px' }} >Choose Your Unit</button>
            </div>
        </div>

      </nav>
        <main className={styles.SideNav}>
          <Image src="/default-call.svg" width={25} height={25} alt="call-icon" className="pt-3" />
          <a href="mailto:info@marakez.net" target="_blank" rel="noreferrer">
            <Image src="/default-envelope.svg" width={25} height={25} alt="envelope-icon" className="pt-4" />
          </a>
          <a href="https://wa.me/201554972147?text=Hey%20Marakez" target="_blank" rel="noreferrer">
            <Image src="/default-whatsapp.svg" width={25} height={25} alt="whatsapp-icon" className="pt-4" />
          </a>
        </main>
      </nav>

    
    </>
  );
};

export default NavBar;



// 'use client'
// import Link from 'next/link'
import React from "react";
import styles from './Footer.module.css';
import { FaYoutube , FaTwitter , FaInstagram ,FaFacebook } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";



export default function Footer() {

  return (
    <>
       <div className={styles.Footer}>
          <div className={styles.container}>
            <div className="row py-4">
              <div className="col-md-2 col-sm-6 my-2">
                <div className={styles.head}>
                  NAVIGATE
                </div>
                <div className={styles.dash}>
                  Home
                </div>
                <div className={styles.dash}>
                  Our Communities
                </div>
                <div className={styles.dash}>
                  Latest Launches
                </div>
                <div className={styles.dash}>
                  Latest Updates
                </div>
              </div>

              <div className="col-md-2 col-sm-6 my-2">
                <div className={styles.head}>
                  ABOUT
                </div>
                <div className={styles.dash}>
                  What We Do
                </div>
                <div className={styles.dash}>
                  Management Team
                </div>
              </div>

              <div className="col-md-2 col-sm-6 my-2">
                <div className={styles.head}>
                  SUPPORT
                </div>
                <div className={styles.dash}>
                  Contact us
                </div>
                <div className={styles.dash}>
                  Careers
                </div>
                <div className={styles.dash}>
                  Privacy policy
                </div>
              </div>

              <div className="col-md-4 offset-md-2 my-2">
                <div className="item">
                  <div className={styles.newsletter}>
                    NEWSLETTER
                  </div>
                  <div className={styles.join}>
                    Join our mailing list to receive monthly news and updates about our developments
                  </div>
                  <div className="d-flex justify-content-between my-2">
                    <input
                      type="text"
                      className="px-2 w-100 py-1 rounded"
                      style={{ border: '1px solid #dfdcdc' }}
                      placeholder="Your Email"
                      id="email"
                      value=""
                    />
                    <button
                      type="button"
                      className="px-3 py-1 rounded"
                      style={{
                        backgroundColor: '#21275b',
                        color: 'white',
                        width: '30%',
                        fontSize: '11px',
                        borderStartEndRadius: '10px',
                        borderEndEndRadius: '10px'
                      }}
                    >
                      SIGN UP
                    </button>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
        <hr style={{ marginBottom: '0' }} />
        <div className={`${styles.container} py-2 d-flex justify-content-between align-items-center`}  >
            <div>
              <span className={styles.follow}>COPYRIGHT 2022. MARAKEZ</span>
            </div>
            <div className="imgeContent">
              <Image src='/marakez-logo.svg' width={85} height={100} alt="" />
            </div>
          <div>
            <div className="social">
              <span className={styles.follow}>FOLLOW US ON</span>
                <ul className={styles.Smedia}>
                    <li>
                      <Link className={styles.linksStyle} href="https://www.facebook.com/MarakezEgypt">FACEBOOK</Link>
                    </li>
                    <li>
                      <Link className={styles.linksStyle} href="https://www.youtube.com/channel/UCToMZxXR9eoYshDAgY_AENAt">YOUTUBE</Link>
                    </li>
                    <li>
                      <Link className={styles.linksStyle} href="https://www.instagram.com/marakezegypt/">INSTAGRAM</Link>
                    </li>
                </ul>
            </div>
          </div>
        </div>

    </>
  );
}


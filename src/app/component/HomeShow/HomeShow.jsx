'use client'
import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import styles from './HomeShow.module.css'
import HomeVideo from './../HomeVideo/HomeVideo';



const HomeShow = () => {

  const [isShown , setIsShow ] = useState(false)
  const [Shown , setIsShown ] = useState(false)
  const [ShowButton , setIsShownButton ] = useState(false)

  const handelClick = event => {

    setIsShow(current => !current)

  }
  
  const handelClickButton = event => {

    setIsShown(current => !current)

  }
  const handelClick2 = event => {

    setIsShownButton(current => !current)

  }


  return <>
        <div className="main">
          <div className="video position-relative" >
            <HomeVideo/>
               <div className='child position-absolute w-70' style={{width:'70%' , borderRadius:'10px'}}>
                  <div className="d-flex text-start align-items-center pt-4 pb-4 w-100">
                    <div style={{width: '20%' , textAlign: 'center'}}>
                          <button onClick={handelClick} className={styles.editH} id="btnGroupDrop1" type="button" class="btn border-0" data-bs-toggle="dropdown" aria-expanded="false">
                             Destination
                             <p className='text-center' style={{color:'#484848' , fontSize:'13px' }}>ANY</p>
                          </button>                     
                    </div>
                      <div style={{width: '20%'}}>
                          <div className="inner text-center">
                            <div class="btn-group" role="group">
                              <button onClick={handelClickButton} className={styles.editH} id="btnGroupDrop1" type="button" class="btn border-0" data-bs-toggle="dropdown" aria-expanded="false">
                                Type of unit
                                <p className='text-center' style={{color:'#484848' , fontSize:'13px' }}>ANY</p>
                              </button>
                            </div>
                          </div>
                          <div className={styles.liner}></div>
                      </div>   
                    <div style={{width: '20%'}}>
                      <div className="inner text-center">
                        <div className="btn-group" role="group">
                              <button onClick={handelClick2} className={styles.editH} id="btnGroupDrop1" type="button" class="btn border-0" data-bs-toggle="dropdown" aria-expanded="false">
                                Projects
                                <p className='text-center' style={{color:'#484848' , fontSize:'13px' }}>ANY</p>
                              </button>
                        </div>
                      </div>
                      <div className={styles.liner}></div>
                    </div>   
                    <div style={{width: '20%'}}>
                      <div className="inner text-center">
                        <div className="btn-group" role="group">
                              <button onClick={handelClick} className={styles.editH} id="btnGroupDrop1" type="button" class="btn border-0" data-bs-toggle="dropdown" aria-expanded="false">
                                Price Range
                                <p className='text-center' style={{color:'#484848' , fontSize:'13px' }}>ANY</p>
                              </button>
                        </div>
  
                      </div>
                      <div className={styles.liner}></div>
                    </div>
                    <div className="pr-2">
                      <button type="button" className="d-flex btn" style={{backgroundColor:'#21275b' , color:'white' , padding:'20px'}}><span style={{padding:'8px 4px 3px 3px'}} ><FaSearch /></span> <span>Search properties</span></button>
                  </div>
                </div>
                      {isShown && (
                      
                          <div className='d-flex justify-around px-3' style={{backgroundColor:'#f5f5f5'}} >
                              <div class="form-check d-flex flex-md-column" style={{alignItems:'center'}}>
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label class="form-check-label" for="flexCheckDefault" style={{Color:'#484848'}}>
                                  North Coast
                                </label>
                              </div>
                              <div class="form-check d-flex flex-md-column" style={{alignItems:'center'}}>
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label class="form-check-label" for="flexCheckDefault">
                                  New Cairo
                                </label>
                              </div>
                                <div class="form-check d-flex flex-md-column" style={{alignItems:'center'}}>
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label class="form-check-label" for="flexCheckDefault">
                                  West Cairo
                                </label>
                              </div>
                                    
                          </div>
                        )}

                      {Shown && (
                    
                          <div className='d-flex justify-around px-3' style={{backgroundColor:'#f5f5f5'}} >
                              <div class="form-check d-flex flex-md-column" style={{alignItems:'center'}}>
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label class="form-check-label" for="flexCheckDefault" style={{Color:'#484848'}}>
                                  Residential
                                </label>
                              </div>
                              <div class="form-check d-flex flex-md-column" style={{alignItems:'center'}}>
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label class="form-check-label" for="flexCheckDefault">
                                  Offices
                                </label>
                              </div>
                                <div class="form-check d-flex flex-md-column" style={{alignItems:'center'}}>
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label class="form-check-label" for="flexCheckDefault">
                                  Medical
                                </label>
                              </div>                           
                          </div>
                      )}

                      {ShowButton && (
                    
                          <div className='d-flex justify-around px-3' style={{backgroundColor:'#f5f5f5'}} >
                              <div class="form-check d-flex flex-md-column" style={{alignItems:'center'}}>
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label class="form-check-label" for="flexCheckDefault" style={{Color:'#484848'}}>
                                  Ramla
                                </label>
                              </div>
                              <div class="form-check d-flex flex-md-column" style={{alignItems:'center'}}>
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label class="form-check-label" for="flexCheckDefault">
                                   District-5 residences
                                </label>
                              </div>
                                <div class="form-check d-flex flex-md-column" style={{alignItems:'center'}}>
                                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                  <label class="form-check-label" for="flexCheckDefault">
                                  Aeon
                                  </label>
                              </div>                           
                                <div class="form-check d-flex flex-md-column" style={{alignItems:'center'}}>
                                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                  <label class="form-check-label" for="flexCheckDefault">
                                    District-5 Work
                                  </label>
                              </div>                           
                          </div>
                      )}
              </div>
              
          </div>
        </div>
  </>
}

export default HomeShow
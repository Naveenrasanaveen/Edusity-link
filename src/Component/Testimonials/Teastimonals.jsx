import React, { useRef } from 'react'
import './Teastimonals.css'
import next_icons from '../../assets/next-icon.png'
import back_icons from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'




const Teastimonals = () => {
  const silder =useRef()
  let tx=0

   const sildeForward=()=>{
         if(tx>-50){
          tx -=25
         }
         silder.current.style.transform=`translateX(${tx}%)`
   }

   const sildeBackward=()=>{

    if(tx <0){
      tx +=25
     }
     silder.current.style.transform=`translateX(${tx}%)`
    
   }



  return (
    <div className='testimonials'>

      <img src={next_icons} alt="" className='next-btn'  onClick={sildeForward}/>
      <img src={back_icons} alt="" className='back-btn' onClick={sildeBackward} />
      <div className="silder">
        <ul ref={silder}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>William jackson</h3>
                  <span>Edustity ,USA</span>
                </div>


              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde tempore voluptatum repudiandae, dolores explicabo illum dignissimos sapiente quas qui quia.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Justbien Brebeer</h3>
                  <span>Romen ,USA</span>
                </div>

              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde tempore voluptatum repudiandae, dolores explicabo illum dignissimos sapiente quas qui quia.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Willsmith</h3>
                  <span>Spain ,USA</span>
                </div>

              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde tempore voluptatum repudiandae, dolores explicabo illum dignissimos sapiente quas qui quia.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Preeven sandy</h3>
                  <span>Veloimn,ASA</span>
                </div>

              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde tempore voluptatum repudiandae, dolores explicabo illum dignissimos sapiente quas qui quia.
              </p>
            </div>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default Teastimonals
import React from 'react'
import { useState } from 'react'
import intro from 'D:/NMy portofolio/mpf/src/Images/Picsart_23-09-01_03-43-42-438.jpg'
import projimg from 'D:/NMy portofolio/mpf/src/Images/Picsart_23-09-01_16-22-18-095.jpg'
import skillimg from 'D:/NMy portofolio/mpf/src/Images/Picsart_23-09-02_02-19-11-790.jpg'
import courseimg from 'D:/NMy portofolio/mpf/src/Images/Picsart_23-09-01_16-18-46-238.jpg'
import Dmrcmp from './Dmrcmp'
import Dmlfcmp from './Dmlfcmp';
import Dmlfccmp from './Dmlfccmp'
export default function Design() {
    const [projshow,setProjshow]=useState(false);
    const [skillshow,setSkilljshow]=useState(false);
    const [courseshow,setCourseshow]=useState(false);
    return (
        
       <div className='digital'>
         {window.scrollTo(0,0)}
        <img className='dintro' src={intro}/>
 
        <div className='dcontainer'>
      <Dmlfcmp imgd={projimg} /> 
      <Dmrcmp imgd={skillimg} /> 
      <Dmlfccmp imgd={courseimg} /> 
        </div>
       </div>
        
    )
}

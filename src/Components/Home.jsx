import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import introimg from 'D:/NMy portofolio/mpf/src/Images/HEAG.jpeg'
import sumimg from 'D:/NMy portofolio/mpf/src/Images/HM.jpg'
import thinking from 'D:/NMy portofolio/mpf/src/Images/TH.png'
import project from 'D:/NMy portofolio/mpf/src/Images/HPR.jpeg'
import educ from 'D:/NMy portofolio/mpf/src/Images/HCM.jpeg'
import skill from 'D:/NMy portofolio/mpf/src/Images/HCO.jpeg'
import cont from 'D:/NMy portofolio/mpf/src/Images/HSK.jpeg'
import cv from 'D:/NMy portofolio/mpf/src/Images/CV.png'
import Lfcmp from './Lfcmp';
export default function Home() {
    

    return (
        
      <div className='home'>
         {window.scrollTo(0,0)}
        <img src={introimg} className='homeimg1'/>
        <TypeAnimation
        sequence={[
          `It's Mohamed Khaled speaking!  Don't forget to enjoy your time in my website.`,
          1000,
          "",
        ]}
        speed={50}
        style={{ whiteSpace: 'pre-line', fontSize: '2em', color: 'rgb(226, 215, 64)',fontWeight:'Bolder'
        ,marginBottom:'12vh',marginLeft:'7.5vw' }}
        repeat={Infinity}
      />
      <div className='intro'>
    <div className='subintro'>
      <h3 className='subintrotitle'>Self Introduction</h3>
      <p className='subintrop'>My name is Mohamed Khaled. I am 21 years old. I live in Giza. I am studying now at Cairo university faculty of engineering.
        My major is Electronics and Electrical Communications. I am interested in Digital IC design, scientific research and further more.
        For more details don't hesitate to explore my website.
      </p>
      
    </div>
    <img src={sumimg} className='introimg'/></div>

    <div className='postintro'>
      <div className='subpostintro'>
   <h3>What can you find here?</h3>
   <img src={thinking}/></div>
   <Lfcmp title={'Education'} para={'My educational Phases are available for those who are interested. Also most of Courses I have taken are present with a brief describtion for each. '} img={educ}/>
   <Lfcmp title={'Projects'} para={'You can find easily most of the projects I worked in. They are mostly related to Digital Electronics, Embedded Systems and Web Development. \nFor those who are interested, links of many of these projects on github are found in their specified place and can be easily viewed...by just few clicks.'} img={project}/>
   <Lfcmp title={'Skills'} para={'Skills gained throughout the journey are added to be explored. They vary between technical and non-technical skills. On each page, you will find the skills related to the page topic; in order to be well organised among the website.'}img={skill}/>
   <Lfcmp title={'Contact Info.'}para={'My email, social media accounts links are available also. Provided any questions or queries are present you can easily message me through one of the available means. '} img={cont}/>
   <Lfcmp title={'CV'} para={"Eventually, my CV link is added to the website to be available for anyone who became interested while surfing through the pages or already is. You can easily access it through the added link. " } img={cv}/>
    </div>
    




      </div>
    
    )
}

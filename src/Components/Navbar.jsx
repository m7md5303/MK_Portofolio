import React from 'react'
import Nav from './Nav'
import myphoto from 'D:/NMy portofolio/mpf/src/Images/IMG_20230323_212541.jpg'
import home from 'D:/NMy portofolio/mpf/src/Images/computer-icons-house-blue-technology-0a0b4bf9169418b2d715b685b61e3cc3.png'
import research from 'D:/NMy portofolio/mpf/src/Images/pngwing.com (3).png'
import ddesign from 'D:/NMy portofolio/mpf/src/Images/1579976.jpg'
import web from 'D:/NMy portofolio/mpf/src/Images/pngwing.com (w1).png'
import about from 'D:/NMy portofolio/mpf/src/Images/PngItem_3406810.png'
import emb from 'D:/NMy portofolio/mpf/src/Images/robowar-robot-human-head-face-clip-art-robot-53f8f7607749fd7c5c7491948fe0c336.png'
export default function Navbar(props) {
    

    return (
        <div className='mnavbar'>
        <img src={myphoto} className='mynavphoto'/>
        <ul className='navbar'>
        
<li><Nav linka={'/'} title={'Home'} src={home}/></li>
<li><Nav linka={'/DigitalElectronics'} title={'Digital Electronics'} src={ddesign}/></li>
<li><Nav linka={'/EmbeddedSystems'} title={'Embedded Systems'} src={emb}/></li>
<li><Nav linka={'/WebDevelopment'} title={'Web Development'} src={web}/></li>
<li><Nav linka={'/ScientificResearch'} title={'Scientific Research'} src={research}/></li>
<li><Nav linka={'/about'} title={'About'} src={about}/></li>
       </ul></div>
    )
}

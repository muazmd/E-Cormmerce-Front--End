import React from 'react'
import './carousel.scss'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import Typewriter from "typewriter-effect"
import img1 from '../../images/img1.jpeg'
import img2 from '../../images/img2.jpeg'
import img3 from '../../images/img3.jpeg'
import img4 from '../../images/img4.jpeg'
import img5 from '../../images/img5.jpeg'
;



const imgs= [img1,img2, img4,img3,img5];
export const CarouselSilder = () => {

    return(
        <div className="Background">
<Carousel showArrows={false} autoPlay={true} infiniteLoop={true} interval={3000} showStatus={false} showThumbs={false} className="carousel" >
                   
                   {imgs.map(img => {

                       return(
                           <div>
                               <img src={img} alt=''/>
                               
                           </div>
                           )
                        }
                    
                    )}      
            </Carousel>
         

            {/* <Typewriter 
     options={{
      
      autoStart: true,
      loop: true,
   
      
    }}

onInit={(typewriter)=> {

typewriter


.typeString("MAPS ")


.pauseFor(500)
.typeString("Lorem Ipsum is simply dummy text ")
.deleteChars(33)
.pauseFor(20)
.typeString("Lorem Ipsum has been the industrys")
.start();

}}

/> */}
        </div>
    )
}

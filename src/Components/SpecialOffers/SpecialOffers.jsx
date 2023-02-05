import React from 'react'
import { Carousel } from 'react-responsive-carousel';

import { SpecialItem } from '../SpecialItem/SpecialItem';
// import img1 from '../../images/img1.jpeg'
import img2 from '../../images/img2.jpeg'
import img3 from '../../images/img3.jpeg'
import img4 from '../../images/img4.jpeg'

// import img5 from '../../images/img5.jpeg'
import './specialOffer.scss'

export const SpecialOffers = () => {
    return (
        <div className="specialOffers">
            <Carousel showArrows={true} autoPlay={true} infiniteLoop={true} showThumbs={false} interval={2000}   >

           

        
               <SpecialItem title='Suit' img={img2} price='90' oldprice='120'/>
               <SpecialItem title='Watch' img={img4} price='50' oldprice='70'/>
               <SpecialItem title='Jacket' img={img3} price='100' oldprice='120'/>
               <SpecialItem title='Suit' img={img2} price='90' oldprice='120'/>
               <SpecialItem title='Watch' img={img4} price='50' oldprice='70'/>
               <SpecialItem title='Jacket' img={img3} price='100' oldprice='120'/> 
               <SpecialItem title='Suit' img={img2} price='90' oldprice='120'/>
               <SpecialItem title='Watch' img={img4} price='50' oldprice='70'/>
               <SpecialItem title='Jacket' img={img3} price='100' oldprice='120'/>

             
         


            </Carousel>

            
        </div>
    )
}

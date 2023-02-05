 import React, { useState } from 'react'
import './itemCard.scss'

import InfoIcon from '@material-ui/icons/Info';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Popup from '../Popup/Popup';
import { Button} from '@material-ui/core';

export const ItemCard = ({title, desc, price,img,oldPrice}) => {
    const [open , setOpen] = useState(false);
    const handlepopup=() =>{
            setOpen(!open);
    }
    return (
        <>
        <div className="itemCard" >
        <div className="itemCard-top">
            <img src={img} alt='' />
            <div className="itemCard-top-Icons"> 
            <InfoIcon className="icons" onClick={handlepopup} />
            <ShoppingCartIcon className="icons" />

            </div>
            </div>   


        <div className="itemCard-bottom" >
            <span className="itemCard-Title">{title}</span>
            <div className="itemCard-prices">
                <span className="itemCard-price">{price} $</span>
                {oldPrice && 
                <span className="itemCard-oldPrice"> {oldPrice} $</span> 
                }
                </div>
            
            
            </div>      
        </div>
            {open && <Popup
      content={
      
      <div className="itemCard-popup" >
            
            <div className="itemCard-top-popup">
            <img src={img} alt='' />
            <div className="itemCard-btns">

            <Button  className="btn">Buy now</Button>
            <Button  className="btn red">Add to cart</Button>
            </div>



          
            </div>  
            
             
        <div className="itemCard-bottom-popup" >
            <span className="itemCard-Title-popup">{title}</span>
            <span className="itemCard-desc-popup"> {desc}
</span>
            <div className="itemCard-prices-popup">
                <span className="itemCard-price-popup">{price} $</span>
                {oldPrice ? <span className="itemCard-oldPrice-popup"> {oldPrice} $</span> : console.log(oldPrice)}
                
                
                
       
     </div>
            
            
            </div>  
      </div>}

      handleClose={handlepopup}
    />}   

    </>
    )
}

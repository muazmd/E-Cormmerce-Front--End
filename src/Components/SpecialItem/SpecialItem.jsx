import React, { useState } from 'react';
import './specialItem.scss';

import {Button} from '@material-ui/core';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart'; 
export const SpecialItem = ( {title, price, oldprice, img}) => {
const [counter, setCounter] = useState(1);



    return (
        <div className="container">

        <div className="specialItem">
            
            <div className="specialItem-Right">
                <img className="img" src={img} alt=""/>
            </div>

            <div className="specialItem-Left">
                    <span className="specialItem-desc-Title"> {title}</span>
                <div className="specialItem-Left-desc">
                    
                        <span className="specialItem-desc-Price"> {price} $</span>
                        <span className="specialItem-desc-OldPrice"> {oldprice} $</span>
                        
                </div>
                <div className="specialItem-counter">
                    <span className="specialItem-counter-left" onClick={()=>{
                        counter!==1 ? setCounter(counter-1) : setCounter(1)
                        }}>-</span>
                    <span>{counter}</span>
                    <span className="specialItem-counter-right" onClick={()=>setCounter(counter+1)}>+</span> </div>

                <div className="specialItem-btns">
                    <Button className="btn">Buy Now  </Button>
                    <Button className="btn red">Add to cart <AddShoppingCart className="btn-icon"/> </Button>
                    <span className="specialItem-det">View full details <ArrowRightAltIcon className='icon' /> </span>
                </div>

            </div>

            
        </div>
        </div>
    )
}

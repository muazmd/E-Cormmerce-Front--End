import React from 'react'
import './categoriesCard.scss'
import img4 from '../../images/img2.jpeg';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
export const CategoriesCard = ({title, cat, img}) => {

   
    // console.log(history);
    return (
        <div className="categoriesCard">
            <Link to='/items' className="Link">
            <div className="categoriesCard-container">

            <img src={img} alt='' className="categoriesCardImg"/>
            <Button className="categoriesCardButton">Show more</Button>
            </div>
            <span className="categoriesCardTitel">{title} <ArrowRightAltIcon className="categoriesCardTitel-Icon" /></span>
             </Link>
        </div>
    )
}

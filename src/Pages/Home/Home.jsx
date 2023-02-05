import React from 'react'
import { CarouselSilder } from '../../Components/carousel/Carousel'
import { CategoriesCard } from '../../Components/CategoriesCard/CategoriesCard'
import { ItemCard } from '../../Components/ItemCard/ItemCard'
import  NavBar from '../../Components/NavBar/NavBar'
import './Home.scss'
import img1 from '../../images/img1.jpeg'
import img2 from '../../images/img2.jpeg'
import img3 from '../../images/img3.jpeg'
import img4 from '../../images/img4.jpeg'
// import { SpecialItem } from '../../Components/SpecialItem/SpecialItem'
import { SpecialOffers } from '../../Components/SpecialOffers/SpecialOffers'
import { Email } from '../../Components/Email/Email'
import { Footer } from '../../Components/footer/Footer'


 const Home = () => {
    return (
        <div className='Home'>
            <div>

            <NavBar/>
            <CarouselSilder/>
            </div>
        <div className="categories">

            

            <CategoriesCard title='watches' cat='men' img={img4}/>
            <CategoriesCard title='Men clothes'cat='men' img={img3}/>
            <CategoriesCard title='suites'cat='classic' img={img2}/>
            <CategoriesCard title='watches' cat='men' img={img4}/>
        </div>

        <div className="itemCards">
            <h1 >Find your need here</h1>
            <div className="ItemCard-card">


            <ItemCard  title='Watch' img={img1} price='160.0'  desc='Lorem Ipsum is simply dummy text of 
            the printing and typesetting industry. ' />

             <ItemCard title='Suit' img={img2} price='250.0' oldPrice='400.0' desc='Lorem Ipsum is simply dummy text of 
            the printing and typesetting industry. Lorem Ipsum has been the industrys 
            standard dummy text ever since the 1500s, when an unknown printer took a 
            galley of type and scrambled it to make a type specimen book. ' />

            <ItemCard title='Jacket' img={img3} price='90.0' oldPrice='120.0' desc='Lorem Ipsum is simply dummy text of 
            the printing and typesetting industry. Lorem Ipsum has been the industrys 
            standard dummy text ever since the 1500s, when an unknown printer took a 
            galley of type and scrambled it to make a type specimen book. ' />

            <ItemCard title='New Watch' img={img4} price='200.0' oldPrice='250.0' desc='Lorem Ipsum is simply dummy text of 
            the printing and typesetting industry. Lorem Ipsum has been the industrys 
            standard dummy text ever since the 1500s, when an unknown printer took a 
            galley of type and scrambled it to make a type specimen book. ' />

            </div>
            

        <SpecialOffers />

        <Email />
        <Footer />
        </div > 

        
        </div>
    )
}

export default Home
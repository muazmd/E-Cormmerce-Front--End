import './itemsPage.scss'
import NavBar from '../../../Components/NavBar/NavBar'
import img3 from '../../../images/img3.jpeg'
import img1 from '../../../images/img1.jpeg'
import img2 from '../../../images/img2.jpeg'
import img4 from '../../../images/img4.jpeg'
import { ItemCard } from '../../../Components/ItemCard/ItemCard'
import { useLocation } from 'react-router'

export const ItemsPage = () => {


    const history = useLocation();
 console.log(history)
const items =[
    {item: {title:'first item ', desc:'this is the first item', price:120,img:img1,oldPrice:''}},
    {item: {title:'second item ', desc:'this is the second item', price:150,img:img2,oldPrice:'170'}},
   {item: {title:'third item ', desc:'this is the third item', price:100,img:img3,oldPrice:''}},
    {item: {title:'fourth item ', desc:'this is the fourth item', price:80,img:img4,oldPrice:''}}
]



    return (
        <div className="itemPage">
            <NavBar />

        <div className="Item">

            {items.map(item => 
                
                <ItemCard 
                title={item.item.title}
                price={item.item.price} 
                desc={item.item.desc} 
                img={item.item.img} 
                oldPrice={item.item.oldPrice}
                />
                
                )}
            
                </div>
            
        </div>
    )
}

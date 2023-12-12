import React from 'react'
import { useSelector } from "react-redux";


function Basket() {
  const basket = useSelector(state=>state.basket)
  console.log(basket)
  return (
    <>
      <div className='w-10/12 mx-auto py-5'>
       <div className='title'>
        <h1 className='text-center text-4xl font-bold	'>Your Basket</h1>
      </div> 
      <div className='list-wrapper'>
        <ul className='list'>
         {
          basket.lists.map((item)=>(
             <li className='listItem'>
            <p className='font-bold text-6xl '>{item.listName}</p>
            
           {
            item.data.map((d)=>(
              <ul>
                <li>
                  <img src={d.img} alt="" />
                  <p>{d.title}</p>
                </li>
              </ul>
            ))
           }
            
          </li>
          ))
         }
         
        </ul>
      </div>
      </div>
      
    </>
  )
}

export default Basket
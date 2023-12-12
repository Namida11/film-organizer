import React from 'react'
import { useSelector } from "react-redux";


function Basket() {
  const basket = useSelector(state=>state.basket)
  console.log(basket)
  return (
    <>
      <div className='w-10/12 mx-auto py-5'>
       <div className='title'>
        <h1 className='text-center text-4xl font-bold bg-[#1b263b] text-[red]	 py-3'>Your Basket</h1>
      </div> 
      <div className='list-wrapper mt-5 flex flex-col gap-4'>
        <ul className='list flex flex-col gap-7 '>
         {
          basket.lists.map((item,key)=>(
             <li className='listItem flex flex-col gap-2 bordshadow-lg bg-gray-100  border-[1px]'>
              <div className='bg-[#f28482]'>  
                <p className='font-bold text-3xl py-2 px-4 text-white ' key={key}>{item.listName} </p>
              </div>
          
            
           {
            item.data.map((d,index)=>(
              <ul className='flex flex-col gap-2 p-4' key={index}>
                <li className='flex items-center gap-2'>
                  <div  className='w-[50px] h-[50px] rounded-full'>
                    <img src={d.img} alt="" className='w-[100%] h-[100%] rounded-full object-cover'/>
                  </div> 
                  <p className='text-xl '>{d.title}</p>
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
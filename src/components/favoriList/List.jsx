
import React, { useState } from 'react';
import close from "./close.svg"
import Button from "../search/button/Button"
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addListToBasket } from '../../store/basketSlice';




function List({ lists, selectedList, movies }) {
  const currentList = lists[selectedList] || [];
  const [text,setText]= useState("")
  const dispatch= useDispatch()
const saveList = (e)=>{
  e.preventDefault()
  if(!text.trim().length){
    alert("list name bos qala bilmez")
  }else{
    dispatch(addListToBasket({
    listName:text,
    movies:currentList

 }))
     alert("siayhiya elave olundu")
  }


}
const deleteItem =(e)=>{
  e.preventDefault()
  const id= e.target.id
 let res= currentList.filter((item)=>{
   return item.id !== id
  })
 return res
}

  return (
    <div id='list' className='bg-white h-[300px] w-[400px] flex flex-col justify-between'>
      <div className='w-100% flex flex-col overflow-y-auto justify-between	'>
        <input type="text" placeholder='new list' className='border-[black] border-[1px] mx-auto py-1 px-4 mt-2  text-xl' onChange={(e)=>{setText(e.target.value)}} />
        
        {currentList.map((movie,key) => (
        <div key={key} className=' flex gap-5 items-center px-4 py-1 mt-4 border-[1px] border-[#] '>
            <p className='text-lg'>{movie.title}</p>
           {/* <a href="#" onClick={deleteItem} ><img src={close} alt=""  id={movie.id} className='w-[15px] h-[15px]' /></a> */}
        </div>
        ))}
       
      </div>
      <div className='flex gap-3 px-4 py-5 '>
           <Link to={"/basket"}>
            <Button className='bg-[red] text-white ' name={"go basket"}></Button>
           </Link>
           <Button name={"save"} className='bg-[green] text-white ' onClick={saveList} ></Button>
        </div>
    </div>
  );
}

export default List;

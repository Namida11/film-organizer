import React from 'react'
import Input from './Input'
import Button from '../button/Button'


function search() {
  return (
    <>
    <div className='pt-5 w-10/12  flex gap-4 mx-auto'>
        <Input/>
        <Button name={"Search"} className={' bg-[#000814] text-white hover:bg-[#495057]'} />
    </div>
   
    </>
  )
}

export default search
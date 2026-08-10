import React from 'react'

const Card = (props) => {
    
  return (
   <div  className=' lg:w-[23vw] md:w-[30vw] sm:w-[45vw] rounded-xl p-8 px-8 flex items-center flex-col text-center   bg-white text-black ' >
        <img className='h-24 w-24 rounded-full object-center object-cover' src= {props.elem.imageURL} alt="" />
        <h1 className='text-2xl mt-2 font-bold my-2'>{props.elem.userName}</h1>
        <h5 className='text-base text-blue-500 font-semibold my-3'>{props.elem.userRole}</h5>
        <p className='text-sm font-medium leading-tight'>{props.elem.userDesc}</p>
        <button onClick={()=>{
          props.deleteHandler(props.idx)
        }} className='px-4 py-2 cursor-pointer mt-2 active:scale-95 rounded bg-red-600 text-white '>Remove</button>
      
    </div>
  )
}

export default Card

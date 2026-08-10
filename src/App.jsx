import React, { useState } from 'react'
import Card from './component/Card'

const App = () => {

  const [userName, setUserName] = useState('')
  const [imageURL, setImageURL] = useState('')
  const [userRole, setUserRole] = useState('')
  const [userDesc, setUserDesc] = useState('') 
  const [allUsers, setallUsers] = useState([]) 

  const [allusers, setallusers] = useState(()=>{
    return JSON.parse(localStorage.getItem('all-users'))|| []
  })
  
  




const submitHandler = (e)=>{
  
  e.preventDefault()

  const oldusers = [...allUsers];
  oldusers.push({userName, userRole, userDesc, imageURL})

  setallUsers(oldusers)
  localStorage.setItem('all-users', JSON.stringify(oldusers))


  setUserName('')
  setImageURL('')
  setUserDesc('')
  setUserRole('')
  
}


const deleteHandler = (idx)=>{
  const copyUser = [...allUsers]

  const conf = confirm('Are you really want to delete this element?')
  if(conf){
    copyUser.splice(idx,1)
  }else{
    alert('element Not Deleted')
  }



  setallUsers(copyUser)
  localStorage.setItem('all-users', JSON.stringify(copyUser))

}

  return (
    <div className='h-screen bg-black text-white'>
      <form className='flex flex-wrap' onSubmit={(e)=>{
        submitHandler(e)
      }} >
        <input required
        value={userName} 
        onChange={(e)=>{
            setUserName(e.target.value)
          }}
        
        type="text" 
        placeholder='Enter Your Name'  
        className='border-2 px-5 py-2 rounded m-2 w-[48%]'/>
        
        <input 
        value={imageURL}
        onChange={(e)=>{
          setImageURL(e.target.value)
        }}
        type="text" 
        placeholder='Profile URL' 
        className='border-2 px-5 py-2 rounded m-2 w-[48%]'/>
        
        <input
        value={userRole}
        onChange={(e)=>{
          setUserRole(e.target.value)
        }}
        type="text" 
        placeholder='Enter Role' 
        className='border-2 px-5 py-2 rounded m-2 w-[48%]'/>
        
        <input
        value={userDesc}
        onChange={(e)=>{
          setUserDesc(e.target.value)
        }}
        type="text" 
        placeholder='Description' 
        className='border-2 px-5 py-2 rounded m-2 w-[48%]'/>
        
        <button className=' border px-5 py-2 active:scale-95 cursor-pointer bg-emerald-700 rounded  m-2 w-[92%]'>Create User </button>
      
      </form>
     <div className='px-4 py-10 gap-4 flex flex-wrap'>
      
        {allUsers.map(function(elem, idx){

          return <Card idx = {idx}  elem = {elem} deleteHandler={deleteHandler}/>
        })}
     
     </div>
    </div>
  )
}

export default App

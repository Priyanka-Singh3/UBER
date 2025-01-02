import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainLogin = () => {
  const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [captainData, setCaptainData] = useState({})
  
    const submitHandler = (e) => {
      e.preventDefault();
      setCaptainData({
        email: email,
        password: password
      })
      setEmail("")
      setPassword("")
    }
  return (
    <div className='p-7 flex flex-col justify-between h-screen'>
      
      <div>
      <img className='w-16 mb-3' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />
      <form action="" onSubmit={(e) => {
        submitHandler(e)
      }}>
        <h3 className='text-lg mb-2'>What's your email ?</h3>
        <input 
        required type='email' 
        value={email}
        onChange={(e) => {
          setEmail(e.target.value)
        }}
        className='border mb-7 bg-[#eeeeee] rounded px-4 py-2 text-lg w-full placeholder:text-base'
        placeholder='email@example.com' 
        />
        <h3 className='text-lg mb-2'>Enter Password</h3>
        <input 
        required type='password'
        value={password}
        onChange={(e) => {
          setPassword(e.target.value)
        }}
        className='border mb-7 bg-[#eeeeee] rounded px-4 py-2 text-lg w-full placeholder:text-base'
        placeholder='password' 
        />
        <button 
        className='mb-3 bg-[#111] text-white rounded px-4 py-2 font-semibold w-full placeholder:text-base'
        >Login</button>
      </form>
      <p className='text-center'>
        Join a fleet ? <Link to="/captain-signup" className='text-[#275dad]'>Register as a Captain</Link>
      </p>
      </div>
      <div>
        <Link 
        to="/login"
        className='mb-5 bg-[#779be7] flex items-center justify-center text-white rounded px-4 py-2 font-semibold w-full placeholder:text-base'>Sign in as User</Link>
      </div>
    </div>
  )
}

export default CaptainLogin
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserSignup = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [userData, setUserData] = useState({})


  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
      fullName: {
        firstName: firstName,
        lastName: lastName
      },
      email: email,
      password: password
    })
    setEmail('')
    setFirstName('')
    setLastName('')
    setPassword('')
    
  }
  return (
    <div className='p-7 flex flex-col justify-between h-screen'>
    <div>
    <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
    <form action="" onSubmit={(e) => {
      submitHandler(e)
    }}>
      <h3 className='text-lg mb-2 font-medium'>What's your name ?</h3>
      <div className='flex gap-3 mb-6'>
      <input 
      required 
      type='text' 
      value={firstName}
      onChange={(e) => {
        setFirstName(e.target.value)
      }}
      className='border bg-[#eeeeee] rounded px-4 py-2 text-base w-1/2 placeholder:text-sm'
      placeholder='First Name' 
      />
      <input 
      required 
      type='text' 
      value={lastName}
      onChange={(e) => {
        setLastName(e.target.value)
      }}
      className='border bg-[#eeeeee] rounded px-4 py-2 text-base w-1/2 placeholder:text-sm'
      placeholder='Last Name' 
      />
      </div>
      <h3 className='text-lg mb-2 font-medium'>What's your email ?</h3>
      <input 
      required 
      type='email' 
      value={email}
      onChange={(e) => {
        setEmail(e.target.value)
      }}
      className='border mb-7 bg-[#eeeeee] rounded px-4 py-2 text-base w-full placeholder:text-sm'
      placeholder='email@example.com' 
      />
      <h3 className='text-lg mb-2 font-medium'>Enter Password</h3>
      <input 
      required 
      type='password'
      value={password}
      onChange={(e) => {
        setPassword(e.target.value)
      }}
      className='border mb-7 bg-[#eeeeee] rounded px-4 py-2 text-base w-full placeholder:text-sm'
      placeholder='password' 
      />
      <button 
      className='mb-3 bg-[#111] text-white rounded px-4 py-2 font-semibold w-full placeholder:text-base'
      >Signup</button>
    </form>
    <p className='text-center'>
      Already have an Account ? <Link to="/login" className='text-[#275dad]'>Login here</Link>
    </p>
    </div>
    <div>
      <p className='leading-tight text-[12px] text-zinc-400'>
      Join our community and enjoy fast, reliable rides at your fingertips. Sign up today and start your journey with just a few clicks!
      </p>
    </div>
    </div>
  )
}

export default UserSignup
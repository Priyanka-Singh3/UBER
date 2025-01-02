import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <div className="h-screen bg-cover bg-[url(https://i.pinimg.com/736x/54/a9/58/54a9581612fc5198f7025b904997af93.jpg)] pt-8 w-full bg-red-400 flex justify-between flex-col">
            <img className='w-16 ml-8' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
            <div className='bg-white py-4 px-4 pb-7'>
                <h2 className='text-3xl font-bold'>Get Started with Uber</h2>
                <Link to="/login" className='flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5'>Continue</Link>
            </div>

        </div>
    </div>
  )
}

export default Home
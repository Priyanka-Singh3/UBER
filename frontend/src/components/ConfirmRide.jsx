import React from 'react'

const ConfirmRide = (props) => {
  return (
    <div>
        <h5 className="p-1 text-center absolute top-0  w-[94%]" onClick={() => {
          props.setConfirmRidePanel(false);
        }}><i className="ri-arrow-down-wide-line text-2xl text-gray-500"></i></h5>
        <h3 className="font-semibold text-2xl mb-5">Confirm your Ride</h3>

        <div className='flex gap-2 flex-col justify-between items-center'>
            <img className='h-20' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398986/assets/90/34c200-ce29-49f1-bf35-e9d250e8217a/original/UberX.png" alt="" />

            <div className='w-full mt-5'>
                <div className='flex items-center gap-5 p-3 border-b-2'>
                    
                    <i className=" text-lg ri-map-pin-user-fill"></i>
                    <div>
                        <h3 className='text-lg font-medium'>562/11-A</h3>
                        <p className='text-sm -mt-1 text-gray-500'>Ajay Bagh, Pune</p>
                    </div>
                </div>
                <div className='flex items-center gap-5 p-3 border-b-2'>
                    <i className=" text-lg ri-map-pin-2-fill"></i>
                    <div>
                        <h3 className='text-lg font-medium'>562/11-A</h3>
                        <p className='text-sm -mt-1 text-gray-500'>Ajay Bagh, Pune</p>
                    </div>
                </div>
                <div className='flex items-center gap-5 p-3'>
                    <i className="text-lg ri-currency-line"></i>
                    <div>
                        <h3 className='text-lg font-medium'>₹193.20</h3>
                        <p className='text-sm -mt-1 text-gray-500'>Cash Cash</p>
                    </div>
                </div>
            </div>

            <button onClick={() => {
                props.setVehicleFound(true)
                props.setConfirmRidePanel(false);
            }} className=' mt-5 w-full bg-green-500 text-white font-semibold p-2 rounded-lg'>Confirm</button>
        </div>
    </div>
  )
}

export default ConfirmRide
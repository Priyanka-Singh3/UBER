import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
        <h5 className="p-1 text-center absolute top-0  w-[94%]" onClick={() => {
          props.setVehiclePanel(false);
        }}><i className="ri-arrow-down-wide-line text-2xl text-gray-500"></i></h5>
        <h3 className="font-semibold text-2xl mb-5">Choose a Vehicle</h3>

        <div onClick={() => {
            props.setConfirmRidePanel(true)
        }} className="flex active:border-black rounded-xl border-2 items-center p-3 w-full justify-between mb-2">
            <img className="h-10" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398986/assets/90/34c200-ce29-49f1-bf35-e9d250e8217a/original/UberX.png" alt=""></img>
            <div className="w-1/2 ml-2">
                <h4 className="text-base font-medium">UberGo <span><i className="ri-user-3-fill"></i>4</span></h4>
                <h5 className="text-sm font-medium">2 mins away</h5>
                <p className="text-xs font-light text-gray-600">Affordable, compact rides</p>
            </div>
            <h2 className="font-semibold text-lg">₹193.20</h2>
        </div>

        <div onClick={() => {
            props.setConfirmRidePanel(true)
        }} className="flex active:border-black rounded-xl border-2 items-center p-3 w-full justify-between mb-2">
            <img className="h-10" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt=""></img>
            <div className="w-1/2 ml-2">
                <h4 className="text-base font-medium">Moto <span><i className="ri-user-3-fill"></i>1</span></h4>
                <h5 className="text-sm font-medium">3 mins away</h5>
                <p className="text-xs font-light text-gray-600">Affordable motorcycle rides</p>
            </div>
            <h2 className="font-semibold text-lg">₹65.17</h2>
        </div>

        <div onClick={() => {
            props.setConfirmRidePanel(true)
        }} className="flex active:border-black rounded-xl border-2 items-center p-3 w-full justify-between mb-2">
            <img className="h-10" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt=""></img>
            <div className="w-1/2 ml-2">
                <h4 className="text-base font-medium">UberAuto <span><i className="ri-user-3-fill"></i>3</span></h4>
                <h5 className="text-sm font-medium">2 mins away</h5>
                <p className="text-xs font-light text-gray-600">Affordable auto rides</p>
            </div>
            <h2 className="font-semibold text-lg">₹120</h2>
        </div>
    </div>
  )
}

export default VehiclePanel
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const CaptainSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userData, setUserData] = useState({});

  const { captain, setCaptain } = useContext(CaptainDataContext);

  const [vehicleColor, setVehicleColor] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const captainData = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
      vehicle : {
        color: vehicleColor,
        capacity: vehicleCapacity,
        vehicleType: vehicleType,
        plate: vehiclePlate
      }
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData);
    if(response.status === 201) {
      const data = response.data
      setCaptain(data.captain)
      localStorage.setItem('token', data.token)
      navigate('/captain-home');
    }


    setEmail("");
    setFirstName("");
    setLastName("");
    setPassword("");
    setVehicleCapacity("");
    setVehicleColor("");
    setVehiclePlate("");
    setVehicleType("");
  };
  return (
    <div className="px-5 py-5 flex flex-col justify-between h-screen">
      <div>
        <img
          className="w-16 mb-10"
          src="https://www.svgrepo.com/show/505031/uber-driver.svg"
          alt=""
        />
        <form
          action=""
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-lg mb-2 w-full font-medium">
            What's your name ?
          </h3>
          <div className="flex gap-3 mb-6">
            <input
              required
              type="text"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              className="border bg-[#eeeeee] rounded px-4 py-2 text-base w-1/2 placeholder:text-sm"
              placeholder="First Name"
            />
            <input
              required
              type="text"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              className="border bg-[#eeeeee] rounded px-4 py-2 text-base w-1/2 placeholder:text-sm"
              placeholder="Last Name"
            />
          </div>
          <h3 className="text-lg mb-2 font-medium">What's your email ?</h3>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="border mb-7 bg-[#eeeeee] rounded px-4 py-2 text-base w-full placeholder:text-sm"
            placeholder="email@example.com"
          />
          <h3 className="text-lg mb-2 font-medium">Enter Password</h3>
          <input
            required
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="border mb-7 bg-[#eeeeee] rounded px-4 py-2 text-base w-full placeholder:text-sm"
            placeholder="password"
          />
          <h3 className="text-lg mb-2 font-medium">Vehicle Information</h3>
          <div className="flex gap-3 mb-6">
            <input
              required
              className="border mb-7 bg-[#eeeeee] rounded px-4 py-2 text-base w-full placeholder:text-sm"
              type="text"
              placeholder="Vehicle Color"
              value={vehicleColor}
              onChange={(e) => {
                setVehicleColor(e.target.value);
              }}
            />
            <input
              required
              className="border mb-6 bg-[#eeeeee] rounded px-4 py-2 text-base w-full placeholder:text-sm"
              type="text"
              placeholder="Vehicle Plate"
              value={vehiclePlate}
              onChange={(e) => {
                setVehiclePlate(e.target.value);
              }}
            />
          </div>
          <div className="flex gap-3 mb-6">
            <input
              required
              className="border mb-6 bg-[#eeeeee] rounded px-4 py-2 text-base w-full placeholder:text-sm"
              type="number"
              placeholder="Vehicle Capacity"
              value={vehicleCapacity}
              onChange={(e) => {
                setVehicleCapacity(e.target.value);
              }}
            />
            <select
              required
              className="border mb-6 bg-[#eeeeee] rounded px-4 py-2 text-base w-full placeholder:text-sm"
              value={vehicleType}
              onChange={(e) => {
                setVehicleType(e.target.value);
              }}
            >
              <option value="" disabled>
                Select Vehicle Type
              </option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="moto">Motorcycle</option>
            </select>
          </div>
          <button className="mb-3 bg-[#111] text-white rounded px-4 py-2 font-semibold w-full placeholder:text-base">
            Create Captain Account
          </button>
        </form>
        <p className="text-center">
          Already have an Account ?{" "}
          <Link to="/captain-login" className="text-[#275dad]">
            Login here
          </Link>
        </p>
      </div>
      <div>
        <p className="leading-tight text-[12px] text-center text-zinc-400">
          Your safety is our priority.
        </p>
      </div>
    </div>
  );
};

export default CaptainSignup;

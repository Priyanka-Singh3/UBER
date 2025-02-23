import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const UserLogout = () => {
    const token = localStorage.getItem('token')
    const navigate = useNavigate();
    axios.get(`${import.meta.env.VITE_BASE_URL}/users/logout`, {
        headers: {
            Authorization: `Bearer ${token}`
        },
        
    }).then((response) => {
        if(response.status === 200) {
            localStorage.removeItem('token');
            // console.log(response);
            navigate('/login');
            // console.log(response);
        }
    })
    // const [isLoggedOut, setIsLoggedOut] = useState(false);
    // const token = localStorage.getItem('token');
    // const navigate = useNavigate();

    // useEffect(() => {
    //     if (!token) {
    //         navigate('/login'); // Redirect if no token exists
    //         return;
    //     }

    //     axios.get(`${import.meta.env.VITE_BASE_URL}/users/logout`, {
    //         headers: {
    //             Authorization: `Bearer ${token}`,
    //         },
    //     })
    //     .then((response) => {
    //         if (response.status === 200) {
    //             localStorage.removeItem('token');
    //             setIsLoggedOut(true);
    //         }
    //     })
    //     .catch((error) => {
    //         console.error("Logout failed:", error);
    //     });
    // }, []);

    // // Redirect after successful logout
    // if (isLoggedOut) {
    //     navigate('/login');
    // }
    return (
        <div>UserLogout</div>
    )
}

export default UserLogout
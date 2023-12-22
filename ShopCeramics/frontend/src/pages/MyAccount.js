import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom';

import { useAuthContext } from '../hooks/useAuthContext';
import {useLogout} from '../hooks/useLogout';


import {getHours} from 'date-fns';

import Orders from '../components/Orders';
import Navbar from '../components/Navbar';
import Promo from '../components/Promo';


const MyAccount = () => {
    const[timeOfDay, setTimeOfDay] = useState('');
    const navigate = useNavigate();
    const {user} = useAuthContext();
    const{logout} = useLogout();
 
   
    useEffect(()=>{
      const currentTime = new Date();
      const currentHour = getHours(currentTime);

        if (currentHour >= 5 && currentHour < 12) {
            setTimeOfDay('Morning');
        } else if (currentHour >= 12 && currentHour < 17) {
            setTimeOfDay('Afternoon');
        } else if (currentHour >= 17 && currentHour < 21) {
            setTimeOfDay('Evening');
        } else {
            setTimeOfDay('Night');
        }

        if(!user){
          navigate('/login');
        }
    }, [user,navigate])

    const handleLogout = () =>{
     logout();
    }

  return (
    <div>
       <Promo/>
       <Navbar/>
       {user && 
         <div className='page-container'>
            <h2>Good {timeOfDay}, {(user.username || user.email.substring(0, user.email.indexOf('@'))).toUpperCase()}!</h2>
            <h5 className='page-subtitle'>Your Order History</h5>
            <Orders/>
            <button className='btn' onClick={handleLogout}>Logout</button>
         </div>  
       }
     </div> 
  )
}

export default MyAccount
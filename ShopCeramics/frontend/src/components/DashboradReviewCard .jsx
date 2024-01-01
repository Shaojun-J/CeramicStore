import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPen,faTrash} from "@fortawesome/free-solid-svg-icons";
const DashboradReviewCard  = (props) => {
  return (
    <tr className='table-row'>
        <td className='table-data' >{props.id}</td>  
        <td className='table-data' >{props.title}</td> 
        <td className='table-data' >{props.rate}</td> 
        <td className='table-data' >{props.country}</td> 
        <td className='table-data' >{props.date}</td> 
        <td className='table-data' style={{ width: '60%' }} >{props.text}</td>
        <td><FontAwesomeIcon className='sideNavbar-item-icon edit-icon' icon={faPen} /></td> 
        <td><FontAwesomeIcon className='sideNavbar-item-icon edit-icon'  icon={faTrash} /></td>
        </tr>
  )
}

export default DashboradReviewCard 
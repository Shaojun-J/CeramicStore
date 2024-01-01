import React from 'react';
import Data from '../../data/adminData.json';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser,faHouse,faBookmark,faCircleUser,faCartShopping,faStar, faArrowRightFromBracket} from "@fortawesome/free-solid-svg-icons";
import DashboradReviewCard  from "../../components/DashboradReviewCard "
import reviewData from "../../data/reviewsData.json"
import './ReviewDashboard.css'

const ReviewDashboard = () => {
    const card = reviewData.reviews.map((review)=>{
        return(
        <DashboradReviewCard 
        key={review.id}
        id={review.id}
        title={review.title}
        rate={review.rate}
        country={review.country}
        date={review.date}
        text={review.text}
        />)
    })
  return (

    <div className="dashboard-wrapper">
        <div className="sideNavbar-container">
        <h2 className='dashborard-title'>CURD OPERATIONS</h2>
            <div className="admin-info">
                <FontAwesomeIcon icon={faUser} className='user-icon'/>
                <h5 className='admin'>{Data.admin[0].name}</h5>
                <span className='name-subtitle'>admin</span>
            </div>
            <div className="sideNavbar-container">
                <ul className='sideNavbar'>
                    <li className='sideNavbar-item'><FontAwesomeIcon className='sideNavbar-item-icon' icon={faHouse} />
                     Home</li>
                     <li className='sideNavbar-item'><FontAwesomeIcon className='sideNavbar-item-icon' icon={faBookmark} />
                     Products</li>
                     <li className='sideNavbar-item'><FontAwesomeIcon className='sideNavbar-item-icon' icon={faCircleUser} />
                     Users</li>
                     <li className='sideNavbar-item'><FontAwesomeIcon className='sideNavbar-item-icon' icon={faCartShopping} />
                     Cart</li>
                     <li className='sideNavbar-item'><FontAwesomeIcon className='sideNavbar-item-icon' icon={faStar} />
                     Reviews</li>
                </ul>

            </div>
            <div className='dashborad-logout '>
                <span className='logout-text'>Logout</span>
                <FontAwesomeIcon className='sideNavbar-item-icon' icon={faArrowRightFromBracket} />
            </div>
        </div>

        <div className="dashboard-mian">
           
            <div className="searchBar-box">
               
                <input type="text" className='searchBar' placeholder='search by ID ...'>
                </input>
                <input  type="button" className='search-btn'  value='Search'></input>
            </div>
            <div className="dashboard-body">
                <div className="dashboard-top">
                <div className="dashboard-main-title">
                <h4 className="dashboard-title">Review List</h4>  
                    <input  type="button" className='add-new-review-btn search-btn'  value='ADD NEW REVIEW'></input>
                </div>
                
                    <table className='review-list'>
                        <thead>
                            <tr>
                                <td  className='table-head'>ID</td>            
                                <td  className='table-head'>Title</td>
                                <td  className='table-head'>Rate</td>
                                <td  className='table-head'>Country</td>
                                <td  className='table-head'>Date</td>
                                <td  className='table-head'>Content</td>
                            </tr>
                        </thead>
                        <tbody className='table-body'>
                            {card}
                            {card}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    </div>
  )
}

export default ReviewDashboard
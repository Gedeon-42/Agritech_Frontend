import React, { useEffect, useState } from "react";
import { FaSort, FaUser, FaUserGroup } from "react-icons/fa6";
import { GrBusinessService } from "react-icons/gr";

import { BsThreeDotsVertical } from "react-icons/bs";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";


import env from "../../env";
import noPhoto from "/images/notPhoto.png";
import axiosclient from "../../axiosClient";

function AdminDashBoard() {
 


  const getBarColor = (count) => {
    // Customize your color logic here
    if (count > 20) return "#ff0000"; // Red for more than 20 registrations
    if (count > 10) return "#82ca9d"; // Green for 11-20 registrations
    return "#8884d8"; // Default color for 0-10 registrations
  };

  const researches = [
    {
      id:1,
      title:"introduction to our researches",
      description:"lorem ipsum doresamnt we are ba htrol lorrems",
      image:"/images/reseach1.jpg"
    },
    {
      id:4,
      title:"impact of medecines",
      description:"lorem ipsum doresamnt we are ba htrol lorrems",
      image:"/images/reseach2.jpg"
    },
    {
      id:3,
      title:"pharmacy reseach",
      description:"lorem ipsum doresamnt we are ba htrol lorrems",
      image:"/images/reseach3.jpg"
    }
  ]

  return (
    <div className="admin-dashboard-wrapper">
      <div className="admin-chart-container">
      <div className="admin-flex-dash">
        <div className="admin-flex-content mediumgreen">
          {/* <div className="admin-flex-icon">
            <FaUserGroup />
          </div> */}
          <div className="admin-dash-numbers">
            <h5>Total students</h5>
            <h2>12
            </h2>
            <div className="increase-container">
              <div className="increase-student"></div>
            </div>
            <p>13% increase in 30 days</p>
        </div>
        </div>
        <div className="admin-flex-content yelloworange">
          {/* <div className="admin-flex-icon">
            <FaUser />
          </div> */}
          <div className="admin-dash-numbers">
            <h5>Total Partners</h5>
            <h2>45</h2>
            <div className="increase-container">
              <div className="increase-student"></div>
            </div>
            <p>20% increase in 30 days</p>
          </div>
        </div>
        <div className="admin-flex-content bluedodger">
          {/* <div className="admin-flex-icon">
            <GrBusinessService />
          </div> */}
          <div className="admin-dash-numbers">
            <h5>Total Researches</h5>
            <h2>67</h2>
            <div className="increase-container">
              <div className="increase-student"></div>
            </div>
            <p>7 % increase in 30 days</p>
          </div>
        </div>
        <div className="admin-flex-content lightcrimson">
          {/* <div className="admin-flex-icon">
            <GrBusinessService />
          </div> */}
          <div className="admin-dash-numbers">
            <h5>Total Courses</h5>
            <h2>56</h2>
            <div className="increase-container">
              <div className="increase-student"></div>
            </div>
            <p>24 % increase in 30 days</p>
          </div>
        </div>
      </div>
    
      
          
      </div>
      
<div className="student-reseach-wrapper">


      <div className="reseach-dash-wrapper">
        <div className="reseach-header-dash">
          <h6>Latest Reseach</h6>
        </div>

<div className="reseach-body-dash">
  {researches.map((item,index)=>(
    <div className="resach-desc-dash">
      <img src={item.image} alt="" />
      <div>
        <h6>{item.title}</h6>
        <p>{item.description}</p>
      </div>
    </div>
  ))}
</div>
      </div>
</div>
    
    </div>
  );
}

export default AdminDashBoard;

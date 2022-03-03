import TopNavigation from '../TopNavigation';
import { BsPlusCircleFill } from 'react-icons/bs';
import PieChart from '../PieChartDashboard';
import AllWidgets from '../DashboardWidgets';
import { useEffect, useState } from 'react';
// import { useState } from 'react';

const DashboardContainer = ({ foundUserSub }) => {

  return (
    <div className='bg-gray-50 dark:bg-[#121317] pl-72 pt-24 pb-8 pr-10 w-full h-full min-h-screen shadow-lg flex flex-row'>

    <div className='w-full h-full min-h-screen' >

    <h1 className="my-6 text-2xl font-semibold text-[#24262d] dark:text-[#e5e7eb]">Dashboard</h1>

    <AllWidgets foundUserSub={foundUserSub}/>
  

   
  

    </div>


  

      
    </div>
  );
};






export default DashboardContainer;

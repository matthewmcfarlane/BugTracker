import TopNavigation from '../TopNavigation';
import { BsPlusCircleFill } from 'react-icons/bs';
import PieChart from '../PieChartDashboard';
import AllWidgets from '../DashboardWidgets';
// import { useState } from 'react';

const DashboardContainer = () => {
  return (
    <div className='dark:bg-black pl-52 pt-24 pb-8 pr-8 w-full h-full min-h-screen shadow-lg flex flex-row'>

    <div className='bg-red-400 w-full h-full min-h-screen shadow-lg flex-1' >



    <AllWidgets />
  

   
  

    </div>


  

      
    </div>
  );
};






export default DashboardContainer;

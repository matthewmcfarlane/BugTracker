import { useState, useEffect } from "react";
import { filterByPriority, filterByUser, filterForNoAssignees } from "../../services/SortAndFilter";
import { PieChart } from "react-minimal-pie-chart";



const AllWidgets = ({ foundUserSub }) => {


    

    const [allBugs, setAllBugs] = useState([]);
    const [allBugsCount, setAllBugsCount] = useState(0);
    const [myBugsCount, setMyBugsCount] = useState(0);
    const [unassignedBugsCount, setUnassignedBugsCount] = useState(0);
    const [highBugsCount, setHighBugsCount] = useState(0);
    const [mediumBugsCount, setMediumBugsCount] = useState(0);
    const [lowBugsCount, setLowBugsCount] = useState(0);

    const getAllBugs = () => {
        fetch("http://localhost:9090/bugs")
        .then((result) => result.json())
        .then((data) => {
          setAllBugs(data);
          setAllBugsCount(data.length);
          setMyBugsCount(filterByUser(data, foundUserSub).length);
          setUnassignedBugsCount(filterForNoAssignees(data).length);
          setHighBugsCount(filterByPriority(data, "high").length);
          setMediumBugsCount(filterByPriority(data, "medium").length);
          setLowBugsCount(filterByPriority(data, "low").length);
        });
    };

    useEffect(() => {
        getAllBugs();
    }, []);


    // const doughnutOptions = {
    //     data: {
    //       datasets: [
    //         {
    //           data: [{highBugsCount}, {mediumBugsCount}, {lowBugsCount}],
    //           /**
    //            * These colors come from Tailwind CSS palette
    //            * https://tailwindcss.com/docs/customizing-colors/#default-color-palette
    //            */
    //           backgroundColor: ['#c62126', '#4486f5', '#1d946f'],
    //           label: 'Dataset 1',
    //         },
    //       ],
    //       labels: ['High', 'Medium', 'Low'],
    //     },
    //     options: {
    //       responsive: true,
    //       cutoutPercentage: 80,
    //     },
    //     legend: {
    //       display: false,
    //     },
    //   }

// const doughnutLegends = [
//         { title: 'High', color: 'bg-[#c62125]' },
//         { title: 'Medium', color: 'bg-[##4486f5]' },
//         { title: 'Low', color: 'bg-[#1d946f]' },
//       ]

//       function ChartLegend({ legends }) {
//         return (
//           <div className="flex justify-center mt-4 space-x-3 text-sm text-gray-600 dark:text-gray-400">
//             {legends.map((legend) => (
//               <div className="flex items-center" key={legend.title}>
//                 <span className={`inline-block w-3 h-3 mr-1 ${legend.color} rounded-full`}></span>
//                 <span>{legend.title}</span>
//               </div>
//             ))}
//           </div>
//         )
//       }



      
    return ( 

        <div className="flex flex-col">

        <div className="flex flex-wrap justify-around">
        <TotalTickets allBugsCount={allBugsCount}/>
        <MyTickets myBugsCount={myBugsCount}/>
        <UnassignedTickets unassignedBugsCount={unassignedBugsCount}/>
       </div>
        
        <PieChart
        data={[
            { title: 'High', value: highBugsCount, color: '#c62125' },
            { title: 'Medium', value: mediumBugsCount, color: '#4486f5' },
            { title: 'Low', value: lowBugsCount, color: '#1d946f' }
            ]}
        // radius={25}
        viewBoxSize={[100, 100]}
        radius={20}
        center={[50, 30]}
        /> 
{/* <PieChart
 animation
   animationDuration={500}
   animationEasing="ease-out"
   center={[50, 50]}
   data={[
            { title: 'High', value: highBugsCount, color: '#c62125' },
            { title: 'Medium', value: mediumBugsCount, color: '#4486f5' },
            { title: 'Low', value: lowBugsCount, color: '#1d946f' }
            ]}
   labelPosition={0}
   lengthAngle={360}
   lineWidth={15}
   paddingAngle={0}
   radius={10}
   rounded
   startAngle={0}
   viewBoxSize={[100, 100]}/> */}
    </div>
     )}
 

const TotalTickets = ({ allBugsCount }) => {
    return ( 
<div className="flex flex-grow flex-col content-center p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-[#1a1c23] dark:border-gray-700 dark:hover:bg-gray-700">
        <p className="card-title flex " >Total Open Tickets</p>
        <p className="card-val flex">{allBugsCount}</p>
    </div>

    
     );
    }

const MyTickets = ({ myBugsCount }) => {
    return ( 

        <div className="flex flex-grow flex-col content-center p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-[#1a1c23] dark:border-gray-700 dark:hover:bg-gray-700">
        <p className="card-title flex " >My Open Tickets</p>
        <p className="card-val flex">{myBugsCount}</p>
    </div>
    
     );
    }

const UnassignedTickets = ({ unassignedBugsCount }) => {
    return ( 
      
        <div className="flex flex-grow flex-col content-center p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-[#1a1c23] dark:border-gray-700 dark:hover:bg-gray-700">
        <p className="card-title flex " >Unassigned Tickets</p>
        <p className="card-val flex">{unassignedBugsCount}</p>
    </div>




     );
    }

 
  




export default AllWidgets;
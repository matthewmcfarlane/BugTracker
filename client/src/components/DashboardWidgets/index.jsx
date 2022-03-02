import { useState, useEffect } from "react";
import { filterByPriority, filterByUser, filterForNoAssignees } from "../../services/SortAndFilter";
import { PieChart } from 'react-minimal-pie-chart';


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

    return ( 

        <div className="flex flex-wrap justify-around">


        <TotalTickets allBugsCount={allBugsCount}/>
        <MyTickets myBugsCount={myBugsCount}/>
        <UnassignedTickets unassignedBugsCount={unassignedBugsCount}/>
        <PieChart
        data={[
            { title: 'High', value: highBugsCount, color: '#F10808' },
            { title: 'Medium', value: mediumBugsCount, color: '#F19908' },
            { title: 'Low', value: lowBugsCount, color: '#2dc937' }
            ]}
        radius={25}
        label={({ dataEntry }) => `${dataEntry.title}: ${dataEntry.value}`}
        />
        </div>


     );
}
 

const TotalTickets = ({ allBugsCount }) => {
    return ( 

        <div className="widget h-32 w-32">
            <h2>Total Open Tickets: {allBugsCount}</h2>
        </div>
    
     );
    }

const MyTickets = ({ myBugsCount }) => {
    return ( 

        <div className="widget h-32 w-32">
            <h2>My Open Tickets: {myBugsCount}</h2>
        </div>
    
     );
    }

const UnassignedTickets = ({ unassignedBugsCount }) => {
    return ( 

        <div className="widget h-32 w-32">
            <h2>Unassigned Tickets: {unassignedBugsCount}</h2>
        </div>
    
     );
    }

 





export default AllWidgets;
import { useState, useEffect } from "react";
import { filterByUser, filterForNoAssignees } from "../../services/SortAndFilter";

const AllWidgets = ({ foundUserSub }) => {

    const [allBugs, setAllBugs] = useState([]);
    const [allBugsCount, setAllBugsCount] = useState(0);
    const [myBugsCount, setMyBugsCount] = useState(0);
    const [unassignedBugsCount, setUnassignedBugsCount] = useState(0);

    const getAllBugs = () => {
        fetch("http://localhost:9090/bugs")
        .then((result) => result.json())
        .then((data) => {
          setAllBugs(data);
          setAllBugsCount(data.length);
          setMyBugsCount(filterByUser(data, foundUserSub).length);
          setUnassignedBugsCount(filterForNoAssignees(data).length);
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






const AllWidgets = () => {
    return ( 

        <div className="flex flex-wrap justify-around">


       <TotalTickets />
       <MyTickets />
       <UnassignedTickets />

        </div>


     );
}
 

const TotalTickets = () => {
    return ( 

        <div className="widget h-32 w-32">
            <h2>Total Open Tickets</h2>
        </div>
    
     );
    }

const MyTickets = () => {
    return ( 

        <div className="widget h-32 w-32">
            <h2>My Open Tickets</h2>
        </div>
    
     );
    }

const UnassignedTickets = () => {
    return ( 

        <div className="widget h-32 w-32">
            <h2>Unassigned Tickets</h2>
        </div>
    
     );
    }

 





export default AllWidgets;
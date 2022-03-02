import NewBugForm from "../BugContainer/NewBugForm";

const ReportBugContainer = () => {

  const onBugAddition = (newBug) => {
    //Generate date to display
    var today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth()).padStart(2, '0');
    const yyyy = today.getFullYear();
    today = yyyy + mm + dd;

    //Fill in missing fields to allow render
    newBug['dateReported'] = today;
    newBug['assignees'] = [];
    newBug['active'] = true;

  }

  return (
    <div className='dark:bg-black pl-52 pt-24 pb-8 pr-8 w-full h-full min-h-screen shadow-lg flex flex-row'>

    <div className='bg-red-400 dark:bg-gray-700 w-full h-full min-h-screen shadow-lg flex-1 overflow-hidden' >

    <div className="flex flex-col justify-center items-center pt-16">

      <NewBugForm onBugAddition={onBugAddition} />

      </div>

  

   
  

    </div>


  

      
    </div>
  );
};






export default ReportBugContainer;

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
    <div className='bg-gray-50 dark:bg-[#121317] pl-72 pt-24 pb-8 pr-10 w-full h-full min-h-screen shadow-lg flex flex-row'>

    <div className='w-full h-full min-h-screen' >

    <h1 className="my-6 text-2xl font-semibold text-[#24262d] dark:text-[#e5e7eb]">Report Issue</h1>

    <div className="flex flex-col justify-center items-center pt-16 bg-white shadow-xl dark:bg-[#1a1c23] ">

      <NewBugForm onBugAddition={onBugAddition} />

      </div>

  

   
  

    </div>


  

      
    </div>
  );
};






export default ReportBugContainer;

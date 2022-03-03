import { Link } from 'react-router-dom';
import SidebarContent from '../SideBarContent';


const SideBar = () => {

  return (
    // <div className="font-zappr text-xl text-blue-300 items-center bg-pink-400 fixed h-full mt-16 pt-4 t-0 w-44 flex flex-col dark:bg-gray-900 dark:text-yellow-300 shadow-lg">
    <div className="z-30 w-64 overflow-y-auto bg-white dark:bg-[#1a1c23] lg:block fixed h-full ">
      {/* <div className=''>
      <Link to="/">Dashboard</Link>
      </div>
      <Divider />
      <Link to="/bugs">Bug Table</Link>
      <Divider />
      <Link to="/mybugs">My Bugs</Link>
      <Divider />
      <Link to="/report">Report Bugs</Link> */}
      <SidebarContent />

    </div>
  );
};




const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;

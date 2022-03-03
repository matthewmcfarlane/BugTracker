import React from 'react'
import { Link, Route} from 'react-router-dom'
import {RiDashboardLine} from 'react-icons/ri'
import {BsTable} from 'react-icons/bs'
import {AiOutlineForm} from 'react-icons/ai'
import {GiHamburgerMenu} from 'react-icons/gi'



const SidebarContent = () => {
  return (

<div className="py-4 text-gray-500 dark:text-gray-400">
      <a className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200" href="#">
        Zappr
      </a>
      <ul className="mt-6">
            <li className="relative px-6 py-3">
            
              <Link to="/" className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-[#4DB6AC]"
        > <span><RiDashboardLine/></span>&nbsp;&nbsp;&nbsp; Dashboard</Link> </li>
                
                <li className="relative px-6 py-3">
              <Link to="/bugs" className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-[#4DB6AC]"
                activeClassName="text-gray-800 dark:text-gray-100"><span><BsTable/></span>&nbsp;&nbsp;&nbsp; All Issues</Link> </li>
         <li className="relative px-6 py-3">
              <Link to="/mybugs" className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-[#4DB6AC]"
                activeClassName="text-gray-800 dark:text-gray-100"> <span><GiHamburgerMenu/></span>&nbsp;&nbsp;&nbsp; My Issues</Link> </li>
                 <li className="relative px-6 py-3">
              <Link to="/report" className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-[#4DB6AC]"
                activeClassName="text-gray-800 dark:text-gray-100"> <span><AiOutlineForm/></span> &nbsp;&nbsp;&nbsp; Report Issue</Link> </li>
                
      </ul>
    </div>
  )
  }


    
//     <div className="py-4 text-gray-500 dark:text-gray-400">
//       <a className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200" href="#">
//         Zappr
//       </a>
//       <ul className="mt-6">
//       {routes.map((route) =>
//          (
//             <li className="relative px-6 py-3">
//               <Link
//                 exact
//                 to={route.path}
//                 className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
//                 activeClassName="text-gray-800 dark:text-gray-100"
//               >
//                 <Route path={route.path} exact={route.exact}>
//                   <span
//                     className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
//                     aria-hidden="true"
//                   ></span>
//                 </Route>
               
//                 <span className="ml-4">{route.name}</span>
//               </Link>
//             </li>
//           )
//         )}
//       </ul>
//     </div>
//   )
//   }

export default SidebarContent

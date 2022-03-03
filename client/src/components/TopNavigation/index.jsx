import {
  FaSearch,
  FaHashtag,
  FaRegBell,
  FaUserCircle,
  FaMoon,
  FaSun,
} from 'react-icons/fa';
import {RiLogoutBoxFill, RiLogoutBoxLine} from 'react-icons/ri'
import { useAuth0 } from '@auth0/auth0-react';
import useDarkMode from '../../hooks/useDarkMode';

const TopNavigation = () => {
  return (
    <div className='flex flex-row items-center justify-evenly 
    bg-white dark:bg-[#1a1c23] 
    h-16 
    m-0  w-full fixed pl-44 ml-0
    shadow-xl'>
      <Title />
      <ThemeIcon />
      <Search />
      <BellIcon />
      <UserCircle />
    </div>
  );
};

const ThemeIcon = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);
  return (
    <span onClick={handleMode}>
      {darkTheme ? (
        <FaSun size='24' className='top-navigation-icon' />
      ) : (
        <FaMoon size='24' className='top-navigation-icon' />
      )}
    </span>
  );
};

const Search = () => (
  <div className='search'>
    <input className='search-input' type='text' placeholder='Search...' />
    <FaSearch size='18' className='text-secondary my-auto' />
  </div>
);
const BellIcon = () => <FaRegBell size='24' className='top-navigation-icon' />;




const UserCircle = () => {
const { logout, isAuthenticated } = useAuth0();
  return(<RiLogoutBoxLine size='24' className='top-navigation-icon' onClick={()=>logout()} />);}





const Title = () => <h5 className='text-5xl inline-block align-middle font-zappr text-gray-500 tracking-wider font-semibold text-opacity-80 
mr-auto ml-4 my-auto 
transition duration-300 ease-in-out'></h5>;

export default TopNavigation;

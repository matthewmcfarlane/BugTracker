import DashboardContainer from './components/DashboardContainer';
import SideBar from './components/SideBar';
import { useAuth0 } from '@auth0/auth0-react';
import TopNavigation from './components/TopNavigation'
import React, { useEffect, useState } from 'react';
import Loading from './components/Loading';
import BugTable from './components/BugContainer/BugTable';

function App() {

  const { isLoading, loginWithRedirect, isAuthenticated, user } = useAuth0();
  const [foundUser, setFoundUser] = useState(null);

  const baseURL = 'http://localhost:9090/users/';

  const postUser = (payload) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
    .then(data => setFoundUser(data));
  }
  
  const checkUserInDB = () => {

    const userData = {
      "auth0Sub": user.sub,
      "name": user.name,
      "nickname": user.nickname,
      "email": user.email,
      "role": user["http://demozero.net/roles"][0]
    };

    postUser(userData);
  }

  useEffect(() => {
    if(isAuthenticated){
      checkUserInDB();
    }
  }, [user])


  if (isLoading) return <Loading />

  return (
    !isAuthenticated &&(loginWithRedirect()),
    <>
<TopNavigation />
<SideBar />
    <div className="">
      {/* <DashboardContainer /> */}
      <BugTable />
    </div>
  </>
  );
}

export default App;

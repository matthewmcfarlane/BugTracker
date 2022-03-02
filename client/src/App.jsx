import DashboardContainer from './components/DashboardContainer';
import SideBar from './components/SideBar';
import { useAuth0 } from '@auth0/auth0-react';
import TopNavigation from './components/TopNavigation'
import React, { useEffect, useState } from 'react';
import Loading from './components/Loading';
import BugTable from './components/BugContainer/BugTable';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyBugs from './components/BugContainer/MyBugs'
import ReportBugContainer from './components/ReportBugContainer';

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
      <Router>
        <TopNavigation />
        <SideBar />
        <Routes>
          <Route exact path='/' element={<DashboardContainer foundUserSub={user.sub}/>} />
          <Route exact path='bugs' element={<BugTable />} />
          <Route exact path='mybugs' element={<MyBugs foundUserSub={user.sub} />} />
          <Route exact path='report' element={<ReportBugContainer />}/>
        </Routes>
    </Router>
  </>
  

  );
}

export default App;
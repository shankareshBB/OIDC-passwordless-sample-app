// import logo from './assets/react.svg';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.module.css';
import axios from 'axios';

const baseURL = import.meta.env.VITE_PWL_BACKEND_URL;

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<DefaultPage />} />
        <Route path="/user" element={<LoggedInPage />} />
      </Routes>
    </Router>
  );
};

// eslint-disable-next-line react/prop-types
const DefaultPage = () => {

  return (
    <div>  
      <h1>Welcome! Please log in to continue.</h1>
      <a className="passwordless" href={baseURL+'/auth/login'}>Login With Passwordless</a>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const LoggedInPage = (props) => {
  console.log("DATA", props);
  // const [user, setUser] = useState(null);

  useEffect(() => {
    return () => {
      axios.get(baseURL+'/user').then((response) => {
        console.log(response);
        // setUser(response)
      })
    }
  }, []);
  
  // console.log("DATA", JSON.stringify(data,null,4) );
  return (
    <div>
      <h1>Welcome, user! </h1>
      <div id="logout">
        <form action={baseURL+'/auth/logout'}>
          <input id ="button" type="submit" value="Logout" />
        </form>
       </div>
    </div>
  );
};

export default App;

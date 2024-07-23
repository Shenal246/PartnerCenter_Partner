import './App.css';
// import BecomePartner from './Components/BecomePartner/BecomePartner';
// import LoginPage from './Components/LoginPage/LoginPage';
import PromotionsPage from './Components/Promotions/Promotions';
import BecomePartner from './Components/BecomePartner/BecomePartner';
import LoginPage from './Components/LoginPage/LoginPage';
import VerticalNavbar from './Components/NavBar/NavBar';
import Dashboard from './Components/Dashboard/Dahboard';
import React from 'react';
import HomePage from './Components/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      

      {/* <LoginPage /> */}
      {/* <BecomePartner/> */}
      {/* <PromotionsPage/> */}
      {/* <VerticalNavbar/> */}
      <HomePage/>
      {/* <Dashboard/>   */}
    </div>
  );
}

export default App;

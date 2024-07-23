import './App.css';
// import BecomePartner from './Components/BecomePartner/BecomePartner';
// import LoginPage from './Components/LoginPage/LoginPage';
import PromotionsPage from './Components/Promotions/Promotions';
// import BecomePartner from './Components/BecomePartner/BecomePartner';
// import LoginPage from './Components/LoginPage/LoginPage';
import VerticalNavbar from './Components/NavBar/NavBar';
import React from 'react';

function App() {
  return (
    <div className="App">
      {/* <LoginPage /> */}
      {/* <BecomePartner/> */}
      <PromotionsPage/>
      <VerticalNavbar/>
    </div>
  );
}

export default App;

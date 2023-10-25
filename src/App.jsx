import { Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import { GuestPage } from './components/pages/guestPage';
import { AuthPage } from './components/pages/authPage';
import { useEffect, useState } from 'react';

function App() {


  const [signed, setSigned] =useState('')

  useEffect(()=>{
      setSigned(JSON.parse(localStorage.getItem('loginToken'))) 
  },[])

  return (
    <div className="App">
      {signed ? <AuthPage/> : <GuestPage/>}
    </div>
  );
}

export default App;

import './App.css';
import React, {useState} from 'react';
import Page1 from './components/Page1.js';
import Page2 from './components/Page2.js';
import Page3 from './components/Page3.js';
import {BrowserRouter} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';


function App() {
  const [arr, setArr] = useState({"username":"", "email":"", "password":"", "phone":"", "address":"", "about":""});
  const info = (username, email, password)=>{
    arr.username = username;
    arr.email = email;
    arr.password = password;
    setArr(arr);
  }
  const info1 = (phone, address, about)=>{
    arr.phone = phone;
    arr.address = address;
    arr.about = about;
    setArr(arr);
  }
  
  return (
    <BrowserRouter>
    <div className="App container-fluid">
        <h1 className='head'>Registration form</h1>
        <Routes>
            <Route path="Project-1/" element={<Page1 info={info}/>}/>
            <Route path="Project-1/page2" element={<Page2 info1={info1}/>}/>
            <Route path="Project-1/page3" element={<Page3 arr={arr}/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

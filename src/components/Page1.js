import React, { useRef} from 'react'
import {NavLink} from 'react-router-dom';
import './Page1.css';

export default function Page1(props) {
  const username = useRef();
  const email = useRef(null);
  const password = useRef(null);
  return (
    <div className='box1'>
        <h1>Page1</h1>
        <form>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">User Name</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your name" ref={username} required/>
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required="true" placeholder="Email ID..." ref={email}/>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" required="true" placeholder="Password..." ref={password}/>
            </div>
            <NavLink to="/page2">
                <button type="submit" class="btn btn-success" onClick={()=> props.info(username.current.value, email.current.value, password.current.value)}>Next</button> 
            </NavLink>
        </form>
    </div>
  )
}

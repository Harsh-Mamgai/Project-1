import React from 'react'
import { NavLink } from 'react-router-dom';
import { useRef } from 'react';
import './Page2.css';

export const Page2 = (props) => {
  const about = useRef();
  const address = useRef();
  const phone = useRef();
  return (
    <div className='box2'>
      <h1>Page2</h1>
        <h2>Phone No.</h2>
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Phone" aria-label="Username"  aria-describedby="basic-addon1" ref={phone}/>
        </div>
        <h2>Address</h2>
        <div class="input-group">
            <input type="address" class="form-control" aria-label="Username" aria-describedby="basic-addon1" ref= {address} placeholder='Address'/>
        </div>
        <h2>About yourself</h2>
        <div class="form-floating">
            <textarea style={{resize:'none'}}class="form-control" placeholder="Leave a comment here" id="floatingTextarea" ref={about}></textarea>
        </div>
        <NavLink to="/"><button type="submit" class="btn btn-success">Back</button></NavLink>
        <NavLink to="/page3">
          <button type="submit" class="btn btn-success" onClick={()=> props.info1(phone.current.value, address.current.value, about.current.value)}>Submit</button> 
        </NavLink>
    </div>
  )
}
export default Page2;

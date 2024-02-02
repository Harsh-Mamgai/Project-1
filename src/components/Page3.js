import React from 'react'
import { NavLink } from 'react-router-dom';
import './Page3.css';

export const Page3 = (props) => {
  return (
    <div>{props.arr.username && props.arr.email && props.arr.password ?
      <div> 
        <h2>Signed In!!</h2>
        <table class="table">
      <thead>
        <tr>
          <th scope="col">Fields</th>
          <th scope="col">Your Reply</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">User Name</th>
          <td>{props.arr.username}</td>
        </tr>
        <tr>
          <th scope="row">Email address</th>
          <td>{props.arr.email}</td>
        </tr>
        <tr>
          <th scope="row">Password</th>
          <td colspan="2">{props.arr.password}</td>
        </tr>
        <tr>
          <th scope="row">Phone No.</th>
          <td colspan="2">{props.arr.phone}</td>
        </tr>
        <tr>
          <th scope="row">Address</th>
          <td colspan="2">{props.arr.address}</td>
        </tr>
        <tr>
          <th scope="row">About yourself</th>
          <td colspan="2">{props.arr.about}</td>
        </tr>
      </tbody>
      </table>
      </div> : <h1>Your form was not submitted please fill all the fields in page1 they are mandatory</h1>
      }
      <NavLink to="Project-1/">
        <button type="submit" class="btn btn-success mt-1 mb-2">Back to Home</button>
      </NavLink>
    </div>
  )
}
export default Page3;

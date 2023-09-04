import React, { useEffect, useState} from "react";
import axios from "axios";
function DataFetch(){
    const [data, setData]=useState([])
useEffect(()=>{
  axios.get("https://jsonplaceholder.typicode.com/users")
  .then(res=>setData(res.data))
  .catch(err=>console.log(err));
},[])
return(
    <div className="container">
        <h1>Fetching of data from API in React with Axios</h1>
         <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Zipcode</th>
                    <th>City</th>
                </tr>
            </thead>
            <tbody>
                {
                data.map((user,index)=>{
                    return <tr key={index}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.address.city}</td>
                        <td>{user.address.zipcode}</td>
                    </tr>
                })
            }

            </tbody>
         </table>
    </div>
)
}
export default DataFetch;

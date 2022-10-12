import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { PassUsersConetxt } from "../Context/UserContext"

export const Form = () => {
   const[data, setData]  = useState("");
   const { login } = PassUsersConetxt()
   const getData = (e) =>{
    e.preventDefault()
    if(data !== ""){ 
        login(data);
        toast.success("done") 
    }
    else{ toast.error("Please Fill UserName") }
   }
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-8 offset-md-2">
            <form onSubmit={(e) => getData(e) }>
            <div className="mb-3 mt-3">
                <label className="form-label">Name:</label>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Enter UserName" 
                    name="name" 
                    onChange={(e) => setData(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Password:</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  name="pswd"
                  onChange={(e) => setData(e)}
                />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
            </div>
        </div>
    </div>
  )
}

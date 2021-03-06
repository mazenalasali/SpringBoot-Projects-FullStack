import React from 'react'
import { Route } from 'react-router-dom';
import axios from "axios";

function AddCustomer() {

    const submit= e => {
        let name = e.target[0].value;
        let dob = e.target[1].value;
        let criditlimit = e.target[2].value;
        
        let data = {
            name,
            dob,
            criditlimit
        };
        console.log(data);
        postCustomer(data);
    }

    const  postCustomer=(data) => {
        axios
          .post("http://localhost:8080/customer", data)
          .then(d=>{console.log(d);
        })
        .catch(err => alert(err));

    };

    return (
        <div className="container my-3">
            <form 
                onSubmit={e => {
                e.preventDefault();
                submit(e);
                }}
            > 
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label >DOB</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label>CreditLimit</label>
                    <input type="text" className="form-control" />
                </div>

                <button type="submit" className="btn btn-primary btn-sm"> Submit</button>
            </form>
        </div>
    );
}

export default AddCustomer;

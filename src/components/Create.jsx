import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../slice/userDetailSlice';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const[users,setUsers]=useState({});

    const dispatch=useDispatch();
    const navigate=useNavigate();

    const handleOnChange=(e)=>{
        setUsers({...users,[e.target.name]:e.target.value});
        
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(createUser(users));
        console.log(users);
        navigate('/read');
    }

    return (
        <div>
            <form className='w-50 mx-auto' onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" name='name' onChange={handleOnChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' onChange={handleOnChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Age</label>
                    <input type="number" className="form-control" id="exampleInputPassword1" name='age' onChange={handleOnChange}/>
                </div>
                <div class="mb-3">
                    <input className="form-check-input" type="radio" name="gender"  value="Male" onChange={handleOnChange} />
                    <label className="form-check-label" htmlFor="flexRadioDefault1" >Male </label>
                </div>
                <div class="mb-3">
                    <input className="form-check-input" type="radio" name="gender" value="Female" onChange={handleOnChange}/>
                    <label className="form-check-label" htmlFor="flexRadioDefault2" > Female</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default Create;

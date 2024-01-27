import React, { useEffect } from 'react'
import { useState } from 'react';
import { UseDispatch, useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateUser } from '../slice/userDetailSlice';

const Update = () => {

    const{id}=useParams();

    const {users,loading}=useSelector((state)=>state.app);

    const[updateData,setUpdateData]=useState({});

    const dispatch=useDispatch();

    useEffect(()=>{
        if(id){
            const singleUser=users.find((item)=>item.id===id);
            setUpdateData(singleUser);
        }
    },[id]);

    const handleOnChange=(e)=>{
        setUpdateData({...updateData,[e.target.name]:e.target.value});
    }
    const navigate=useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (updateData) {
            dispatch(updateUser(updateData));     
        }  
        navigate('/read');
    }
    

    
  return (
    <div>
          <form className='w-50 mx-auto' onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" name='name' value={updateData && updateData.name} onChange={handleOnChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={updateData && updateData.email} onChange={handleOnChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Age</label>
                    <input type="number" className="form-control" id="exampleInputPassword1" name='age' value={updateData && updateData.age} onChange={handleOnChange}/>
                </div>
                <div class="mb-3">
                    <input className="form-check-input" type="radio" name="gender" value="Male" checked={updateData && updateData.gender === 'Male'} onChange={handleOnChange} />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">Male </label>
                </div>
                <div class="mb-3">
                    <input className="form-check-input" type="radio" name="gender"  value="Female" checked={updateData && updateData.gender === 'Female'} onChange={handleOnChange}/>
                    <label className="form-check-label" htmlFor="flexRadioDefault2"> Female</label>
                </div>
                <button type="submit" className="btn btn-primary">update</button>
            </form>
    </div>
  )
}

export default Update
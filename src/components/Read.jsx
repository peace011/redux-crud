import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { showUser } from '../slice/userDetailSlice'
import { deleteUser } from '../slice/userDetailSlice'

const Read = () => {

    const dispatch=useDispatch();
    const {users,loading}=useSelector((state)=>state.app);

    useEffect(()=>{
        dispatch(showUser());
    },[]);

    if(loading){
        return <h2>loading</h2>
    }
 
    return (
        <div>
            <h2>All Data</h2>
           { users && users.map((item,index)=>(<div className="card w-50 mx-auto" key={index}>
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{item.email}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">{item.gender}</h6>
                    <p className="card-text"></p>
                    <Link to="#" className="card-link">View</Link>
                    <Link to={`/edit/${item.id}`} className="card-link">Edit</Link>
                    <Link to="#" className="card-link" onClick={()=>dispatch(deleteUser(item.id))}>Delete</Link>

                </div>
            </div>))}
        </div>
    )
}

export default Read
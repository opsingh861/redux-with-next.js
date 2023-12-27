"use client"

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/slice";


export default function AddUser() {
    const [name,setName] = useState('');
    const dispatch = useDispatch();
    const userDispatcher = () => {
        dispatch(addUser(name))
        console.log(name);
    }
    return (
        <div className="add-user">
            <h1>Add User</h1>
            <input onChange={(e)=>setName(e.target.value)} className="input-box" type="text" placeholder="Enter Name" />
            <button onClick={userDispatcher} className="btn">Add</button>
        </div>
    )
}
"use client"

import { useDispatch, useSelector } from "react-redux";
import { fetchApiUser } from "../redux/slice";

export default function Page () { 
    const dispatch = useDispatch();
    const users = useSelector((state) => state.usersData.apiUser);
    return (
        <div className="display-user">
            <h1>User list</h1>
            <button onClick={()=>dispatch(fetchApiUser())} className="btn">Fetch Users</button>
            <br />
            {
                users.map((user) => (
                    <div className="user" key={user.id}>
                        <p>{user.name}</p>
                    </div>
                ))
            }
        </div>
    )
 }
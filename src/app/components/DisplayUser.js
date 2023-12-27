"use client"

import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../redux/slice";

export default function DisplayUser() {
    const users = useSelector(state => state.users);
    const dispatch = useDispatch();
    return (
        <div className="display-user">
            <h1>Display Users</h1>
            {
                users.map((user) => (
                    <div key={user.id} className="user">
                        <span>
                            {user.name}
                        </span>
                        <button onClick={()=>dispatch(removeUser(user.id))} style={{ marginRight: '5px' }} className="btn">Delete</button>
                    </div>
                ))
            }
        </div>
    )
}
"use client"

import { useSelector } from "react-redux";

export default function DisplayUser() {
    const users = useSelector(state => state.users);
    return (
        <div className="display-user">
            <h1>Display Users</h1>
            {
                users.map((user) => (
                    <div key={user.id} className="user">
                        <h3>{user.name}</h3>
                    </div>
                ))
            }
        </div>
    )
}
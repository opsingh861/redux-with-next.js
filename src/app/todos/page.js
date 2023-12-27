"use client"

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/todoslice";

export default function Page() {
    const [title, setTitle] = useState("");
    const todos = useSelector((state) => state.todosData.todos);
    const dispatch = useDispatch();
    return (
        <div className="display-user">
            <h1 >Todo Page</h1>
            <input className="input-box" type="text" onChange={(e) => setTitle(e.target.value)} placeholder="Title of the todo" />
            <button className="btn" onClick={() => dispatch(addTodo(title))}>Add Todo</button>
            <br />
            {
                todos.map((todo) => (
                    <div className="user" key={todo.id}>
                        <p>{todo.title}</p>
                    </div>
                ))
            }
        </div>
    )
}
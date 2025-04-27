"use client";
import React, { useState, useEffect} from "react";

const TodoAndPhotoList = () => {
    const [todos, setTodos] = useState([]);
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((response) => response.json())
            .then((data) => setTodos(data));

        fetch("https://jsonplaceholder.typicode.com/photos")
            .then((response) => response.json())
            .then((data) => setPhotos(data));
    }, []);

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Tods</h1>
            <ul className="list-disc pl-5 mb-8">
                {todos.slice(0, 5).map((todo: any) => (
                    <li key={todo?.id}>
                        {todo.title} - {todo.completed ? "Completed" : "Pending"}
                    </li>
                ))}
            </ul>

            <h1 className="text-2xl font-bold mb-4">Photo List</h1>
            <ul>
                {photos.slice(0, 5).map((photo: any) => (
                    <li key={photo.id} className="border p-2 rounded shadow-md">
                        <p className="mt-2">{photo.title}</p>
                    </li>
                ))}
            </ul>
        </div>

    )
}

export default TodoAndPhotoList;
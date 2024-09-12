import React from "react";
import "./ToDoList.css";
const ToDoList = ({ id, title, completed, onDelete, checkComplete , users}) => {
    // console.log('title', title, id, completed, users)

    const handleDelete = () => {
        onDelete(id);
    };

    return (
        <div className="list">
            <div className="listItems">
                <label htmlFor={id} className={completed ? "active" : ""}>
                    <input
                        id={id}
                        type="checkbox"
                        checked={completed}
                        onChange={() => {checkComplete(id)

                        }}
                    />
                    {title}
                </label>
            </div>

            <span>
                <div className="buttons">
                    <button id="delete" onClick={handleDelete}>
                        Delete
                    </button>
                </div>
            </span>
        </div>
    );
};

export default ToDoList;

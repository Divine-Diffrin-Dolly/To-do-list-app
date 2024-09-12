import React from "react";
import './Form.css'

function Form({onAdd}) {

  const handleOnSubmit = (e) => {
    e.preventDefault();
    onAdd(e.target.name.value);
    e.target.name.value = "";


}

  return (
   <form onSubmit={handleOnSubmit}>
    <input placeholder='Add Todo items' name='name' type="text" className="inputFieldStyle" required/>
    <button className= 'submit' type="submit" onSubmit={handleOnSubmit}>Add</button>
   </form>
  );
}



export { Form };

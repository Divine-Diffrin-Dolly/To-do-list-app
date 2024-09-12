import React, { useEffect, useState } from "react";
import {Form} from "./Form";
import { Header } from "./Header";
import ToDoList from "./ToDoList";
import './LandingScreen.css';

function LandingScreen() {
    const [users, setUsers] = useState([]);
  const [upperLimit, addupperLimit] = useState(30);
  const jsonLink = 'https://dummyjson.com/todos';
  var lowerLimit = 25;

  // useEffect for continous fetching api on component
  useEffect(() => {
    fetchData();
  }, [])


  // fetching data arrow function
  const fetchData = async () => {

    await fetch(jsonLink)
      .then((res) => res.json())
      .then((data) => setUsers(data?.todos)
      )
      .catch((err) => {
        console.log(err);
      })
  }

  // add new todo
  const onAdd = async (name) => {
    console.log('name', name)
    
    await fetch('https://dummyjson.com/todos/add', {
      method: 'POST',
      body: JSON.stringify({
        todo: name,  
        completed: false,
        userId: 45,
      }),
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((response) => 
       
          response.json()
        
      )
      .then((data) => {
        console.log('add data', data)
        setUsers((users) => [...users, data]);
        // upperLimit=upperLimit-1;
        addupperLimit(upperLimit + 1);
      })
      .catch((err) => {
        console.log(err)
      });

  }

  // delelte todo
  const onDelete = async (id) => {
    await fetch('https://dummyjson.com/todos/' + id, {
      method: 'DELETE'
    }).then((response) => {
      if (response.status !== 200) {
        return
      }

      else {
        setUsers(users.filter((user) => {
          return user.id !== id;
        }))
        addupperLimit(upperLimit - 1);
      }
    }).catch((err) => {
      console.log(err);
    })
  }

  // function to handle edit dummy api


  // switch check isDone or not
  const switchComplete = id => {
    const newUser = [...users];
    newUser.forEach((user, index) => {
      if (index + 1 === id) {
        user.completed = !user.completed;
      }
    })
    setUsers(newUser)
  }
  // print userss on console
  // console.log(users)
  return (
    <>
      <div>
        <Header></Header>
      </div>
      <div className="toDoTextFieldStyle">
        <Form onAdd={onAdd}></Form>
      </div>
      <div>
        <div className="allList">
        {
          users.slice(lowerLimit, upperLimit).map((user) => (
            <ToDoList
              id={user.id}
              key={user.id}
              title={user.todo}
              completed={user.completed}
              onDelete={onDelete}
              checkComplete={switchComplete}
            />
          ))}
      </div> 
     </div> 
    </>
  );
}

export { LandingScreen };

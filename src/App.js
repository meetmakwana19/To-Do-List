// when "export default" is written like in Headers.js then just write "import Header"
import Header from "./MyComponents/Header";
// when "export const" is written like in Todos.js then just write "import {Todos}"
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
import React, { useState, useEffect } from "react";
import { AddTodo } from "./MyComponents/AddTodo";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { About } from "./MyComponents/About";


function App() {
  // let newVariable = 100; //used it for trial printing purpose

  // When initializing the app check this
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo=[]; //means if there are no todos on screen then make the array as empty
  }
  else{ //means if not null then get those todos from localStorage and parse it in JSON and put in initTodo
    initTodo=JSON.parse(localStorage.getItem("todos"));
  }

  // *****************************************************************************************************
  // making todos object
  const [todos, setTodos] = useState(initTodo);
  //passing initTodo in useState so to recover the added todos on reload

  // const [todos, setTodos] = useState([
    // {
    //   sno: 1,
    //   title: "Go to market",
    //   desc: "Go and buy potatoes, milk",
    // },
    // {
    //   sno: 2,
    //   title: "Go to mall",
    //   desc: "Go and buy clothes, belt",
    // },
    // {
    //   sno: 3,
    //   title: "Go to medical",
    //   desc: "Go and buy meds, masks",
    // },
  // ]);

  // *****************************************************************************************************
  // making a method for deleting a todo
  const onDelete = (todo) => {
    console.log("I am onDelete of todo", todo);
    
    // deleting in this way wont work in react
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);
    
    // to delete the TodoItems
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
      );
      localStorage.setItem("todos", JSON.stringify(todos));
    };
    
    // *****************************************************************************************************
    // making a method for adding a todo
    const addTodo=(title, desc)=>{
    console.log("Todo is getting added", title, desc);

    let sno;
    // to add when there are no todo-items on the web app
    if(todos.length===0){
      sno = 0;
    }
    else{
      // to make the sno of the next as tha +1 of the last one
      sno = todos[todos.length-1].sno + 1;
    }

    // *****************************************************
    // Structure of a todo
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }

    // ****************************************************** 
    // to add those myTodo on the screen
    setTodos([...todos, myTodo])
    console.log(myTodo);
  }

  // useEffect hook to avoid the weird behaviour of thw webapp 
  useEffect(() => {
    // to set the todo and save it in local storage 
    localStorage.setItem("todos", JSON.stringify(todos)); //run this whenever "todos" changes
  }, [todos])

// *****************************************************************************************************
  return (
    <>
    <Router>
      {/* Getting components in our app */}
      {/* added boolean operator too as searchBar */}
      <Header title="My Todos List" searchBar={true} />

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/" render={()=>{
            return(
              <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
              </>
            )
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      
      <Footer />
    </Router>
    </>
    // <div classNameName="App">
    //   <header classNameName="App-header">
    //     {/* JS is  there inside curly braces */}
    //     <div>{10+5}</div>
    //     <div>{newVariable}</div>
    //     <img src={logo} classNameName="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       classNameName="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;

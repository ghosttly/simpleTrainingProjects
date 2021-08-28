import React, { useState, useEffect } from "react";
import Form from "./compontents/Form/Form";
import styled from "styled-components";
import ToDoList from "./compontents/ToDoList/ToDoList";
import nextId from "react-id-generator";
const Wrapper = styled.div`
  font-family: "Poppins", sans-serif;
  margin: 0;
  padding: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: #0f2027; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #2c5364,
    #203a43,
    #0f2027
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #2c5364,
    #203a43,
    #0f2027
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

function App() {
  const [innerText, setInnerText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    const filterHandler = () => {
      switch (status) {
        case "finished":
          setFilteredTodos(todos.filter((todo) => todo.finished === true));
          break;
        case "unfinished":
          setFilteredTodos(todos.filter((todo) => todo.finished === false));
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    };
    filterHandler();
  }, [todos, status]);
  const setinputvalue = (e) => {
    setInnerText(e.target.value);
  };
  const settodoitems = (e) => {
    e.preventDefault();
    if (innerText) {
      setTodos([
        ...todos,
        {
          text: innerText,
          finished: false,
          deleted: false,
          id: nextId(),
        },
      ]);
      setInnerText("");
    } else alert("Write something!");
  };

  return (
    <Wrapper>
      <header>
        <h1 style={{ textAlign: "center" }}>ToDo App</h1>
        <Form
          innerText={innerText}
          setInnerText={setinputvalue}
          submit={settodoitems}
          setStatus={setStatus}
        />
      </header>
      <ToDoList
        todotext={innerText}
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </Wrapper>
  );
}

export default App;

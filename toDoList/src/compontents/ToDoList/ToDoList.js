import React from "react";
import styled from "styled-components";
import ToDoItem from "./ToDoItem";

const List = styled.ul`
  font: inherit;
  list-style: none;
`;

const todolist = (props) => {
  const items = props.filteredTodos.map((todo) => {
    return (
      <ToDoItem
        key={todo.id}
        id={todo.id}
        todotext={todo.text}
        todos={props.todos}
        setTodos={props.setTodos}
        todo={todo}
      />
    );
  });
  return <List>{items}</List>;
};

export default todolist;

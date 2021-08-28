import React from "react";
import styled from "styled-components";

const Item = styled.li`
  position: relative;
  width: min-content;
  max-width: 500px;
  font-size: 1.3rem;
  z-index: 1;
  background: rgba(255, 255, 255, 0.05);
  color: #a9afc9;
  overflow-wrap: break-word;
  border-radius: 5px 0 0 5px;
  margin-bottom: 20px;
  padding: 5px;
  backdrop-filter: blur(15px);
  text-decoration: ${(props) => (props.finished ? "line-through" : "")};
  ${(props) =>
    props.finished
      ? `{
    color: #050801;
    text-decoration: line-through`
      : ""}
  &::before {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -5px;
    width: 30px;
    height: 10px;
    border-radius: 10px;
    transition: 0.5s;
    background-color: #78e603;
    transition-delay: 0;
    box-shadow: 0 0 5px #78e603, 0 0 15px #78e603, 0 0 60px #78e603;
    z-index: -1;
    ${(props) =>
      props.finished
        ? `{bottom: 0;
    height: 100%;
    width: 100%;
    border-radius: 5px 0 0 5px;
    transition-delay: 0.2s;`
        : ""}
  }
`;
const Todoitemwrapper = styled.div`
  display: flex;
  margin-top: 10px;
  align-items: flex-start;
`;
const TodoBtn = styled.button`
  font: inherit;
  border: none;
  font-size: 1.3rem;
  padding: 5px 15px;
  background: rgba(255, 255, 255, 0.05);
  color: #a9afc9;
  cursor: pointer;
  border-radius: ${(props) => (props.noBorderRadius ? null : "0 5px 5px 0")};
  ${(props) =>
    props.finished && !props.deleteBtn
      ? `{background: #78E603;
    color: #050801;
    box-shadow: 0 0 5px #78E603, 0 0 25px #78E603, 0 0 50px #78E603,
      0 0 200px #78E603;`
      : ""}
  ${(props) =>
    props.deleteBtn
      ? `{background: #ED0E0E;
    color: #050801;
    box-shadow: 0 0 5px #ED0E0E, 0 0 25px #ED0E0E, 0 0 50px #ED0E0E,
      0 0 200px #ED0E0E; `
      : ""}
      &:hover {
    ${(props) =>
      !props.deleteBtn
        ? `{background: #78E603;
    color: #050801;
    box-shadow: 0 0 5px #78E603, 0 0 25px #78E603, 0 0 50px #78E603,
      0 0 200px #78E603;`
        : ""}
  }
`;

const todoitem = ({ todotext, setTodos, todos, todo }) => {
  const deleteItemHandler = () => {
    setTodos(todos.filter((item) => item.id !== todo.id));
  };
  const completeItemHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            finished: !item.finished,
          };
        }
        return item;
      })
    );
  };

  return todotext ? (
    <Todoitemwrapper>
      <Item finished={todo.finished}>{todotext}</Item>
      <TodoBtn
        finished={todo.finished}
        noBorderRadius
        onClick={completeItemHandler}
      >
        <i className="fas fa-check"></i>
      </TodoBtn>
      <TodoBtn deleteBtn onClick={deleteItemHandler}>
        <i className="fas fa-times"></i>
      </TodoBtn>
    </Todoitemwrapper>
  ) : null;
};

export default todoitem;

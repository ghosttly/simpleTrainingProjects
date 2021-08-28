import React from "react";
import styled from "styled-components";

const Input = styled.input`
  height: 28px;
  font-size: 1.5rem;
  border: none;
  background-color: #55cbfa;
  border-radius: 10px 0 0 10px;
  padding: 10px;
  letter-spacing: 3px;

  margin-bottom: 20vh;
  &:focus {
    outline: none;
    background: #03e9f4;
    color: #050801;
    box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
      0 0 200px #03e9f4;
  }
  &:hover {
    background: #03e9f4;
    color: #050801;
    box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
      0 0 200px #03e9f4;
  }
`;
const AddBtn = styled.div`
  font: inherit;
  height: 28px;
  line-height: 28px;
  font-size: 1.5rem;
  border: none;
  border-radius: 0 10px 10px 0;
  margin: 0 20px 0 0;
  padding: 10px;
  background-color: #55cbfa;
  cursor: pointer;
  text-align: center;

  &:hover {
    background: #03e9f4;
    color: #050801;
    box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
      0 0 200px #03e9f4;
  }
`;
const Select = styled.select`
  font: inherit;
  font-size: 1.5rem;
  background-color: #55cbfa;
  border: none;
  border-radius: 5px;
  height: 48px;
  &:focus {
    outline: none;
  }
  cursor: pointer;
`;
const FormWrap = styled.form`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
const Form = (props) => {
  const statusHandler = (e) => {
    props.setStatus(e.target.value);
  };

  return (
    <FormWrap onSubmit={props.submit}>
      <Input
        type="text"
        placeholder="Add to-do.."
        value={props.innerText}
        onChange={props.setInnerText}
      />
      <AddBtn onClick={props.submit}>
        <div>Add</div>
      </AddBtn>
      <Select onChange={statusHandler}>
        <option value="all">All</option>
        <option value="finished">Finished</option>
        <option value="unfinished">Unfinished</option>
      </Select>
    </FormWrap>
  );
};

export default Form;

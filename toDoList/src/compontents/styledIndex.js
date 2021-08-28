import styled from "styled-components";

export const Btn = styled.button`
  height: ${(props) => (props.height ? props.height : null)};
  font: inherit;
  border: none;
  border-radius: ${(props) =>
    props.borderradius ? props.borderradius : "5px"};
  margin: ${(props) => (props.margin ? props.margin : "0 20px 0 10px")};
  padding: 5px;
  font-size: ${(props) => (props.fs ? props.fs : "1.5rem")};
  background-color: ${(props) => props.bgc};
  cursor: pointer;
  line-height: ${(props) => props.fs};
`;

import styled from "styled-components";

let FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    color: ${(props) => (props.valid ? "black" : "red")};
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${(props) => (props.valid ? "#ccc" : "red")};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }
`;

export default FormControl;

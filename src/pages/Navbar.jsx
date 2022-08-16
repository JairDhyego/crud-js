import React from "react";
import styled from "styled-components";

function Navbar() {
  return (
    <Container>
      <h1>Crud</h1>
      <button>Add Users</button>
    </Container>
  );
}

const Container = styled.div`
  background: linear-gradient(to top right, #0c4a6e, #0ea5e9);
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0.5rem 2.5rem;

  h1 {
    font-size: 1.8rem;
    font-weight: 400;
    color: white;
  }

  button {
    width: 12rem;
    background-color: fff;
    color: #0ea5e9;
    font-weight: 700;
    font-size: 1.25rem;
    height: 3rem;
    border-radius: 1rem;
    border: none;
    cursor: pointer;
  }
`;

export default Navbar;

import React, { useState } from "react";
import styled from "styled-components";

const StyledList = styled.div`
  border: 1px solid #e76f51;
  margin: 2% 5% 2% 23%;
  width: 50%;
  padding: 1%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  background-color: rgba(249, 225, 201, 0.8);
  color: #9b2226;

  button{
    font-size: 15px;
    padding: 5%;
    border-radius: 10%;
    background-color: #ddbea9;
    color: #9b2226;
    &:hover{
      background-color: #d69b60;
      color: #f5f8fd;
    }
  }

  li{
    font-weight: 600;
  }
`


const List = (props) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open)
  };

  
  return (
    <StyledList>
    <div className='list-wrapper'>
      <h3>{props.character.name}</h3>
      <button className='toggle' onClick={toggleOpen}>{open ? 'close' : 'open' } </button>
      {open && 
      <ul>
        <li>Gender: {props.character.gender}</li>
        <li>Height: {props.character.height}</li>
        <li>Mass: {props.character.mass}</li>
        <li>Skin-Color: {props.character.skin_color}</li>
      </ul>
      }
    </div>
    </StyledList>
  );
}

export default List;
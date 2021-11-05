import React from "react";

const List = (props) => {
  const open = () => {
    
  }
  return (
    <div>
      <h3>{props.character.name}</h3>
      <button onClick={open}>{props.character.birth_year}</button>
      <ul>
        <li>{props.character.gender}</li>
        <li>{props.character.height}</li>
        <li>{props.character.mass}</li>
        <li>{props.character.skin_color}</li>
      </ul>
      
    </div>
  )
}

export default List;
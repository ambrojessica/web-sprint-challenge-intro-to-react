import React, { useState } from "react";

const List = (props) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open)
  };

  
  return (
    <div>
      <h3>{props.character.name}</h3>
      {open && 
      <ul>
        <li>Gender: {props.character.gender}</li>
        <li>Height: {props.character.height}</li>
        <li>Mass: {props.character.mass}</li>
        <li>Skin-Color: {props.character.skin_color}</li>
      </ul>
      }
      <button onClick={toggleOpen}>{open ? 'close' : 'open' } </button>
    </div>
  )
}

export default List;
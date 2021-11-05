//import
import React from 'react';
import List from './List';


//create function
const Cast = (props) => {

  return (
    <div>
       { props.characters.map(character => (
        <List character={character} key={props.character} />
      )) } 
    </div>
  )
}

export default Cast;
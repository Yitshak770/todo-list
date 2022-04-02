import React from 'react';
import trash from './trash.png';





function Tache(props) {
  
  return (   
    <tr className="lignes">
      <td className="items">
        {props.value}
      </td>
      <td className="delete-item" >
        <img className="poubelle" src={trash} onClick={props.onDelete} />
      </td>
    </tr>      
  );
}

export default Tache;

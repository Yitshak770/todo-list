import React from 'react';
import trash from './trash.png';





function Tache({onDelete, tache}) {
  
  return (   
    <tr className="lignes">
      <td className="items">
        {tache.value}
      </td>
      <td className="delete-item" >
        <img className="poubelle" src={trash} alt="" onClick={()=>onDelete(tache)} />
      </td>
    </tr>      
  );
}

export default Tache;

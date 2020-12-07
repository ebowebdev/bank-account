import React, {useContext} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import { Context } from '../Context';
function Activity({activity}){
  const {removeAction} = useContext(Context)
  
  return (
    <div className="activity" style={{borderRight: `8px solid ${activity.add ? 'green' : 'red'}`}}>
      <button onClick={()=>removeAction(activity.id)}>
        <FontAwesomeIcon icon={faTrashAlt} style={{color: '#'}}></FontAwesomeIcon>
      </button>
      <div className="activity-box">
      <p>{activity.title}</p>
      <span>{activity.mount}$</span>
      </div>
    </div>
  )
}

export default Activity
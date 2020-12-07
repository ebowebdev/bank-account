import React, {useContext} from 'react';
import { Context } from '../Context';
import Activity from './Activity';

function Activities(){
  const {theActions} = useContext(Context)
  return (
    <div>
      {theActions.length > 0 ? 
      theActions.map(activity => (<Activity activity={activity} key={activity.id}/>)) 
      : <div className="activity"><h4 style={{textAlign:'center', width:'100%'}}>you dont have action</h4></div>
      }
    </div>
  )
}

export default Activities
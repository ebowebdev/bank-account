import React ,{useContext} from 'react';
import {Context} from '../Context';

function Header(){
  const {sold, credit} = useContext(Context)

  return (
    <div className="header">
      <h1 className="header-title">Banc Count</h1>
      <div className="header-box">
        <div className="box header-box-sold">
          <h3>Sold</h3>
          <p>{sold}$</p>
        </div>
        <div className="box header-box-credit">
          <h3>Credit</h3>
          <p>{credit}$</p>
        </div>
      </div>
    </div>
  )
}

export default Header
import React, { useContext } from 'react';
import { Context } from '../Context';

function AddSpend(){
  const {addMoney,setAddMoney,spendMoney,setSpendMoney} = useContext(Context)
  const toggleAdd =()=>{
    if(addMoney) return;
    setAddMoney(true)
    setSpendMoney(false)
  }
  const toggleSpend =()=>{
    if(spendMoney) return;
    setAddMoney(false)
    setSpendMoney(true)
  }
  return (
    <div className="add-spend">
      <button onClick={toggleAdd}>Add Money</button>
      <button onClick={toggleSpend}>Spend Money</button>
    </div>
  )
}

export default AddSpend
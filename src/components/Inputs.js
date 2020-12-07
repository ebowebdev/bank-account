import React, {useState, useContext} from 'react';
import { Context } from '../Context';

function Inputs(){
  const {theActions,
    setTheActions, 
    addMoney, 
    spendMoney,
    changeCredit,
    changeSold
  } = useContext(Context);
  let [title, setTitle] = useState('');
  let [mount, setMount] = useState('');
  const onChangeTitle =(e)=>{
    title = setTitle(e.target.value);
  }
  const onChangeMount =(e)=>{
    mount = setMount(e.target.value);
  }
  const submit =(e)=>{
    e.preventDefault()
    setTheActions([{
      id: Math.random()*10,
      title,
      mount,
      add: addMoney ? true : false,
    }, ...theActions])
    if(spendMoney){
      changeCredit(mount)
    }
    if(addMoney){
      changeSold(mount)
    }
    setTitle('');
    setMount('');
  }

  return (
    <div className="inputs">
      <form onSubmit={submit}>
        <div className="input-box">
          <label>Descrition</label>
          <input type="text" value={title} name="title" onChange={onChangeTitle}/>
        </div>
        <div className="input-box">
          <label>Mount</label>
          <input type="number" value={mount} name="mount" onChange={onChangeMount}/>
        </div>
        <button>{addMoney ? 'Add Money' : 'Buy'}</button>
      </form>
    </div> 
  )
}

export default Inputs
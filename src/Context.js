import React, {useState} from 'react';

export const Context = React.createContext();

export function ContextProvider(props){
  let [sold, setSold] = useState(508)
  let [credit, setCredit] = useState(42)
  const [theActions, setTheActions] = useState([
    {id: 1, title: 'flower', mount: 25, add: false},
    {id: 2, title: 'book', mount: 17, add: false},
    {id: 3, title: 'gift', mount: 50, add: true},
  ])
  const [addMoney, setAddMoney] = useState(false)
  const [spendMoney, setSpendMoney] = useState(false)
  const changeSold =(mount)=>{
    setSold(parseInt(parseInt(sold)+parseInt(mount)))
  }
  const changeCredit =(mount)=>{
    setCredit(parseInt(credit)+parseInt(mount))
    setSold(parseInt(sold)-parseInt(mount))
  }
  const removeAction =(id)=>{
    setTheActions(theActions.filter(action => action.id !== id))
  }
  return (
    <Context.Provider value={{
      changeSold, changeCredit,
      theActions, setTheActions,
      addMoney, setAddMoney,
      spendMoney, setSpendMoney,
      sold, setSold,
      credit, setCredit,
      removeAction
    }}>
      {props.children}
    </Context.Provider>
  )
}
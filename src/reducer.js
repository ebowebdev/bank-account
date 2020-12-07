export const initializeState = {
  theActions: [
    { id: 1, title: 'flower', mount: 25},
    { id: 2, title: 'book', mount: 17},
    { id: 3, title: 'dinner', mount: 32},
  ]
}

export const reducer =(state , action)=>{
  switch(action.type){
    case 'ADD_ACTION':{
      return {
        ...state,
        theActions: [action.payload,...state.theActions]
      }
    }
    default: {
      return state
    }
  }
}
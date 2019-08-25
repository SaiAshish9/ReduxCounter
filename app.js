
var initialState={
  count:0
}

function rootReducer(state=initialState,action){
  // debugger
if(action.type==="INCREMENT"){
let newState=Object.assign({},state)
  newState.count++;
  return newState
}if(action.type==="DECREMENT"){
let newState=Object.assign({},state)
  newState.count--;
  return newState
}
return state
}


function increment(){
  return {type:"INCREMENT"}
}
var store=Redux.createStore(rootReducer)



$(document).ready(()=>{
  $('#increment').on('click',()=>{
store.dispatch({
  type:"INCREMENT"
})



let currentState=store.getState()
$('#counter').text(currentState.count)
  })
  $('#decrement').on('click',()=>{
    store.dispatch({
      type:"DECREMENT"
    })
    let currentState=store.getState()
    $('#counter').text(currentState.count)
  })

})




console.log(store);
console.log(store.dispatch(increment()));
console.log(store.dispatch({type:"INCREMENT"}));
console.log(store.getState());
console.log(store.dispatch(increment()));

console.log(store.dispatch({type:"DECREMENT"}));
console.log(store.getState());
console.log(store.dispatch({type:'hello'}));

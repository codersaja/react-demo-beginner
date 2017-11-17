import { combineReducers ,createStore } from "redux";

const userReducer = function (state = {}, actions) {
  switch(actions.type){
    case "CHANGE_NAME":{
      state = {...state, name: actions.payload};
      break;
    }
    case "CHANGE_AGE":{
      state = {...state, age: actions.payload};
      break;
    }
  }
  return state;
}

const tweetsReducer = function (state = {}, actions) {
  return state;
}

const reducers = combineReducers({
  user: userReducer,
  tweets: tweetsReducer
});

const store = createStore(reducers);

store.subscribe(() => {
  console.log("store changed ", store.getState())
})

store.dispatch({ type: "CHANGE_NAME", payload: "Will" })
store.dispatch({ type: "CHANGE_AGE", payload: 35 })
const redux = require('redux');
const createStore = redux.createStore;
const combineReducer = redux.combineReducers;

const counterReducer = require('./reducers/CounterReducer');
const listReducer = require('./reducers/ListReducer')

const { incrementAction, decrementAction } = require('./actions/CounterActions');
const { addItemAction } = require('./actions/ListActions');


const allReducers  = combineReducer({
    counter: counterReducer,
    list: listReducer
})

const store = createStore(allReducers);


console.log(store.getState())
// console.log(store.getState().counter)
// console.log(store.getState().list)

store.subscribe( () => { console.log(store.getState()) } )

store.dispatch(addItemAction('um novo item'));
store.dispatch(decrementAction(3));
store.dispatch(incrementAction(4));

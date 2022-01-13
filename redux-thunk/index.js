// Redux-thunk permite que a gente tenha um action creator que não retorna um item puro e sim uma função
// dessa maneira, a gente pode executar uma coisa que não vai ser resolvida naquele segundo
// e quando a função for resolvida, executaremos o dispatch de uma action

const {createStore, applyMiddleware} = require('redux');
const fetch = require('cross-fetch');
const thunk = require('redux-thunk').default;


const initialState = [{id: 0, title: 'Tarefa', completed: false}]


const addItem = (item)=> { return {type: 'ADD_ITEM', payload: item} }

const loadItemAndAdd = () => {
    return (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/todos/1').then(res => res.json().then(json => {
            dispatch(addItem(json))
        }))
    }
}


const listReducer = ( state = initialState, action ) => {

    switch (action.type) {

        case 'ADD_ITEM':
            return [...state, action.payload];

        default:
            return state;

    }

}


const store = createStore(listReducer, applyMiddleware(thunk));

// store.dispatch(addItem({id: 1, title:'Nova tarefa', completed: true}))

store.dispatch(loadItemAndAdd());

console.log(store.getState());


store.subscribe( () => { console.log(store.getState()) } )


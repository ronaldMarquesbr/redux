module.exports = function listReducer(state = [], action){ // Pode também exportar funções setas

    switch(action.type){

        case 'ADD_ITEM':
            return [...state, action.payload];

        default:
            return state

    }

}
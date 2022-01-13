const addItemAction = (item) => { return { type: 'ADD_ITEM', payload: item } };

module.exports = { addItemAction }; // poderia ser também: module.exports = { addItem: addItemAction }; 
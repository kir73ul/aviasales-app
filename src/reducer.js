
const findIdx = (arr, key) => arr.findIndex((el) => el.key === key);

const getNewArr = (arr, idx, newItem) => {
    if (!newItem) {
      return [...arr.slice(0, idx), ...arr.slice(idx + 1)];
    }
    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  };

  const toggleItemProperty = (arr, key, propName) => {
    const idx = findIdx(arr, key);
    const newItem = { ...arr[idx], [propName]: !arr[idx][propName] };
    return getNewArr(arr, idx, newItem);
  };
/*
  const setItemProperty = (arr, key, propName, newValue) => {
    const idx = findIdx(arr, key);
    const newItem = { ...arr[idx], [propName]: newValue };
    return getNewArr(arr, idx, newItem);
  };
*/
const setAll = (arr, propName, newValue) => {
    return arr.map( ({ ...rest }) => {
        return ({ ...rest, [propName]: newValue });
    } )
}

const initialState = [
        {key: 'all', selected: false, value: 'Все'},
        {key: 'without', selected: false, value: 'Без пересадок'},
        {key: 'one', selected: false, value: 'Одна пересадка'},
        {key: 'two', selected: false, value: 'Две пересадки'},
        {key: 'three', selected: false, value: 'Три пересадки'},
    ];

export default function reducer (state = initialState, action) {

    const { type, key } = action

    switch (type) {
        case 'TOGGLE_CHECKBOX':
            return toggleItemProperty(state, key, 'selected')

        case 'TOGGLE_ALL' :
            return setAll(state, 'selected', state[0].selected)
    
        default:
            return state
    }
}

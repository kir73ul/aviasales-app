/* eslint-disable no-unused-expressions */

const initialState = {
  all: false,
  without: false,
  one: false,
  two: false,
  three: false,
  priority: 'cheapest',
}

const checks = ['without', 'one', 'two', 'three']

const setKey = (obj, key, value) => {
  const newObj = {...obj, [key]: value}
  const keyCounter = checks.reduce((acc, item) => newObj[item] ? acc + 1 : acc, 0)
  
  keyCounter === 4 ? newObj.all = true : newObj.all = false
  return newObj
}

const setAllKeys = (obj, value) => {
  const { priority } = obj
  const newObj = Object.assign({}, obj)
  for (const key in newObj) {
    newObj[key] = value;
  }
  return {...newObj, priority}
}

const setPriority = (obj, value) => ({...obj, priority: value})

export default function reducer (state = initialState, action) {

    const { type, key, value } = action

    switch (type) {
        case 'TOGGLE_CHECKBOX':
          return setKey(state, key, value)

        case 'TOGGLE_ALL_CHECKBOXES' :
            return setAllKeys(state, value)

        case 'TOGGLE_PRIORITY' :
            return setPriority(state, value)
    
        default:
            return state
    }
}


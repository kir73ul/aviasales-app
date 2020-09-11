
const initialState = {
    priority: 'cheapest',
  };
  
  export default function priorityFilter(state = initialState, action) {
    const { type, value } = action;
  
    switch (type) {
  
      case 'TOGGLE_PRIORITY':
        return { priority: value }
  
      default:
        return state;
    }
  }
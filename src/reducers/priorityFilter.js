export default function priorityFilter(state = 'cheapest', action) {
  const { type, value } = action;

  switch (type) {
    case 'TOGGLE_PRIORITY':
      return value;

    default:
      return state;
  }
}

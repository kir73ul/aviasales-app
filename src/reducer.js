
export default function reducer (state = 0, action) {

    switch (action.type) {
        case 'TOGGLE_CHECKBOX':
            
            return !state[action.key]
    
        default:
            return state
    }
}

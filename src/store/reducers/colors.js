import C from '../constants'
import color from './color'

export default (state = [], action) => {
    // console.log(action)
    switch(action.type) {
        case C.ADD_COLOR:
            return [...state, color({}, action)]
        case C.RATE_COLOR:
            return state.map(item => (
                color(item, action)
            ))
        case C.REMOVE_COLOR:
            return state.filter(item => (
                item.id !== action.id
            ))
        default: 
            return state
    }
}

// export default (state ={}, action) => {
//     return state
// }
import C from '../constants'
import {v4} from 'uuid'


export const rateColor = (id, rating) => {
    return {
        type: C.RATE_COLOR,
        id,
        rating
    }
}

export const removeColor = id => {
    return {
        type: C.REMOVE_COLOR,
        id
    }
}

export const addColor = (title, color) => {
    return {
        type: C.ADD_COLOR,
        id: v4(),
        title,
        color,
        rating: 0,
        timestamp: new Date()
    }
}

export const changeRoute = () => {
    return {
        type: "API"
    }
}

export const sortColors = (sortedBy) => {
    return (sortedBy == 'rating') ?
            {
                type: C.SORT_COLOR,
                sortBy: 'SORTED_BY_RATING'
            } : (sortedBy == 'title') ?
            {
                type: C.SORT_COLOR,
                sortBy: 'SORTED_BY_TITLE'
            } : {
                type: C.SORT_COLOR,
                sortBy: 'SORTED_BY_DATE'
            }
}


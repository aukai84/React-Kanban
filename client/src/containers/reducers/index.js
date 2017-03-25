import {ADD_CARD} from '../actions';

const initialState = {
    cards: []
}


function cards(state = initialState, action) {
    switch(action.type){
        case ADD_CARD:
            return Object.assign({}, state, {
                books: [
                    ...state.cards,
                    {
                        title: action.title,
                        priority: action.priority,
                        status: action.status,
                        created_by: action.created_by,
                        assigned_to: action.assigned_to
                    }
                ]
            })
            default: return state;
    }
}

export default cards;
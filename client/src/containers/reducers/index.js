import {ADD_CARD, UPDATE_STATUS, DELETE_CARD} from '../actions';

const initialState = {
    cards: []
}


function cards(state = initialState, action) {
    switch(action.type){
        case ADD_CARD:
            return Object.assign({}, state, {
                cards: [
                    ...state.cards,
                    {   id: action.id,
                        title: action.title,
                        priority: action.priority,
                        status: action.status,
                        created_by: action.created_by,
                        assigned_to: action.assigned_to
                    }
                ]
            });
        case UPDATE_STATUS:
            let cardsAfterStatus = state.cards.map(card => {
                if(card.id === action.id){
                    card.status = action.status;
                    return card;
                } else {
                    return card;
                }
            })
            return Object.assign({}, state, {
                cards: [
                    ...cardsAfterStatus
                ]
            });
        case DELETE_CARD:
            let cardsAfterDelete = state.cards.filter(card => {
                return card.id != action.id
            })
            return Object.assign({}, state, {
                cards: [
                    ...cardsAfterDelete
                ]
            });
            default:
                return state;
    }
}

export default cards;
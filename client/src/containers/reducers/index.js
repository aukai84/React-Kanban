import {ADD_CARD, UPDATE_STATUS} from '../actions';
console.log(UPDATE_STATUS)

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
            let newCards = state.cards.map(card => {
                console.log(card)
                console.log(action)
                if(card.id === action.id){
                    card.status = action.status;
                    return card;
                } else {
                    return card;
                }
            })
            console.log(newCards)
            return Object.assign({}, state, {
                cards: [
                    ...newCards
                ]
            })
            default:
                return state;
    }
}

export default cards;
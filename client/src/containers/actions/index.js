export const ADD_CARD = 'ADD_CARD';

export function addCard(title, priority, status, created_by, assigned_to){
    return {
        type: ADD_CARD,
        title,
        priority,
        status,
        created_by,
        assigned_to
    }

}

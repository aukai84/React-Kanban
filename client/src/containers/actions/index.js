export const ADD_CARD = 'ADD_CARD';
export const UPDATE_STATUS = 'UPDATE_STATUS';

export function addCard(id,title, priority, status, created_by, assigned_to){
    return {
        type: ADD_CARD,
        id,
        title,
        priority,
        status,
        created_by,
        assigned_to
    }

}

export function updateStatus(id,status){
    return {
        type: UPDATE_STATUS,
        id,
       status
    }
}

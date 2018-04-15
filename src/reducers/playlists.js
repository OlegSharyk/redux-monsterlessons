const initialState = [
    'My home playlist',
    'My office playlist'
]

export default function playlist(state = initialState, action) {
    //console.log(action);

    if(action.type === 'ADD_PLAYLIST') {
        return [
            ...state,
            action.payload
        ]
    } else
    if (action.type === 'DELETE_PLAYLIST') {
        return [
            ...state,
            action.payload
        ]
    }

    return state;
}
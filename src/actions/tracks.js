var mockApiData = [
    {
        id:1,
        name: 'Eneter sendman 1'
    },
    {
        id:2,
        name: 'Eneter sendman 2'
    },
    {
        id:3,
        name: 'Eneter sendman 3'
    },
    {
        id:4,
        name: 'Eneter sendman 4'
    },
    {
        id:5,
        name: 'Eneter sendman 5'
    }
];

export const getTracks = () => dispatch => {
    setTimeout(() => {
        console.log('I got tracks');
        dispatch({type: 'FETCH_TRACKS_SUCCESS', payload: mockApiData})
    }, 2000)
};
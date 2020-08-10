const initialState = {
    count : 1,
    users : [
        {userId: 12345, userName: 'Anirudha', labName: 'Vedanta Memorial Hospitals, Biogen Labs'}
    ]
}

export default function userReducer(state=initialState, action) {
    switch(action.type){
        default: return state;
    }
}
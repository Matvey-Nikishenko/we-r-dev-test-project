import {combineReducers} from 'redux';


const initialState = {
    showModal: false,
    date: null,
    monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'Novermber', 'December'],
    dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_MODAL': 
            return {
                ...state,
                showModal: !state.showModal
            }
        case 'CHANGE_DATE':
            return {
                ...state,
                date: action.date
            }  
        default: 
        return state    
    }
};

export default combineReducers({reducer});
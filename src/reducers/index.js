import { combineReducers } from "redux";


// const educationReducer = (action) => {
//     if(action.type == "FETCH_EDUCATIONS"){
//         return action.payload;
//     }
// }

const fetchEducationItems = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_EDUCATION_ITEMS':
            return action.payload;
        default:
            return state;
    };
};

const fetchWorkItems = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_WORK_ITEMS':
            return action.payload;
        default:
            return state;
    };
};

const fetchPersonalItems = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_PERSONAL_ITEMS':
            return action.payload;
        default:
            return state;
    };
};

export default combineReducers({
    EducationItems: fetchEducationItems,
    WorkItems: fetchWorkItems,
    PersonalItems: fetchPersonalItems
});


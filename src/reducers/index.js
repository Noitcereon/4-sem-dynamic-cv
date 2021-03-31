import { combineReducers } from "redux";

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

const fetchPersonalInfo = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_PERSONAL_INFO':
            return action.payload;
        default:
            return state;
    };
};
const fetchSkills = (state = [], action) => {
    switch (action.type){
        case 'FETCH_SKILLS':
            return action.payload;
            default:
                return state;
    }
}

export default combineReducers({
    EducationItems: fetchEducationItems,
    WorkItems: fetchWorkItems,
    PersonalInfo: fetchPersonalInfo,
    Skills: fetchSkills
});


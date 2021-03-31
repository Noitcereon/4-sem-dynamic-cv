
const fetchEducationItems = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_EDUCATION_ITEMS':
            return action.payload;
        default:
            return state;
    };
};

export default fetchEducationItems;
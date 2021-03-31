
const fetchPersonalInfo = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_PERSONAL_INFO':
            return action.payload;
        default:
            return state;
    };
};

export default fetchPersonalInfo;
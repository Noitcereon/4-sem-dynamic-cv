
const fetchWorkItems = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_WORK_ITEMS':
            return action.payload;
        default:
            return state;
    };
};

export default fetchWorkItems;
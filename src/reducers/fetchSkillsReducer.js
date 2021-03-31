
const fetchSkills = (state = [], action) => {
    switch (action.type){
        case 'FETCH_SKILLS':
            return action.payload;
            default:
                return state;
    }
}

export default fetchSkills;
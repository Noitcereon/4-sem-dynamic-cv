import cvApi from "../apis/cv-api";

export const fetchEducationItems = () => async dispatch => {
    const respose = await cvApi.get("CVItems/cat/Education/");
    dispatch({ type: "FETCH_EDUCATION_ITEMS", payload: respose.data })
};

export const fetchWorkItems = () => async dispatch => {
    const respose = await cvApi.get("CVItems/cat/WorkItem/");
    dispatch({ type: "FETCH_WORK_ITEMS", payload: respose.data })
};

export const fetchPersonalInfo = () => async dispatch => {
    const respose = await cvApi.get("Personal/1");
    dispatch({ type: "FETCH_PERSONAL_INFO", payload: respose.data })
};

export const fetchSkills = () => async dispatch => {
    const respose = await cvApi.get("Skill/");
    dispatch({ type: "FETCH_SKILLS", payload: respose.data })
};
export const postSkill = (skillData) => async (dispatch) => {
    const respose = await cvApi.post("Skill/", skillData)
    .then(() => {
        console.log(respose.data);
        dispatch({ type: "POST_SKILL"});
        return;
    })
    .catch((e) => {
        console.log(respose.data);
        console.log(e);
    })
};

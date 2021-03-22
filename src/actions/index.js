// action creater stuff

import cvApi from "../apis/cv-api";
const fetchEducationItems = () => async dispatch => {
    const respose = await cvApi.get("");
    dispatch({ type: "FETCH_EDUCATION_ITEMS", payload: respose.data })
};
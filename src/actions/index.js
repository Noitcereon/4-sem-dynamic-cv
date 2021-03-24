// action creater stuff

import cvApi from "../apis/cv-api";

export const fetchEducationItems = () => async dispatch => {
    const respose = await cvApi.get("CVItems/cat/Education/");
    dispatch({ type: "FETCH_EDUCATION_ITEMS", payload: respose.data })
};

export const fetchWorkItems = () => async dispatch => {
    const respose = await cvApi.get("CVItems/cat/WorkItem/");
    dispatch({ type: "FETCH_WORK_ITEMS", payload: respose.data })
};

export const fetchPersonalItems = () => async dispatch => {
    const respose = await cvApi.get("Personal/1");
    dispatch({ type: "FETCH_PERSONAL_ITEMS", payload: respose.data })
};


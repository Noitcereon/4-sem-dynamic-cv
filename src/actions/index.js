// action creater stuff

import cvApi from "../apis/cv-api";
const fetchCV = () => async dispatch => {
    const respose = await cvApi.get("[OUR API URL HERE]");
    dispatch({ type: "FETCH_CV", payload: respose.data })
};
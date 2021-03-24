// action creater stuff

import cvApi from "../apis/cv-api";

export const fetchEducationItems = () => async dispatch => {
    const respose = await cvApi.get("CVItems/cat/Education/");
    dispatch({ type: "FETCH_EDUCATION_ITEMS", payload: respose.data })
};

// export default fetchEducationItems
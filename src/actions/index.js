// action creater stuff
const fetchCV = () => async dispatch => {
    const respose = await cv-api.get("[OUR API URL HERE]");
    dispatch({ type: "FETCH_CV", payload: respose.data })
};
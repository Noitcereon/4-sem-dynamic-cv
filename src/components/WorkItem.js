import React from "react";
import { connect } from "react-redux";

const workItem = (props) => {
    return (
        <div className="row work-item">
            <div className="col-md-3">
                {props.dateFrom} -
                {props.dateTo}
            </div>
            <div className="col-md-9">
                <h3>{props.title} </h3>
                <h4>{props.location}</h4>
                <div>{props.description}</div>
            </div>
        </div>
    )
};

// const mapStateToProps = (state) => {

// }

export default connect()(workItem);
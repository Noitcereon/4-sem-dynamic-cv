import React from "react";
import { connect } from "react-redux";


const Skill = (props) => {
    return (
        <li key={props.id}>
            {props.description}
        </li>
    );
}


export default connect()(Skill);
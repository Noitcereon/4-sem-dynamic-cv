import React from "react";
import { connect } from "react-redux";


const educationItem = () => {
    return (
        <div class="row work-item">
            <div class="col-md-3">
                09/2019 -
                Current
        </div>
            <div class="col-md-9">
                <h3>Datamatiker </h3>
                <h4>Zealand Academy, Roskilde</h4>
                <ul>
                    <li>Talking</li>
                    <li>Chatting</li>
                    <li>Conversing</li>
                    <li>Monologing</li>
                </ul>
            </div>
        </div>
    );
}

const mapStateToProps = () => {
    
}

export default connect(mapStateToProps)(educationItem);
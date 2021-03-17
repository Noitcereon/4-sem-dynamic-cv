import React from "react";
import { connect } from "react-redux";


const workItem = () => {
    return (
        <div class="row work-item">
            <div class="col-md-3">
                03/2015 -
                08/2018
        </div>
            <div class="col-md-9">
                <h3>Associate Sales Consultant </h3>
                <p>In the Social Institute of Salesmen</p>
                <ul>
                    <li>Talking</li>
                    <li>Chatting</li>
                    <li>Conversing</li>
                    <li>Monologing</li>
                </ul>
            </div>
        </div>
    )};

const mapStateToProps = (state) => {
    
}

export default connect(mapStateToProps)(workItem);
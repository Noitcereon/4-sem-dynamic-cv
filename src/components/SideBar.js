import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPersonalItems } from "../actions";
//import ContactInfo from "./ContactInfo";

class SideBar extends Component {
    componentDidMount() {
        this.props.fetchPersonalItems();
    }
    render() {
        return (
            <div>
                <div id="sidebar-header">
                    <h1>{this.props.personalInfo.name}</h1>
                </div>
                <section>
                <div className="section-header">
                    <h2>Contact</h2>
                </div>
                <div className="section-content">
                    <b>Address:</b> {this.props.personalInfo.address}<br />
                    <b>Phone:</b> {this.props.personalInfo.phone}<br />
                    <b>E-mail:</b> {this.props.personalInfo.email}<br />
                </div>
            </section>
                <section>
                    <div className="section-header">
                        <h2>Skills</h2>
                    </div>
                    <div className="section-content">
                        <ul>
                            <li>Skill 1</li>
                            <li>C#</li>
                            <li>Skill 2 with more text</li>
                            <li>Skill 3 with an overly long text</li>
                            <li>Skill 4 minimum</li>
                        </ul>
                    </div>
                </section>
            </div> 
        )}
}

// const mapStateToProps = () => {

// }

const mapStateToProps = (state) => {
    return { personalInfo: state.PersonalInfo }
}

export default connect(mapStateToProps, {fetchPersonalItems})(SideBar)
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPersonalInfo, fetchSkills } from "../actions";
import SkillList from './SkillList';
//import ContactInfo from "./ContactInfo";

class SideBar extends Component {
    componentDidMount() {
        this.props.fetchPersonalInfo();
        this.props.fetchSkills();
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
                    <b>Address:</b> {this.props.personalInfo.adresse}<br />
                    <b>Phone:</b> {this.props.personalInfo.phone}<br />
                    <b>E-mail:</b> {this.props.personalInfo.email}<br />
                </div>
            </section>
                <section>
                    <div className="section-header">
                        <h2>Skills</h2>
                    </div>
                    <div className="section-content">
                        <SkillList skills={this.props.skills}/>
                    </div>
                </section>
            </div> 
        )}
}

const mapStateToProps = (state) => {
    return { 
        personalInfo: state.PersonalInfo,
        skills: state.Skills
    }
}

export default connect(mapStateToProps, {fetchPersonalInfo, fetchSkills})(SideBar)
import React, { Component } from "react";
import { connect } from "react-redux";

class SideBar extends Component {
    render() {
        return (
            <div>
                <div id="sidebar-header">
                    <h1>Thomas B. Andersen</h1>
                </div>
               <ContactInfo/>
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
        )
    }
}

const mapStateToProps = () => {

}

export default connect(mapStateToProps)(SideBar);
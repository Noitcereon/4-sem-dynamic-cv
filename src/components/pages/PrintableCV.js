import React, { Component } from 'react';
import { connect } from 'react-redux'
import SideBar from '../SideBar';
import EducationList from '../EducationList';
import WorkList from '../WorkList';
// import {fetchEducationItems} from '../../actions';

class PrintableCV extends Component {
    render() {
        return (
            <div className="row">
                <section id="sidebar" className="col-md-4">
                    <SideBar />
                </section>

                <main className="col-md-8">
                    <section>
                        <div className="row main-header">
                            <h2>Education</h2>
                        </div>
                        {/* Retrieve EducationItems from api. */}
                        <EducationList/>
                    </section>
                    <section>
                        <div className="row main-header">
                            <h2>Work Experience</h2> 
                        </div>
                        {/* Retrieve WorkItems from api. (the WorkItems below simulates it) */}
                        <WorkList/>
                    </section>
                </main>
            </div>
        )
    }
}

// const mapStateToProps = () => {

// }

export default connect()(PrintableCV);



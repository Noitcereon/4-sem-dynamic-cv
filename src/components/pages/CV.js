import React, { Component } from 'react';
import { connect } from 'react-redux'
import SideBar from '../SideBar';
import WorkItem from '../WorkItem';
import EducationList from '../EducationList';
import { fetchEducationItems } from '../../actions';

class CV extends Component {
    componentDidMount() {
        this.props.fetchEducationItems();
    }

    render() {
        console.log(this.props.EducationItems) //- lige en test på at dataen kan hentes fra API
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
                        {/* Retrieve EducationItems from database. (the EducationItems below simulates it) */}
                        <EducationList/>
                    </section>
                    <section>
                        <div className="row main-header">
                            <h2>Work Experience</h2>
                            <button className="btn btn-primary">+</button>
                        </div>
                        {/* Retrieve WorkItems from database. (the WorkItems below simulates it) */}
                        <WorkItem />
                        <WorkItem />
                    </section>
                </main>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { EducationItems: state.EducationItems };
}

export default connect(mapStateToProps, { fetchEducationItems })(CV);



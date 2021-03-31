import React, { Component } from 'react';
import { connect } from 'react-redux'
import SideBar from '../SideBar';
// import WorkItem from '../WorkItem';
import EducationList from '../EducationList';
import { fetchEducationItems } from '../../actions';
import WorkList from '../WorkList';
import { Link } from "react-router-dom";
import AddCVItem from "../AddCVItem";

class CV extends Component {
    componentDidMount() {
        this.props.fetchEducationItems();
    }
  
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
                            <Link className="btn btn-primary" to="add_cv_item/2">+</Link>
                        </div>
                        <EducationList/>
                    </section>
                    <section>
                        <div className="row main-header">
                            <h2>Work Experience</h2>
                            <Link className="btn btn-primary" to="add_cv_item/1">+</Link>
                        </div>
                        <WorkList />
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



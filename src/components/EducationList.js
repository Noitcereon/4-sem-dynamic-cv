import React, { component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchEducationItems } from "../actions";

class EducationList extends Component {
    render() {
        return (
            <div>
                <h2>Education</h2>
                <div className="row work-item">
                    {
                        this.prop.educations.map(education => {
                            return <div>
                                <EducationItem ></EducationItem>
                                
                            </div>




                        }
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { educations: state.EducationItems }
}
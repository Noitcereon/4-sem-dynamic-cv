import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchEducationItems } from "../actions";
import EducationItem from "./EducationItem";

class EducationList extends Component {
    componentDidMount() {
        this.props.fetchEducationItems();
    }
    render() {  
        return (
            <div>
                <div className="row work-item">
                    {
                        this.props.educations.map(education => {
                            return <EducationItem key={education.id} title={education.title}
                                location={education.location}
                                description={education.description}
                                dateFrom={education.dateFrom}
                                dateTo={education.dateTo} />
                        })
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { educations: state.EducationItems }
}

export default connect(mapStateToProps, { fetchEducationItems })(EducationList)
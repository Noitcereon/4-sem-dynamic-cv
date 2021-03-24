import React, { component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class EducationList extends Component {
    render() {
        return (
            <div>
                <h2>Education</h2>
                <ul>
        {
            this.prop.education.map(education => {
            return <Link to={'/EducationItem/${education.name}'
        }> 
    })}
                </ul>
            </div>
            )
    }
}
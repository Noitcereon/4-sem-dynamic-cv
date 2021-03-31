import React from 'react';
import { connect } from 'react-redux';
import Skill from './Skill';

const SkillsList = (props) => {
    return (
        <ul>
            {
                props.skills.map(skill => {
                    return <Skill key={skill.id} description={skill.description} />
                })
            }
        </ul>
    )
}

export default connect()(SkillsList);
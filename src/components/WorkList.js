import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWorkItems } from "../actions";
import WorkItem from "./WorkItem";

class WorkList extends Component {
    componentDidMount() {
        this.props.fetchWorkItems();
    }
    render() {
        return (
            <div>
                <div className="row work-item">
                    {
                        this.props.works.map(work => {
                            return <WorkItem key={work.id} title={work.title}
                            location={work.location}
                            description={work.description}
                            dateFrom={work.dateFromString}
                            dateTo={work.dateToString}
                            />
                        })
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {works: state.WorkItems }
}

export default connect(mapStateToProps, { fetchWorkItems })(WorkList)
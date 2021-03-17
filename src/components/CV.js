import React, { Component } from 'react';

class CV extends Component {
    render() {
        return (
            <div>
                <section id="sidebar" className="col-md-4">
                    {/* <SideBar /> */}
                </section>

                <main className="col-md-8">
                    <section>
                        <div className="row main-header">
                            <h2>Education</h2>
                        </div>

                        {/* Retrieve EducationItems from database. (the 3 EducationItems below simulates it) */}
                        {/* <EducationItem /> */}
                    </section>
                    <section>
                        <div className="row main-header">
                            <h2>Work Experience</h2>
                        </div>
                        {/* Retrieve WorkItems from database. (the 4 WorkItems below simulates it) */}
                        {/* <WorkItem />
                        <WorkItem />
                        <WorkItem />
                        <WorkItem /> */}
                    </section>
                </main>
            </div>
        )
    }
}

export default CV;



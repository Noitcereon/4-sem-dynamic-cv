import React, { Component } from "react";
import { connect } from "react-redux";
import { postSkill } from "../../actions";

class AddSkill extends Component {
    SkillDescription;
    constructor(props){
        super(props);
    }
    postNewSkill() {
        console.log("postNewSkill was called.");
        postSkill(this.SkillDescription);
    }
    setSkillDescription(value){
        console.log("setSkillDescription was called.");
        this.SkillDescription = value;
        console.log(this.SkillDescription);
    }
    render() {
        return (
            <section>
                <form>
                    <label className="text-light">Skill</label>
                    <input className="form-control" type="text" value={this.SkillDescription} onChange={e => this.setSkillDescription(e.target.value)}/>
                    <button className="form-control" type="submit" onClick={this.postNewSkill}>Submit</button>
                </form>
            </section>
        )
    }
}

// const mapStateToProps = (state) => {
//         return;
// };
export default connect()(AddSkill);
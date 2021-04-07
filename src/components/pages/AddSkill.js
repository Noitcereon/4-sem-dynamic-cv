import React, { Component } from "react";
import { connect } from "react-redux";
import { postSkill } from "../../actions";

class AddSkill extends Component {
    SkillDescription = "";
    postNewSkill() {
        postSkill(this.SkillDescription);
        // window.location.assign("http://localhost:3000/");
    }

    render() {
        

        return (
            <section>
                <form>
                    <label>Skill</label>
                    <input className="form-control" type="text" value={this.SkillDescription} />
                    <button className="form-control" type="submit" onClick={this.postNewSkill()}>Submit</button>
                </form>
            </section>
        )
    }
}

// const mapStateToProps = (state) => {
//         return;
// };
export default connect()(AddSkill);
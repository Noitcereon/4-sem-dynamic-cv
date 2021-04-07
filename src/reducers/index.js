import { combineReducers }  from "redux";
import fetchEducationItems from './fetchEducationItemsReducer';
import  fetchWorkItems  from "./fetchWorkItemsReducer";
import  fetchPersonalInfo  from "./fetchPersonalInfoReducer";
import fetchSkills from "./fetchSkillsReducer";
import postSkill from "./postSkillReducer";


export default combineReducers({
    EducationItems: fetchEducationItems,
    WorkItems: fetchWorkItems,
    PersonalInfo: fetchPersonalInfo,
    Skills: fetchSkills,
    PostSkill: postSkill
});


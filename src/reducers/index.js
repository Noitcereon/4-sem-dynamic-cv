import { combineReducers }  from "redux";
import fetchEducationItems from './fetchEducationItemsReducer';
import  fetchWorkItems  from "./fetchWorkItemsReducer";
import  fetchPersonalInfo  from "./fetchPersonalInfoReducer";
import fetchSkills from "./fetchSkillsReducer";


export default combineReducers({
    EducationItems: fetchEducationItems,
    WorkItems: fetchWorkItems,
    PersonalInfo: fetchPersonalInfo,
    Skills: fetchSkills
});


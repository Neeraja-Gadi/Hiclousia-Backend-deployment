require('dotenv').config();
const express = require('express');
const router = express.Router();
const userController = require("../Controllers/userController");
const infoController = require("../Controllers/infoController");
const jobController = require("../Controllers/jobController");
const recruiterController = require("../Controllers/recruiterController");
const talentController = require("../Controllers/preferenceController");
const skillmappingController = require("../Controllers/skillmappingController")
// const notificationController = require('../Controllers/notificationController');


// ********************************************************************************************************
router.post('/userProfile', userController.userGeneral);//s3 post request
router.post('/talentPreference', talentController.createPreference);
router.post("/create", userController.register);
router.post("/experience", infoController.experienceInfo);
router.post("/education", infoController.educationInfo);
router.post("/project", infoController.projectInfo);
router.post("/skill", infoController.skillsInfo);
router.post("/job/:userDetailsID", jobController.jobInfo);
router.post("/recruiter", recruiterController.recruiterInfo);
router.post("/revenueR", recruiterController.RevenuePlan);
//*******************************************************************************************************/
router.put("/updatePreference/:id", talentController.updatePreference);
router.put("/userProfile/:id", userController.updateuserProfile);
router.put("/experience/:id", infoController.updateExperienceData);
router.put("/education/:id", infoController.updateEducationData);
router.put('/projects/:id', infoController.updateProject);
router.put("/skill/:id", infoController.updateSkillsData);
router.put("/job/:id", jobController.updateJobData);
router.put("/recruiter/:id", recruiterController.updateRecruiterData);
router.put('/SingleImageUpdate/:id', userController.SingleImageUpdate);
//********************************************************************************************************/
router.get("/userProfile/:id", userController.getUserProfileById); //get UserProfile info from req.params.id
router.get("/education/:id", infoController.educationInformation);//get education info from req.params.id
router.get("/project/:id", infoController.projectInformation);//get project info from req.params.id
router.get("/projects/:id", infoController.getProjectByID);//get project info from req.params.id
router.get("/skills/:id", infoController.skillsInformation);//get skills info from req.params.id
router.get("/experience/:id", infoController.experienceInformation);//get experience info from req.params.id
router.get("/personal/:id", infoController.personalInfo);//get personal info from req.params.id
router.get("/recruiter/:id", recruiterController.recruiterInformation);//get recruiter info from req.params.id
router.get("/jobpostbyRecruiter/:id", jobController.jobpostbyRecruiter);//get Job post info from req.params.id
router.get("/strictJobPost/:userDetaildID/:id", jobController.strictJobPost);
router.get('/searchJobsByPreferences/:userDetailsID', talentController.searchJobsByPreferences);
router.get("/fetchPreference/:id", talentController.fetchPreference);//get Talent preference info from req.params.id
// ****************************************************************************************************************
router.get("/jobs", jobController.searchJobs); //general job search for user or jobseeker
router.get("/allusers", recruiterController.recruiterSearch); // multiple search for recruiter
router.get("/allrecruiter", recruiterController.searchJobseekerGeneral);// general recruiter search for candidate
router.get('/userbasedrecommendations/:id', userController.findJobMatches);//user details based job recommendations
router.get('/PREP/:id', recruiterController.PREP);//it is finding right fit pool based
router.get('/revenueR/:userDetailsID', recruiterController.getRecruiterPlan);
router.get('/PlanWithDetails/:userDetailsID/:id', recruiterController.PlanWithJobPostInformation);
//*****************************************************************************************************************
router.delete("/deletePreference/:id", talentController.deletePreference);
router.delete('/Education/:id', infoController.deleteEducation);
router.delete('/Experience/:id', infoController.deleteExperience);
router.delete('/Projects/:id', infoController.deleteProject);
router.delete('/Skills/:id', infoController.deleteSkills);
router.delete('/Recruiter/:id', recruiterController.deleteRecruiter);
router.delete('/Jobs/:id', jobController.deleteJob);
router.delete('/userProfile/:id', userController.deleteuserProfile);
router.delete('/userProfiles/:id/:key', userController.deleteProfile);
// ****************************************************************************************************************
router.post('/login', userController.loginUser);
router.post('/resendtoken', userController.sendToken);
router.post('/resetPassword/:userid/:token', userController.verifyAndUpdatePassword);

// *******************************SkillMapping*****************************************************

router.post('/insertskillstemplates',skillmappingController.insertskillstemplates)
router.get('/getskillstemplates',skillmappingController.getskillstemplates)

// ******************************Logs & Notifications**************************************************************

// router.post('/', notificationController.createNotification);
// router.get('/:recipient', notificationController.getNotificationsByRecipient);
// router.patch('/:notificationId/read', notificationController.markNotificationAsRead);
// router.patch('/:notificationId/accept', notificationController.acceptTalent);
// router.patch('/:notificationId/decline', notificationController.declineTalent);
// router.patch('/:notificationId/schedule-interview', notificationController.scheduleInterview);
// router.patch('/:notificationId/onboard', notificationController.onboardTalent);
// router.patch('/:notificationId/reject', notificationController.rejectTalent);

module.exports = router;
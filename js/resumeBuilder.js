/*
This is empty on purpose! Your code to build the resume will go here.
 */


var skills = ["Coding", "Teaching", "Closing","Awesomeness"]

var bio = {
	"name" : "Joseph",
	"role" : "Web Developer",
	"contact" : {
		"mobile" : "939-939-3939",
		"email" : "fake@fakestreet.com",
		"github" : "mygithub.com",
		"twitter" : "mytweet@twitter.com",
		"location" : "USA, Nowhere"
	} ,
	"bioPic" : "http://vignette4.wikia.nocookie.net/batman/images/8/8f/Christian_Bale_as_The_Dark_Knight.jpg/revision/latest?cb=20140208170841" ,
	"welcomeMessage" : "Hi, everyone bla bla bla", 
	"skills" : skills 
};


var work = {
	"jobs" : [
	{
		"employer" : "Vivint", 
		"title" : "Sales Manager",
		"dates" : "January 2010- January 2015",
		"description" : "I bla bla bla, and bla bla."
	},
	{
		"employer" : "CityGro",
		"title" : "Sales Person",
		"dates" : "November 2015- March 2015",
		"description" : "I did stuff and then more stuff."
	}]
};

function displayWork() {
	for(job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);


		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
};

displayWork();

var projects = {
	"projects" : [
	{
		"title" : "Project 1",
		"dates" : "2014",
		"description" : "This was my bla bla bal project.",
		"images" : [
		"http://media.dcentertainment.com/sites/default/files/GalleryChar_1900x900_MOS_52e05e3fe24a61.04593858.jpg",
		"http://vignette1.wikia.nocookie.net/dcmovies/images/3/36/Superman_MoS_promo.png/revision/latest?cb=20130424174431"
		]
	}]
};


var education = {
	"schools" : [
	{
		"name" : "Brigham Young University", 
		"city" : "Provo, UT",
		"degree" : "Bachelor's", 
		"major" : "BGS Business", 
		"dates" : 2013, 
		"url" : "www.byu.edu"
	}
	],
	"onlineCourses": [
	{
		"title" : "Intro to coding",
		"school" : "Udacity",
		"dates" : "2016",
		"url" : "www.udacity.com"
	}]
};

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
};






var role = "Web Developer"

var name = "Joseph Ybarra"

var formattedName = HTMLheaderName.replace("%data%", name);

var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);



















// education["name"] = "Nova Southeastern University";
// education["years"] = "2005-2013";
// education["city"] = "Fort Lauderdale, FL, US";

// $("#main").append(work["position"]);
// $("#main").append(education.name);

// function displayWork() {
// 	for (job in work.jobs)
// 		//create new div for work experirence 
// 		$("workExperience").append(HTMLworkStart);
// 		// concat employer and title
// 		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
// 		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
// 		var formattedEmployerTitle = formattedEmployer + formattedTitle;
// 		$(".work-entry:last").append(formattedEmployerTitle);

// 		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
// 		$(".work-entry:last").append(formattedDates);

// 		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
// 		$(".work-entry:last").append(formattedDescription);

// }
// displayWork();





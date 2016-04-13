


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
	"welcomeMessage" : "Hi, everyone bla bla bla", 
	"skills" : ["Coding", "Teaching", "Closing","Awesomeness"],
	"bioPic" : "http://vignette4.wikia.nocookie.net/batman/images/8/8f/Christian_Bale_as_The_Dark_Knight.jpg/revision/latest?cb=20140208170841"
};
	function displaybio() {

		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		$("#header").prepend(formattedRole);

		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		$("#header").prepend(formattedName);

		var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
		$("#header:last").append(formattedBioPic);

		var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#header:last").append(formattedWelcomeMsg);

		var formattedMobile = HTMLmobile.replace("%data%", bio.contact.mobile);
		$("#header:last").append(formattedMobile);

		var formattedEmail = HTMLemail.replace("%data%", bio.contact.email);
		$("#header:last").append(formattedEmail);

		var formattedGithub = HTMLgithub.replace("%data%", bio.contact.github);
		$("#header:last").append(formattedGithub);

		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contact.twitter);
		$("#header:last").append(formattedTwitter);

		var formattedLocation = HTMLlocation.replace("%data%", bio.contact.location);
		$("#header:last").append(formattedLocation);

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
	};

displaybio();


var education = {
	"schools" : [
	{
		"name" : "Brigham Young University", 
		"location" : "Provo, UT",
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

	function displayEducation() {
		for(school in education.schools) {
			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
			$(".education-entry:last").append(formattedSchoolName);

			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			$(".education-entry:last").append(formattedSchoolDates);

			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			$(".education-entry:last").append(formattedSchoolLocation);

			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			$(".education-entry:last").append(formattedSchoolDegree);

			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
			$(".education-entry:last").append(formattedSchoolMajor);
		}
		for(course in education.onlineCourses) {
			$(".education-entry:last").append(HTMLonlineClasses);

			var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
			$(".education-entry:last").append(formattedOnlineTitle);

			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
			$(".education-entry:last").append(formattedOnlineSchool);

			var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
			$(".education-entry:last").append(formattedOnlineDates);

			var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
			$(".education-entry:last").append(formattedOnlineURL);
		}
	}

displayEducation();


var work = {
	"jobs" : [
	{
		"employer" : "Vivint", 
		"title" : "Sales Manager",
		"location" : "Provo, UT",
		"dates" : "January 2010- January 2015",
		"description" : "I bla bla bla, and bla bla."
	},
	{
		"employer" : "CityGro",
		"title" : "Sales Person",
		"location" : "Salt Lake City, UT",
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
		"http://files.gamebanana.com/img/ico/sprays/superman.png",
		"https://s-media-cache-ak0.pinimg.com/736x/c1/1f/11/c11f11731ab12ac3e8e8b0e186c8f1c1.jpg"
		]
	}]
};

	projects.display = function() {
		for (project in projects.projects) {
			$("#projects").append(HTMLprojectStart);

			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			$(".project-entry:last").append(formattedTitle);

			var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			$(".project-entry:last").append(formattedDates);

			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			$(".project-entry:last").append(formattedDescription);

			if (projects.projects[project].images.length > 0) {
				for (image in projects.projects[project].images) {
					var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
					$(".project-entry:last").append(formattedImage);
				}
			}
		}
	}

projects.display()



//loging the clicks on the website

$(document).click(function(loc){
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});


function locationizer(work_obj) {
	var locationArray = [];

	for (job in work_obj.jobs){
		var newLocation = work_obj.jobs[job].location;
		locationArray.push(newLocation);
	}

	return locationArray;
}

console.log(locationizer(work));


// adds the google map

$("#mapDiv").append(googleMap);






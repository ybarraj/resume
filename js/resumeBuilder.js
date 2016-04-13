


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


};

displaybio();

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

//Need a line to display the bio stuff. 

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
//Need a line to display education stuff


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

//need to combine these two somehow ^

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

//need to combine these two 

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





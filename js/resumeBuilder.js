var work = {
	"jobs":
		[
			{
				"employer": "Strategic Personal Finance, LLC",
				"url": "http://strategicpersonalfinance.com/",
				"title": "Founder",
				"location": "Powell, OH",
				"dates": "2005 - present",
				"description": "Preparing to help millions of people grow their finances through apps and mobile computing, SPF creates tools that bring financial planning services to non-consumers and over-serviced existing financial planning clients."
			},
			{
				"employer": "TeMeDa, LLC",
				"url": "https://www.temeda.com/",
				"title": "Manager Edge Systems",
				"location": "Chicago, IL",
				"dates": "May, 2013 - March, 2014",
				"description": "Managing TeMeDa's human-to-machine interface.  TeMeDa, a Morey Corporation skunkworks startup, short for Telematics Meta Data, exits to enable the measurement of meaning facts at a distance."
			},
			{
				"employer": "Edward Jones",
				"url": "https://www.edwardjones.com/en_US/index.html",
				"title": "Financial Advisor",
				"location": "Parkersburg, WV",
				"dates": "2010",
				"description": "Helping clients determine and solve their financial planning needs and objectives."
			},
			{
				"employer": "Skomra Academy",
				"url": "#",
				"title": "Home Educator",
				"location": "Powell, OH",
				"dates": "2008 - present",
				"description": ""
			}
		],
	"display": function(){
		$("#workExperience").append(HTMLworkHeading);
		for (job in work.jobs){
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			formattedEmployer = formattedEmployer.replace("#", work.jobs[job].url);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

			$("#workExperience").append(HTMLworkStart);
			$(".work-entry:last").append( formattedEmployerTitle );
			$(".work-entry:last").append( formattedLocation );
			$(".work-entry:last").append( formattedDates );
			$(".work-entry:last").append( formattedDescription );
		}
	}
};

var projects = {
	"project":
		[
			{
				"title": "Search Engine",
				"dates": "2015",
				"description": "Search engine with key components including a crawler, an index, and a page rank algorithm",
				"images": ["projects/searchengine/searchengine.jpg"],
				"url": "projects/searchengine/searchengine.txt"
			},
			{
				"title": "Social Network",
				"dates": "2015",
				"description": "Relationships organized into social network properties and functions",
				"images": ["projects/socialnetwork/socialnetwork.jpg"],
				"url": "projects/socialnetwork/socialnetwork.txt"
			},
			{
				"title": "Udacity Mug",
				"dates": "2015",
				"description": "Web page based on PDF design mockup using HTML and CSS",
				"images": ["projects/udacitymug/udacitymug-sm.jpg"],
				"url": "projects/udacitymug/um/index.html"
			}
		],
	"display": function(){
		$("#projects").append(HTMLprojectHeading);
		for ( project in projects.project){

			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.project[project].title);
			formattedTitle = formattedTitle.replace("#", this.project[project].url);
			var formattedDates = HTMLprojectDates.replace("%data%", projects.project[project].dates);
			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.project[project].description);
			var formattedImages = formatImages(projects.project[project].images) ;

			$("#projects").append(HTMLprojectStart);
			$(".project-entry:last").append( formattedTitle );
			$(".project-entry:last").append( formattedDates );
			$(".project-entry:last").append( formattedDescription );
			$(".project-entry:last").append( formattedImages );
			$(".project-entry:last").append( "<br><hr><br>" )
		}
	}
}

var bio = {
	"name": "Connie Skomra",
	"role": "Founder",
	"contacts": {
		"mobile": "740-525-5327",
		"email": "connie@cskomra.com",
		"github": "cskomra",
		"twitter": "#ConnieSkomra",
		"location": "Powell, OH"
	},
	"welcomeMessage": "Welcome!",
	"skills": ["Software Development",
		"Project Management",
		"Training",
		"Strategic Planning",
		"Analysis",
		"Product Development",
		"Innovation",
		"Mentoring",
		"Robotics"
	],
	"biopic": "images/connie02.gif",
	"display": function(){
		var formattedName = HTMLheaderName.replace("%data%", this.name);
		var formattedRole = HTMLheaderRole.replace("%data%", this.role);
		var skillsLen = this.skills.length;
		var contactIDs = ["#topContacts", "#footerContacts"];

		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);

		if (skillsLen > 0){
			$("#header").append(HTMLskillsStart);
			for (i = 0; i< skillsLen; i++){
				var formattedSkill = HTMLskills.replace("%data%", this.skills[i]);
				$("#skills").append(formattedSkill);
			}
		}

		formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
		formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

		for (var id in contactIDs){
			$(contactIDs[id]).append(formattedMobile);
			$(contactIDs[id]).append(formattedEmail);
			$(contactIDs[id]).append(formattedTwitter);
			$(contactIDs[id]).append(formattedGithub);
			$(contactIDs[id]).append(formattedLocation);
		}

		$("#header").append(formattedBioPic);
		$("#header").append(formattedWelcomeMsg);
	}
};

var education = {
	"schools":
	[
		{
			"name": "Udacity",
			"location": "Mountain View, CA",
			"degree": "",
			"major": "Front End Web Developer Nanodegree",
			"dates": 2015,
			"url": "http://www.udacity.com"
		},
		{
			"name": "Virginia Tech",
			"location": "Blacksburg, VA",
			"degree": "",
			"major": "MIS",
			"dates": 2011,
			"url": "http://www.vt.edu"
		},
		{
			"name": "Muskingum University",
			"location": "New Concord, OH",
			"degree": "",
			"major": "MISST",
			"dates": 2008,
			"url": "http://muskingum.edu"
		},
		{
			"name": "Marietta College",
			"location": "Marietta, OH",
			"degree": "B.A.",
			"major": "Music, Business",
			"dates": "1988 - 1990",
			"url": "http://marietta.edu"
		},
		{
			"name": "Capital University",
			"location": "Bexley, OH",
			"degree": "B.A.",
			"major": "Music",
			"dates": "1986 - 1988",
			"url": "http://capital.edu"
		}
	],
	"onlineCourses":
	[
		{
			"title": "JavaScript Syntax",
			"school": "Udacity",
			"dates": 2015,
			"url": "http://www.udacity.com/course/ud804"
		},
		{
			"title": "Intro to Computer Science",
			"school": "Udacity",
			"dates": 2015,
			"url": "http://www.udacity.com/course/ud804"
		},
		{
			"title": "How to Use Git and GitHub",
			"school": "Udacity",
			"dates": 2015,
			"url": "http://www.udacity.com/course/ud804"
		},
		{
			"title": "Intro to HTML and CSS",
			"school": "Udacity",
			"dates": 2015,
			"url": "http://www.udacity.com/course/ud804"
		},
		{
			"title": "Strategic Leadership in Tech-Based Organizations",
			"school": "Virgina Tech",
			"dates": 2011,
			"url": "http://www.vt.edu"
		},
		{
			"title": "Software Engineering",
			"school": "Virginia Tech",
			"dates": 2011,
			"url": "http://www.vt.edu"
		},
		{
			"title": "JAVA",
			"school": "Virginia Tech",
			"dates": 2011,
			"url": "http://www.vt.edu"
		}
	],
	"displayOnlineCourses": function(){
		$(".education-entry:last").append(HTMLonlineClasses);
		for (onlineCourse in education.onlineCourses){
			var formattedCourseUrl = HTMLonlineTitle.replace("#", education.onlineCourses[onlineCourse].url);
			var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
			var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
			var formattedTitleSchool = formattedTitle + formattedSchool;
			var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);

			$(".education-entry:last").append( formattedTitleSchool );
			$(".education-entry:last").append( formattedDates );
		}
	},
	"display": function(){
		$("#education").append(HTMLschoolHeading);
		for (school in education.schools){
		var formattedNameUrl = HTMLschoolName.replace("#", education.schools[school].url);
		var formattedName = formattedNameUrl.replace("%data%", education.schools[school].name);

		if(education.schools[school].degree === ""){
			var formattedDegree = HTMLschoolNoDegree;
		}else{
			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		}

		var formattedNameDegree = formattedName + formattedDegree;
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);

		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append( formattedNameDegree );
		$(".education-entry:last").append( formattedLocation );
		$(".education-entry:last").append( formattedDates );
		$(".education-entry:last").append( formattedMajor );
		}

		education.displayOnlineCourses();
	}
}


function formatImages(imagesArray){
	var formattedImages = "";
	for (image in imagesArray){
		formattedImages = formattedImages +
		HTMLprojectImage.replace("%data%", imagesArray[image])
	}
	return formattedImages.trim();
}
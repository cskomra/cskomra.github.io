
var model = {
	//===== MODEL PROPERTIES=====

	//===== MODEL OBJECTS =====
	bio: {
		"name": "Connie Skomra",
		"role": "  Co-founder",
		"contacts": {
			"mobile": "740-525-5327",
			"email": "connie@cskomra.com",
			"github": "cskomra",
			"twitter": "#ConnieSkomra",
			"location": "Powell, OH"
		},
		"welcomeMessage": "Over 14 years combined experience impacting corporate performance " +
			"through skillful orchestration and implementation of IT initiatives. " +
			"<span class='orange-text'>Strategically focused director:</span>  delivering wins by pursuing innovation while still allowing bigger corporate picture " +
			"to drive initiatives.  " +
			"<span class='orange-text'>Results-oriented collaborator</span>, able to align technology with business needs while " +
			"encouraging open and creative thinking that " +
			"moves the company forward. <span class='orange-text'>Effective company representative</span>, works with internal/external clients " +
			"to design and develop solutions for complex business problems. <span class='orange-text'>Versatile project coordinator</span>, " +
			"able to quickly learn and apply knowledge to drive results. Strong track record of IT initiatives " +
			"being completed on time and within budget.",
		"skills": ["Software Development",
			"Project Management",
			"Strategic Planning",
			"Analysis",
			"Product Development",
			"Innovation",
			"Mentoring",
			"Robotics"
		],
		"biopic": "images/Connie04.jpg"
	},
	education: {
		"schools":
		[
			{
				"name": "Udacity",
				"location": "Mountain View, CA",
				"degree": "",
				"majors": ["Front End Web Developer Nanodegree"],
				"dates": 2015,
				"url": "http://www.udacity.com"
			},
			{
				"name": "Virginia Tech",
				"location": "Blacksburg, VA",
				"degree": "",
				"majors": ["MIS"],
				"dates": 2011,
				"url": "http://www.vt.edu"
			},
			{
				"name": "Muskingum University",
				"location": "New Concord, OH",
				"degree": "",
				"majors": ["MISST"],
				"dates": 2008,
				"url": "http://muskingum.edu"
			},
			{
				"name": "Marietta College",
				"location": "Marietta, OH",
				"degree": "B.A.",
				"majors": ["Music", "Business"],
				"dates": "1988 - 1990",
				"url": "http://marietta.edu"
			},
			{
				"name": "Capital University",
				"location": "Bexley, OH",
				"degree": "B.A.",
				"majors": ["Music"],
				"dates": "1986 - 1988",
				"url": "http://capital.edu"
			}
		],
		"onlineCourses":
		[
			{
				"title": "JavaScript Syntax",
				"school": "Udacity",
				"date": 2015,
				"url": "http://www.udacity.com/course/ud804"
			},
			{
				"title": "Intro to Computer Science",
				"school": "Udacity",
				"date": 2015,
				"url": "http://www.udacity.com/course/ud804"
			},
			{
				"title": "How to Use Git and GitHub",
				"school": "Udacity",
				"date": 2015,
				"url": "http://www.udacity.com/course/ud804"
			},
			{
				"title": "Intro to HTML and CSS",
				"school": "Udacity",
				"date": 2015,
				"url": "http://www.udacity.com/course/ud804"
			},
			{
				"title": "Strategic Leadership in Tech-Based Organizations",
				"school": "Virgina Tech",
				"date": 2011,
				"url": "http://www.vt.edu"
			},
			{
				"title": "Software Engineering",
				"school": "Virginia Tech",
				"date": 2011,
				"url": "http://www.vt.edu"
			},
			{
				"title": "JAVA",
				"school": "Virginia Tech",
				"date": 2011,
				"url": "http://www.vt.edu"
			}
		],
	},
	work: {
		"jobs":
		[
			{
				"employer": "Strategic Personal Finance, LLC",
				"url": "http://strategicpersonalfinance.com/",
				"title": "Founder",
				"location": "Powell, OH",
				"dates": "2015 - present",
				"description": "Preparing to help millions of people grow their finances through apps and mobile computing, SPF creates tools that bring financial planning services to non-consumers and over-serviced existing financial planning clients."
			},
			{
				"employer": "TeMeDa, LLC",
				"url": "https://www.temeda.com/",
				"title": "Manager Edge Systems",
				"location": "Chicago, IL",
				"dates": "May, 2013 - March, 2014",
				"description": "Managing TeMeDa's human-to-machine interface.  TeMeDa, a Morey Corporation skunkworks startup, short for Telematics Meta Data, exits to enable the measurement of meaningful facts at a distance."
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
		]
	},
	projects: {
		"project":
		[
			{
				"title": "Bug Evaders Arcade Game",
				"dates": "2015",
				"description": "Frogger-like arcade game.",
				"images": ["projects/arcadegame/bugevaders.JPG"],
				"url": "projects/arcadegame/index.html"
			},
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
				"images": ["projects/udacitymug/udacitymugsm.JPG"],
				"url": "projects/udacitymug/um/index.html"
			}
		]
	}
};

var views = {
	//===== VIEW PROPERTIES =====
	header: $('#header'),
	main: $('#main'),

	//===== VIEW OBJECTS =====
	bioView: {

		internationalizeButton: '<button>Internationalize</button>',
		HTMLskillsStart: '<h3 id="skillsH3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>',
		HTMLmobile: '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>',
		HTMLemail: '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>',
		HTMLtwitter: '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>',
		HTMLgithub: '<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>',
		HTMLblog: '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>',
		HTMLlocation: '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>',
		HTMLheaderRole: '<span id="role">%data%</span><hr/>',
		HTMLbioPic: '<img src="%data%" class="biopic" alt="bio picture">',
		HTMLWelcomeMsg: '<span class="welcome-message">%data%</span>',
		contactIDs: ["#topContacts", "#footerContacts"],
		HTMLskills: '<li class="flex-item"><span class="white-text">%data%</span></li>',

		init: function(){
			//initialize objects and properties in the bioView
			//anything that only needs to be done one time at the beginning of page load
			//if updated throughout, put it in render

			formattedRole = this.HTMLheaderRole.replace("%data%", octopus.getBioRole());
			formattedMobile = this.HTMLmobile.replace("%data%", octopus.getBioContactsMobile());
			formattedEmail = this.HTMLemail.replace("%data%", octopus.getBioContactsEmail());
			formattedTwitter = this.HTMLtwitter.replace("%data%", octopus.getBioContactsTwitter());
			formattedGithub = this.HTMLgithub.replace("%data%", octopus.getBioContactsGithub());
			formattedLocation = this.HTMLlocation.replace("%data%", octopus.getBioContactsLocation());
			formattedBioPic = this.HTMLbioPic.replace("%data%", octopus.getBioPic());
			formattedWelcomeMsg = this.HTMLWelcomeMsg.replace("%data%", octopus.getWelcomeMessage());
			skills = octopus.getBioSkills();
			skillsLen = skills.length;
			formattedSkill = "";

			if (skillsLen > 0){
				for (var i = 0; i< skillsLen; i++){
					formattedSkill = formattedSkill + this.HTMLskills.replace("%data%", skills[i]);
				};
			};

			this.render();
		},
		render: function(){
			//anthing that changes in the bioView UI, put here
			var header = views.header;
			var main = views.main;

			//render role and name
			header.prepend(octopus.getBioRole());
			header.prepend(octopus.getBioFormattedName());

			//render contact info
			var ci = this.contactIDs;
			for (var i = 0; i < ci.length; i++){
				$(ci[i]).append(this.formattedMobile);
				$(ci[i]).append(this.formattedEmail);
				$(ci[i]).append(this.formattedTwitter);
				$(ci[i]).append(this.formattedGithub);
				$(ci[i]).append(this.formattedLocation);
			};

			//render pic and welcome msg
			header.append(formattedBioPic);
			header.append(formattedWelcomeMsg);

			//render skills
			header.append(this.HTMLskillsStart);
			$('#skills').append(formattedSkill);

			//render internaltionalize button
			main.append( this.internationalizeButton );
		}
	},
	onlineCoursesView: {
		init: function(){
			$(".education-entry:last").append(HTMLonlineClasses);
			for (onlineCourse in this.onlineCourses){
				var formattedCourseUrl = HTMLonlineTitle.replace("#", this.onlineCourses[onlineCourse].url);
				var formattedTitle = HTMLonlineTitle.replace("%data%", this.onlineCourses[onlineCourse].title);
				var formattedSchool = HTMLonlineSchool.replace("%data%", this.onlineCourses[onlineCourse].school);
				var formattedTitleSchool = formattedTitle + formattedSchool;
				var formattedDates = HTMLonlineDates.replace("%data%", this.onlineCourses[onlineCourse].date);

				$(".education-entry:last").append( formattedTitleSchool );
				$(".education-entry:last").append( formattedDates );
			};
			this.render();
		},
		render: function(){

		}
	},
	schoolsView: {
		init: function(){
			$("#education").append(HTMLschoolHeading);
			for (school in this.schools){
			var formattedNameUrl = HTMLschoolName.replace("#", this.schools[school].url);
			var formattedName = formattedNameUrl.replace("%data%", this.schools[school].name);

			if(education.schools[school].degree === ""){
				var formattedDegree = HTMLschoolNoDegree;
			}else{
				var formattedDegree = HTMLschoolDegree.replace("%data%", this.schools[school].degree);
			}

			var formattedNameDegree = formattedName + formattedDegree;
			var formattedLocation = HTMLschoolLocation.replace("%data%", this.schools[school].location);
			var formattedDates = HTMLschoolDates.replace("%data%", this.schools[school].dates);
			var formattedMajor = HTMLschoolMajor.replace("%data%", formatMajors(this.schools[school].majors));

			$("#education").append(HTMLschoolStart);
			$(".education-entry:last").append( formattedNameDegree );
			$(".education-entry:last").append( formattedLocation );
			$(".education-entry:last").append( formattedDates );
			$(".education-entry:last").append( formattedMajor );
			};

			function formatMajors(majorsArray){
					var formattedMajors = "";
					//for (major in majorsArray){
					for (var i = 0; i < majorsArray.length; i++){
						if (majorsArray[i] != ""){
							formattedMajors = formattedMajors + ", " + majorsArray[i];
						}
					}
					return formattedMajors.substr(2, formattedMajors.length);
			};

			this.render();
		},
		render: function(){

		}
	},
	workView: {
		init: function(){
			$("#workExperience").append(HTMLworkHeading);
			var jobs = octopus.getWorkJobs();
			for (job in jobs){
				var formattedEmployer = HTMLworkEmployer.replace("%data%", jobs[job].employer);
				formattedEmployer = formattedEmployer.replace("#", jobs[job].url);
				var formattedTitle = HTMLworkTitle.replace("%data%", jobs[job].title);
				var formattedEmployerTitle = formattedEmployer + formattedTitle;
				var formattedLocation = HTMLworkLocation.replace("%data%", jobs[job].location);
				var formattedDates = HTMLworkDates.replace("%data%", jobs[job].dates);
				var formattedDescription = HTMLworkDescription.replace("%data%", jobs[job].description);

				$("#workExperience").append(HTMLworkStart);
				$(".work-entry:last").append( formattedEmployerTitle );
				$(".work-entry:last").append( formattedLocation );
				$(".work-entry:last").append( formattedDates );
				$(".work-entry:last").append( formattedDescription );
			};
			this.render();
		},
		render: function(){

		}
	},
	projectsView: {
		init: function(){
			$("#projects").append(HTMLprojectHeading);

			var projects = octopus.getProjects();
			for ( project in projects){

				var formattedTitle = HTMLprojectTitle.replace("%data%", projects[project].title);
				formattedTitle = formattedTitle.replace("#", projects[project].url);
				var formattedDates = HTMLprojectDates.replace("%data%", projects[project].dates);
				var formattedDescription = HTMLprojectDescription.replace("%data%", projects[project].description);
				var formattedImages = formatImages(projects[project].images) ;

				$("#projects").append(HTMLprojectStart);
				$(".project-entry:last").append( formattedTitle );
				$(".project-entry:last").append( formattedDates );
				$(".project-entry:last").append( formattedDescription );
				$(".project-entry:last").append( formattedImages );
				$(".project-entry:last").append( "<br><hr><br>" );
			};

			function formatImages(imagesArray){
				var formattedImages = "";
				for (var i = 0; i < imagesArray.length; i++){
					formattedImages = formattedImages +
					HTMLprojectImage.replace("%data%", imagesArray[i])
				}
				return formattedImages.trim();
			};
			this.render();
		},
		render: function(){

		}
	}
};

var octopus = {
	//===== CONTROL PROPERTIES =====

	//===== CONTROL OBJECTS =====
	init: function(){
		//initializes views that that need to be displayed when app starts
		views.bioView.init();
		views.onlineCoursesView.init();
		views.schoolsView.init();
		views.workView.init();
		views.projectsView.init();
	},

	//-------------- BIO CONTROLS-------------------
	getBioName: function(){
		return model.bio.name;
	},

	getBioFormattedName: function() {
		var HTMLheaderName = '<h1 id="name">%data%</h1>';
		return HTMLheaderName.replace("%data%", this.getBioName());
	},

	getBioRole: function(){
		return model.bio.role;
	},

	getBioContactsMobile: function(){
		return model.bio.contacts.mobile;
	},

	getBioContactsEmail: function(){
		return model.bio.contacts.email;
	},

	getBioContactsTwitter: function(){
		return model.bio.contacts.twitter;
	},

	getBioContactsGithub: function(){
		return model.bio.contacts.github;
	},

	getBioContactsLocation: function(){
		return model.bio.contacts.location;
	},

	getBioSkills: function() {
		return model.bio.skills;
	},

	getBioPic: function() {
		return model.bio.biopic;
	},

	getWelcomeMessage: function() {
		return model.bio.welcomeMessage;
	},

	//-------------------- WORK CONTROLS-----------------------
	getWorkJobs: function() {
		return model.work.jobs;
	},

	//-------------------- PROJECTS CONTROLS-----------------------
	getProjects: function() {
		return model.projects.project;
	},

	//-------------------- EDUCATION CONTROLS-----------------------
	getEducationSchools: function() {
		return model.education.schools;
	}
};
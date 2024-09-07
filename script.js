// TypeScript code for Interactive Resume Builder
var _a, _b, _c, _d, _e, _f;
// Function to create a new education entry
var createEducationEntry = function () {
    var educationFields = document.getElementById('education-fields');
    var newEntry = document.createElement('div');
    newEntry.className = 'education-entry';
    newEntry.innerHTML = "\n        <label for=\"education-degree\">Degree:</label>\n        <input type=\"text\" name=\"education-degree\" placeholder=\"e.g., B.Sc. in Computer Science\" required>\n        <label for=\"education-school\">School:</label>\n        <input type=\"text\" name=\"education-school\" placeholder=\"e.g., XYZ University\" required>\n        <label for=\"education-year\">Year:</label>\n        <input type=\"text\" name=\"education-year\" placeholder=\"e.g., 2020\" required>\n    ";
    educationFields.insertBefore(newEntry, educationFields.querySelector('button'));
};
// Function to create a new work experience entry
var createWorkEntry = function () {
    var workExperienceFields = document.getElementById('work-experience-fields');
    var newEntry = document.createElement('div');
    newEntry.className = 'work-entry';
    newEntry.innerHTML = "\n        <label for=\"job-title\">Job Title:</label>\n        <input type=\"text\" name=\"job-title\" placeholder=\"e.g., Software Engineer\" required>\n        <label for=\"company\">Company:</label>\n        <input type=\"text\" name=\"company\" placeholder=\"e.g., ABC Company\" required>\n        <label for=\"job-years\">Years:</label>\n        <input type=\"text\" name=\"job-years\" placeholder=\"e.g., 2021-present\" required>\n    ";
    workExperienceFields.insertBefore(newEntry, workExperienceFields.querySelector('button'));
};
// Function to toggle section visibility
var toggleSectionVisibility = function (sectionId) {
    var section = document.getElementById(sectionId);
    section.classList.toggle('hidden');
};
// Function to handle image upload and preview
var handleProfilePictureChange = function (event) {
    var _a;
    var input = event.target;
    var file = (_a = input.files) === null || _a === void 0 ? void 0 : _a[0];
    if (file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            var img = document.getElementById('profile-pic-preview');
            img.src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
            img.classList.remove('hidden');
        };
        reader.readAsDataURL(file);
    }
};
// Function to display resume data
var displayResume = function () {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var profilePic = document.getElementById('profile-pic-preview').src;
    var skills = document.getElementById('skills').value;
    // Get education details
    var educationEntries = document.querySelectorAll('.education-entry');
    var educationContent = '';
    educationEntries.forEach(function (entry) {
        var degree = entry.querySelector('[name="education-degree"]').value;
        var school = entry.querySelector('[name="education-school"]').value;
        var year = entry.querySelector('[name="education-year"]').value;
        educationContent += "<p><strong>".concat(degree, "</strong> from <em>").concat(school, "</em>, ").concat(year, "</p>");
    });
    // Get work experience details
    var workEntries = document.querySelectorAll('.work-entry');
    var workContent = '';
    workEntries.forEach(function (entry) {
        var jobTitle = entry.querySelector('[name="job-title"]').value;
        var company = entry.querySelector('[name="company"]').value;
        var jobYears = entry.querySelector('[name="job-years"]').value;
        workContent += "<p><strong>".concat(jobTitle, "</strong> at <em>").concat(company, "</em>, ").concat(jobYears, "</p>");
    });
    // Update resume display
    var displayPersonalInfo = document.getElementById('display-personal-info');
    displayPersonalInfo.innerHTML = "\n        <img src=\"".concat(profilePic, "\" alt=\"Profile Picture\" class=\"profile-pic\">\n        <p><strong>Name:</strong> ").concat(name, "</p>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone:</strong> ").concat(phone, "</p>\n    ");
    var displayEducation = document.getElementById('display-education');
    displayEducation.innerHTML = educationContent || '<p>No education information provided.</p>';
    var displaySkills = document.getElementById('display-skills');
    displaySkills.innerHTML = skills ? "<p>".concat(skills, "</p>") : '<p>No skills provided.</p>';
    var displayWorkExperience = document.getElementById('display-work-experience');
    displayWorkExperience.innerHTML = workContent || '<p>No work experience provided.</p>';
};
// Form submission event handler
var handleFormSubmit = function (event) {
    event.preventDefault();
    displayResume();
};
// Add event listeners
(_a = document.getElementById('add-education')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', createEducationEntry);
(_b = document.getElementById('add-work-experience')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', createWorkEntry);
(_c = document.getElementById('toggle-skills')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function () { return toggleSectionVisibility('skills'); });
(_d = document.getElementById('toggle-education')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', function () { return toggleSectionVisibility('education'); });
(_e = document.getElementById('profile-picture')) === null || _e === void 0 ? void 0 : _e.addEventListener('change', handleProfilePictureChange);
(_f = document.getElementById('resume-form')) === null || _f === void 0 ? void 0 : _f.addEventListener('submit', handleFormSubmit);

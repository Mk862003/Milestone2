// TypeScript code for Interactive Resume Builder

// Function to create a new education entry
const createEducationEntry = () => {
    const educationFields = document.getElementById('education-fields') as HTMLElement;
    const newEntry = document.createElement('div');
    newEntry.className = 'education-entry';
    newEntry.innerHTML = `
        <label for="education-degree">Degree:</label>
        <input type="text" name="education-degree" placeholder="e.g., B.Sc. in Computer Science" required>
        <label for="education-school">School:</label>
        <input type="text" name="education-school" placeholder="e.g., XYZ University" required>
        <label for="education-year">Year:</label>
        <input type="text" name="education-year" placeholder="e.g., 2020" required>
    `;
    educationFields.insertBefore(newEntry, educationFields.querySelector('button') as HTMLElement);
};

// Function to create a new work experience entry
const createWorkEntry = () => {
    const workExperienceFields = document.getElementById('work-experience-fields') as HTMLElement;
    const newEntry = document.createElement('div');
    newEntry.className = 'work-entry';
    newEntry.innerHTML = `
        <label for="job-title">Job Title:</label>
        <input type="text" name="job-title" placeholder="e.g., Software Engineer" required>
        <label for="company">Company:</label>
        <input type="text" name="company" placeholder="e.g., ABC Company" required>
        <label for="job-years">Years:</label>
        <input type="text" name="job-years" placeholder="e.g., 2021-present" required>
    `;
    workExperienceFields.insertBefore(newEntry, workExperienceFields.querySelector('button') as HTMLElement);
};

// Function to toggle section visibility
const toggleSectionVisibility = (sectionId: string) => {
    const section = document.getElementById(sectionId) as HTMLElement;
    section.classList.toggle('hidden');
};

// Function to handle image upload and preview
const handleProfilePictureChange = (event: Event) => {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = document.getElementById('profile-pic-preview') as HTMLImageElement;
            img.src = e.target?.result as string;
            img.classList.remove('hidden');
        };
        reader.readAsDataURL(file);
    }
};

// Function to display resume data
const displayResume = () => {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const profilePic = (document.getElementById('profile-pic-preview') as HTMLImageElement).src;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;

    // Get education details
    const educationEntries = document.querySelectorAll('.education-entry');
    let educationContent = '';
    educationEntries.forEach(entry => {
        const degree = (entry.querySelector('[name="education-degree"]') as HTMLInputElement).value;
        const school = (entry.querySelector('[name="education-school"]') as HTMLInputElement).value;
        const year = (entry.querySelector('[name="education-year"]') as HTMLInputElement).value;
        educationContent += `<p><strong>${degree}</strong> from <em>${school}</em>, ${year}</p>`;
    });

    // Get work experience details
    const workEntries = document.querySelectorAll('.work-entry');
    let workContent = '';
    workEntries.forEach(entry => {
        const jobTitle = (entry.querySelector('[name="job-title"]') as HTMLInputElement).value;
        const company = (entry.querySelector('[name="company"]') as HTMLInputElement).value;
        const jobYears = (entry.querySelector('[name="job-years"]') as HTMLInputElement).value;
        workContent += `<p><strong>${jobTitle}</strong> at <em>${company}</em>, ${jobYears}</p>`;
    });

    // Update resume display
    const displayPersonalInfo = document.getElementById('display-personal-info') as HTMLElement;
    displayPersonalInfo.innerHTML = `
        <img src="${profilePic}" alt="Profile Picture" class="profile-pic">
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
    `;

    const displayEducation = document.getElementById('display-education') as HTMLElement;
    displayEducation.innerHTML = educationContent || '<p>No education information provided.</p>';

    const displaySkills = document.getElementById('display-skills') as HTMLElement;
    displaySkills.innerHTML = skills ? `<p>${skills}</p>` : '<p>No skills provided.</p>';

    const displayWorkExperience = document.getElementById('display-work-experience') as HTMLElement;
    displayWorkExperience.innerHTML = workContent || '<p>No work experience provided.</p>';
};

// Form submission event handler
const handleFormSubmit = (event: Event) => {
    event.preventDefault();
    displayResume();
};

// Add event listeners
document.getElementById('add-education')?.addEventListener('click', createEducationEntry);
document.getElementById('add-work-experience')?.addEventListener('click', createWorkEntry);
document.getElementById('toggle-skills')?.addEventListener('click', () => toggleSectionVisibility('skills'));
document.getElementById('toggle-education')?.addEventListener('click', () => toggleSectionVisibility('education'));
document.getElementById('profile-picture')?.addEventListener('change', handleProfilePictureChange);
document.getElementById('resume-form')?.addEventListener('submit', handleFormSubmit);

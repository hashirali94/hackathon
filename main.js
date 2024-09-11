const resumeForm = document.getElementById('resume-form');
const resumeContent = document.getElementById('resume-preview');

resumeForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const linkedin = document.getElementById('linkedin').value;
    const github = document.getElementById('github').value;
    const experience = document.getElementById('experience').value;
    const education = document.getElementById('education').value;
    const skills = document.getElementById('skills').value;

    let resumeHTML = `
        <h3>${name}</h3>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>LinkedIn: ${linkedin}</p>
        <p>GitHub: ${github}</p>
        <hr>
        <h3>Summary</h3>
        <p>${experience}</p>
        <hr>
        <h3>Education</h3>
        <p>${education}</p>
        <hr>
        <h3>Skills</h3>
        <p>${skills}</p>
    `;

    resumeContent.innerHTML = resumeHTML;
});
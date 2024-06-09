let projectData = [
    {
        image: 'img/Screenshot (1).png',
        name: 'project one',
        detail: 'Quiz App',
        github: 'https://github.com/Krypto2000/quiz-app',
        live: '#',
        tags: '#javascript, #frontend, #css'
    },
    {
        image: 'img/Screenshot_9-6-2024_14494_krypto2000.github.io.jpeg',
        name: 'project two',
        detail: 'Login Form',
        github: 'https://github.com/Krypto2000/login-page-with-form-validatin-local-storage1',
        live: '#',
        tags: '#javascript, #css'
    },
    {
        image: 'img/Screenshot_9-6-2024_144412_gallery-website-henna.vercel.app.jpeg',
        name: 'project three',
        detail: 'Gallery Website',
        github: 'https://github.com/Krypto2000/Gallery-Website',
        live: 'gallery-website-henna.vercel.app',
        tags: '#javascript'
    },
    
    
]

// creating project cards in frontend

const createProjectCards = (data) => {
    let projectContainer = document.querySelector('.project-container');

    projectContainer.innerHTML += `
            <div class="project-card" data-tags="${data.tags}">
                <div class="project-wrapper">
                    <div class="project-thumbnail">
                        <img src="img/close.png" class="close-btn" alt="">
                        <img src="${data.image}" class="project-img" alt="">
                        <span class="tags">${data.tags}</span>
                    </div>

                    <div class="project-body">
                        <h1 class="project-name">${data.name}</h1>
                        <p class="project-detail">${data.detail}</p>
                        <a href="${data.github}" class="btn">github</a>
                        <a href="${data.live}" class="btn">see live</a>
                    </div>
                </div>
            </div>
    `;
}

projectData.forEach(data => createProjectCards(data));

// document.addEventListener('DOMContentLoaded', function() {
//     // Your JavaScript code here
//     const contactForm = document.querySelector('.contact-btn');

//     // Handle form submission
//     contactForm.addEventListener('submit', function(event) {
//         event.preventDefault(); // Prevent default form submission

//         // Get form data
//         const name = contactForm.querySelector('.name').value;
//         const email = contactForm.querySelector('.email').value;
//         const subject = contactForm.querySelector('.subject').value;
//         const message = contactForm.querySelector('.message').value;

//         // Add form data to Firestore database
//         firebase.firestore().collection('contacts').add({
//             name: name,
//             email: email,
//             subject: subject,
//             message: message,
//             timestamp: firebase.firestore.FieldValue.serverTimestamp() // Add timestamp
//         })
//         .then(() => {
//             // Clear form fields
//             contactForm.reset();
//             // Display success message (optional)
//             alert('Form submitted successfully!');
//         })
//         .catch(error => {
//             console.error('Error submitting form:', error);
//             // Display error message (optional)
//             alert('An error occurred while submitting the form. Please try again.');
//         });
//     });
// });

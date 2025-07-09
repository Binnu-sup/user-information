fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const profileDiv = document.getElementById('profile');
        profileDiv.innerHTML = `
        <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Age:</strong> ${data.age}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p>Location: ${data.location}</p>
        `;
    })
    .catch(error => {
    console.error('Error loadingJSON:', error);
    });
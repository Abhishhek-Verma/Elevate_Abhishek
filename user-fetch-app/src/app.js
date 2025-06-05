const userContainer = document.getElementById('user-data'); // <-- FIXED ID
const reloadButton = document.getElementById('reload-button');

async function fetchUserData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const users = await response.json();
        displayUsers(users);
    } catch (error) {
        userContainer.innerHTML = `<p>Error fetching data: ${error.message}</p>`;
    }
}

function displayUsers(users) {
    userContainer.innerHTML = '';
    users.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.classList.add('user');
        userDiv.innerHTML = `
            <h3>${user.name}</h3>
            <p>Email: ${user.email}</p>
            <p>Address: ${user.address.street}, ${user.address.city}</p>
        `;
        userContainer.appendChild(userDiv);
    });
}

reloadButton.addEventListener('click', fetchUserData);

// Initial fetch
fetchUserData();
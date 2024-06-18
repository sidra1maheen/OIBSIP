// Mock database to store user data (for demo purposes, stored in localStorage)
if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify({}));
}

// Function to handle signup
document.getElementById('signupForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    let username = document.getElementById('signupUsername').value.trim();
    let password = document.getElementById('signupPassword').value.trim();

    if (username === '' || password === '') {
        alert("Please enter both username and password.");
        return;
    }

    let users = JSON.parse(localStorage.getItem('users'));

    if (users.hasOwnProperty(username)) {
        alert("Username already exists. Please choose another one.");
        return;
    }

    // Store user in "database"
    users[username] = {
        password: password
    };

    localStorage.setItem('users', JSON.stringify(users));

    alert("Signup successful! Now you can login.");
    document.getElementById('signupForm').reset();
    window.location.href = 'login.html';
});

// Function to handle login
document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    let username = document.getElementById('loginUsername').value.trim();
    let password = document.getElementById('loginPassword').value.trim();

    if (username === '' || password === '') {
        alert("Please enter both username and password.");
        return;
    }

    let users = JSON.parse(localStorage.getItem('users'));

    if (!users.hasOwnProperty(username)) {
        alert("Username not found. Please register first.");
        return;
    }

    if (users[username].password === password) {
        alert(`Login successful! Welcome, ${username}`);
        window.location.href = "secured_page.html"; // Redirect to secured page
    } else {
        alert("Login failed. Incorrect username or password.");
    }

    document.getElementById('loginForm').reset();
});

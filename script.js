document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from refreshing the page
    
    // Get input values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simple check (you can replace with real backend validation later)
    if (username && password) {
        // Redirect to another page (create dashboard.html later)
        window.location.href = "dashboard.html";
    } else {
        alert("Please enter both username and password.");
    }
});

function login() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
    const msg = document.getElementById("message");

    if (user === "admin" && pass === "admin") {
        msg.textContent = "Login successful!";
        msg.className = "message success";
		
		setTimeout(() => {
            window.location.href = "home.html";
        }, 800);
    } else {
        msg.textContent = "Invalid username or password.";
        msg.className = "message error";
    }
}
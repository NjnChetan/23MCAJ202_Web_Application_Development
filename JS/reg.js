document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('submit').addEventListener('click', validate);
});

function validate() {
    
    let email = document.getElementById("email").value.trim();
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();
    let ch_password = document.getElementById("ch_password").value.trim();


    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com)$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid Email address.");
        return false;
    }


    let passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$/;


    if (!passwordPattern.test(password)) {
        alert("Password must have at least:\n 5 characters\n 1 uppercase letter\n 1 lowercase letter\n 1 number\n 1 special character (@$!%*?&)");
        return false;
    }

    if (password !== ch_password) {
        alert("Passwords do not match. Please check!");
        return false;
    }

   
    alert(" Registration successful!");
    return true;
}

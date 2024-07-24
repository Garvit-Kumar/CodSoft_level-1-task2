function submiit() {
    var moreText = document.getElementById("more");
    moreText.style.display = "block"; // Show the hidden content
    let hidden = document.getElementById("hide");
    hidden.style.display ="none";
}

function login() {
    let val = document.getElementById('email').value;
    let pas = document.getElementById('passs').value;
    let errorMessage = document.getElementById('error-message');
    if (val == '' || pas == '') {
        errorMessage.textContent = "Please enter both Email and Password.";
        return;
    }
    if (val == 'garvitchaudhary534@gmail.com' && pas == 'garvit@123') {
        // alert("Login successful!");
        // Redirect to another page
        window.location.href = "profile.html";
    } else {
        alert("Invalid email or password. Please try again.");
    }
    document.getElementById('email').value="";
    document.getElementById('passs').value="";


}
function set() {
    let value = document.getElementById('passs');
    let eye=document.getElementById('eye');
    eye.style.display="block"

    if (value.getAttribute('type') == 'password') {
        value.setAttribute('type', 'type');
        eye.setAttribute('class','fa fa-eye')

    } else {
        value.setAttribute('type', 'password');
        eye.setAttribute('class','fa fa-eye-slash')

    }
}
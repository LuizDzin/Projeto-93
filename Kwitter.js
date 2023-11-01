function addUser() {

userName = document.getElementById("logIn").value;

localStorage.setItem("logIn", userName);

window.location = "Kwitter_room.html"
}


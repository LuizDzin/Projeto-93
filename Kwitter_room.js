firebaseConfig = {
    apiKey: "AIzaSyBvX8i8dbpCpCLtNjP_N64Pl6X0aJNulaY",
    authDomain: "aula-93-38904.firebaseapp.com",
    databaseURL: "https://aula-93-38904-default-rtdb.firebaseio.com",
    projectId: "aula-93-38904",
    storageBucket: "aula-93-38904.appspot.com",
    messagingSenderId: "674520410757",
    appId: "1:674520410757:web:8459a18c03a5ed6c0217ec"
  };
  
firebase.initializeApp(firebaseConfig);

userName = localStorage.getItem("logIn");  

document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";

function addRoom() {
    room_name = document.getElementById("room_name").value;
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey =
childSnapshot.key;
roomNames = childKey;
//Início do código

//Fim do código
});});}
getData();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitterRoom.html";
}
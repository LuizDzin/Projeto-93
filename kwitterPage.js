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
    roomName = localStorage.getItem("room_name")

    function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(roomName).push({
    name:userName,
    message:msg,
    like:0
});
    }

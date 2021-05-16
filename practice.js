
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyDrRYkiWTUspyUP-z6GJupIxAWSIXZtKQM",
    authDomain: "kwitter-1-92a68.firebaseapp.com",
    databaseURL: "https://kwitter-1-92a68-default-rtdb.firebaseio.com",
    projectId: "kwitter-1-92a68",
    storageBucket: "kwitter-1-92a68.appspot.com",
    messagingSenderId: "48573245965",
    appId: "1:48573245965:web:2a9ce4591b78989e268344",
    measurementId: "G-WTG1EE92RX"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser() {
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose : "adding user"
      });
  }
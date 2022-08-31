user_name = localStorage.getItem("user_name");

word = "<h4 id='word_display'> Welcome "+user_name+"</h4>";

document.getElementById("name").innerHTML = word;

//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
  apiKey: "AIzaSyBpGbH1XKzcQj3rdpyNWEmGRQN4oP9xZnc",
  authDomain: "let-s-chat-web-app-f84d4.firebaseapp.com",
  databaseURL: "https://let-s-chat-web-app-f84d4-default-rtdb.firebaseio.com",
  projectId: "let-s-chat-web-app-f84d4",
  storageBucket: "let-s-chat-web-app-f84d4.appspot.com",
  messagingSenderId: "849222816679",
  appId: "1:849222816679:web:8ae643f059bd4f20149c82"
      };
      
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

  
   


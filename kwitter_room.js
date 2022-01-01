
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBy9opJMArqUAM5uqNs1OaX0w4n0mSNMnI",
      authDomain: "kwitter-ae388.firebaseapp.com",
      databaseURL: "https://kwitter-ae388-default-rtdb.firebaseio.com",
      projectId: "kwitter-ae388",
      storageBucket: "kwitter-ae388.appspot.com",
      messagingSenderId: "241106036029",
      appId: "1:241106036029:web:2a0cbce9ea615b42ec1154"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

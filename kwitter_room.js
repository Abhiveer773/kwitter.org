
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyDaMWbg8tjxhBEl2gcA9Wvj3vc1R8ByCRg",
      authDomain: "covid19-mmpk.firebaseapp.com",
      databaseURL: "https://covid19-mmpk-default-rtdb.firebaseio.com",
      projectId: "covid19-mmpk",
      storageBucket: "covid19-mmpk.appspot.com",
      messagingSenderId: "230840471796",
      appId: "1:230840471796:web:7e203d3e4270cef6d24ea1"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML ="welcome " +  user_name + "!";


function add_room()
{
     room_name =  document.getElementById("room_name").value;
     firebase.database().ref("/").child(room_name).update({
           purpose : "adding room name"
     });

     localStorage.setItem("room_name" , room_name);
     window.location = "kwitter_page.html";
}

function logout() 
{
      window.location = "index.html";
}

function getData() {
       firebase.database().ref("/").on('value', function(snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function(childSnapshot) {
            childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log("room_name" + Room_names);

       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";

       document.getElementById("output").innerHTML += row ;
      //End code
      });});}
getData();



function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name" , name);
window.location = "kwitter_page.html";
}
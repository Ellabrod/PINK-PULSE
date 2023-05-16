 type="module" 

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfUrXDJizSIh6kYNL0EC9PD0qJ1_8E-vQ",
  authDomain: "pink-plusee.firebaseapp.com",
  databaseURL: "https://pink-plusee-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "pink-plusee",
  storageBucket: "pink-plusee.appspot.com",
  messagingSenderId: "416272222218",
  appId: "1:416272222218:web:122ee89aa428ec8d70b7f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import {getDatabase, ref, get, set, child, update, remove}
from "https://www.gstatic.com/firebasejs/9.18.0/firebase-database.js"




const db = getDatabase();

      var enterID = document.querySelector("#enterID");
      var enterName = document.querySelector("#enterName");
      var enterPassword = document.querySelector("#enterPassword");
      var findID = document.querySelector("#findID");
      var findName = document.querySelector("#findName");
      var findPassword = document.querySelector("#findPassword");

      var insertBtn = document.querySelector("#insert");
      var updateBtn = document.querySelector("#update");
      var removeBtn = document.querySelector("#remove");
      var findBtn = document.querySelector("#find");

      function insertData() {
        set(ref(db, "accounts/" + enterID.value),{
          ID: enterID.value,
          Name: enterName.value,
          Password: enterPassword.value
        }) .then(()=>{
          alert("Your Account has been Created ☆");
      })
      .catch((error)=>{
          alert(error);
      });

  }

  

      function findData() {
        const dbref = ref(db);

            get(child(dbref, "accounts/" + findID.value))
            .then((snapshot)=>{
                if(snapshot.exists()){
                    findName.innerHTML = "Name: " + snapshot.val().Name;
                    findPassword.innerHTML = "Password: " + snapshot.val().Password;
                } else {
                    alert("No data found");
                }
            })
            .catch((error)=>{
                alert(error)
            })

        
      }

      function updateData(){
        update(ref(db, "accounts/"+ enterID.value),{
                Name: enterName.value,
                Password: enterPassword.value
            })
            .then(()=>{
                alert("account updated");
            })
            .catch((error)=>{
                alert(error);
            });
        
      }

      function removeData() {
        remove(ref(db, "accounts/" + enterID.value))
            .then(()=>{
                alert("account deleted");
            })
            .catch((error)=>{
                alert(error);
            });
        
      }

      insertBtn.addEventListener('click', insertData)
      updateBtn.addEventListener('click', updateData)
      removeBtn.addEventListener('click', removeData)
      findBtn.addEventListener('click', findData)



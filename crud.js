// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDDGq5zqKvqHubuOXs77vQAAADgSANC0Kw",
    authDomain: "myproject-9d6be.firebaseapp.com",
    projectId: "myproject-9d6be",
    storageBucket: "myproject-9d6be.appspot.com",
    messagingSenderId: "987164980775",
    appId: "1:987164980775:web:bcecb6bd436992f92a8002",
    measurementId: "G-TPXSNDCGVJ"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var refe=firebase.database().ref().child("Student Details")
function Insert(){
    var name=document.getElementById("uname").value;
    var rno=document.getElementById("urno").value;
    refe.child(rno).set({
        Studentname:name,
        Rollnumber:rno
    })
    console.log("Data Inserted")
}
function Delete(){
    let temp=window.prompt("Enter the rollnumber to be deleted");
    refe.child(temp).remove();
    console.log("Data deleted");
}
function Update(){
    var name=document.getElementById("uname").value;
    var rno=document.getElementById("urno").value;
    refe.child(rno).update({
        Studentname:name
    })
    console.log("Data Updated")
}
function Display(){
        table=document.createElement("TABLE")
        row=table.insertRow(-1);
        var name=row.insertCell(-1);
        var rno=row.insertCell(-1);
        name.innerHTML="<center>NAME</center>";
        rno.innerHTML="<center>ROLL_NO</center>"
        table.border=1;
          refe.on('child_added',function(snap){
            row=table.insertRow(-1);
            var name=row.insertCell(-1);
            var rno=row.insertCell(-1);
              console.log(snap.val().Studentname)
              name.innerHTML=`<center>${snap.val().Studentname}</center>`
              console.log(snap.val().Rollnumber)
              rno.innerHTML=`<center>${snap.val().Rollnumber}</center>`
          })
    document.getElementById("div").append(table)
    console.log("Data displayed")
}
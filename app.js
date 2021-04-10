const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");
firebase.initializeApp({
    apiKey: "AIzaSyBhBMKX8BY4VpZWYwikf1HroGctGHwvD9Q",
    authDomain: "home-expenditure-a0015.firebaseapp.com",
    projectId: "home-expenditure-a0015"
});

var db = firebase.firestore();
db.collection("users").add({
        items: "wheat",
        amount: 100,
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
db.collection("users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(doc.data());
        //  console.log(`${doc.id} => ${doc.data()}`);
    });
});
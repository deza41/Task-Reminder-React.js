 import firebase from "firebase/app";
 //import "firebase/auth";
 import "firebase/database";

const config = {
    apiKey: 'AIzaSyDY3t4ZwFUoZLMGEm8i_KoQPGzFdlRpokU',
    authDomain: `tyrones-task-tracker.firebaseapp.com`,
    databaseURL: `https://tyrones-task-tracker-default-rtdb.firebaseio.com`,
    projectId: 'tyrones-task-tracker',
  };

function initFirebase()
{
    if(!firebase.apps.length){
        firebase.initializeApp(config);
    }
}

initFirebase()

export {firebase};
import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// database
// .ref('expenses')
// .push({
//     description: 'Rent',
//     note: '',
//     amount: 190000,
//     createdAt: 0
// });

// database
// .ref('expenses')
// .once('value')
// .then((snapshots) => {
//     const expenses = [];

//     snapshots.forEach(snapshot => {
//         expenses.push({
//             id: snapshot.key,
//             ...snapshot.val()
//         })
//     });

//     console.log(expenses);
// })
// .catch(err => console.log(err));

// database
// .ref('expenses')
// .on('value', (snapshots) => {
//     const expenses = [];

//     snapshots.forEach(snapshot => {
//         expenses.push({
//             id: snapshot.key,
//             ...snapshot.val()
//         })
//     });

//     console.log(expenses);
// })
import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// database.ref('expenses').on('child_removed',(snapshot) => {
//     console.log('Removed: ',snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed',(snapshot) => {
//     console.log('Updated: ',snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added',(snapshot) => {
//     console.log('Added: ',snapshot.key, snapshot.val());
// });
// database.ref('expenses').on('value',(snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// });

// database.ref('expenses').once('value')
//     .then((snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
//     });

// database.ref('expenses').push({
//     description: 'Electric bill',
//     amount: 12300,
//     note: '1. quarter',
//     createdAt: 10000
// });
// database.ref('expenses').push({
//     description: 'Insurance',
//     amount: 54650,
//     note: 'Fire and damage',
//     createdAt: 20000
// });
// database.ref('expenses').push({
//     description: 'Rent',
//     amount: 87799,
//     note: 'Raised 2019',
//     createdAt: 0
// });

//Fetching data (either fetch data once, or subscribe to data)
// database.ref().on('value', (snapshot)=> {
//     const data = snapshot.val();
//     console.log(`${data.name} is a ${data.job.title} at ${data.job.company}.`);
// }, (e) => {
//     console.log('Error fetching data: ',e)
// });

// database.ref().off();

// database.ref().once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data: ', e);
//     });

// database.ref().set({
//     name: 'Odd Andreas Hartvigsen',
//     age: 41,
//     stressLevel: 6,
//     job: {
//         title: 'Software developer',
//         company: 'Google'
//     },
//     hasSleigh: true,
//     location: {
//         country: 'Norway',
//         city: 'Flaktveit'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((e) => {
//     console.log('This failed: ', e);
// });

// //Update does not update nested objects, must use this syntax)
// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// });

// database.ref('stressLevel').remove()
//     .then(() => {
//         console.log('Removed successfully!');
//     })
//     .catch((e) => {
//         console.log('Remove failed',e);
//     });
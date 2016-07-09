//
//
// firebase.initializeApp(
//   {
//     apiKey: "AIzaSyA1xJpVFCwyiCCTfzXIgiri7a6eLd8vnzM",
//     authDomain: "test-9eee4.firebaseapp.com",
//     databaseURL: "https://test-9eee4.firebaseio.com"
//   })
//
// const db = firebase.database()
//
//
// // db.ref('users/2')
//   // .set({
//   //   description: 'Let have fun',
//   // })
//
//
// const INITIAL_STATE = db.ref('activities/')
//   .on('value', (snapshot) => {
//     return snapshot.val()
//   })
//
// console.log(INITIAL_STATE);
//




const INITIAL_STATE = {
  "currentUser": null,
  "activities":[
    {
      "id":1,
      "activityCreator":56,
      "activityStart":"2016-09-27T18:30:49.782Z",
      "activityEnd":"2016-09-27T21:30:49.782Z",
      "formattedAddress":"18 Kohimarama Rd, Kohimarama, Auckland 1071, New Zealand",
      "title":"Touch Rugby Tounament",
      "subtitle":"Referees needed for touch rugby tournamet this weekend!!!",
      "description":"Our local touch rugby club is having a tounament and needs eager volunteers to referee the games. No experience necessary, all training will be provided",
      "tasks":"Running, refereeing",
      "numberRequired":10,
      "images":[
        "localhost:8080/images/05.jpg"
      ],
      "attendeeIds":[
        1,
        3,
        5,
        6,
        12,
        10089
      ]
    },
    {
      "id":2,
      "activityCreator":809,
      "activityStart":"2016-09-28T18:30:49.782Z",
      "activityEnd":"2016-09-28T21:30:49.782Z",
      "formattedAddress":"85 Gladstone Rd, Parnell, Auckland 1052, New Zealand",
      "title":"Clean up Dove-Myer Park",
      "subtitle":"Dove-Myer park needs a clean",
      "description":"We're cleaning up DM park this weekend",
      "tasks":"Rubbish collection",
      "numberRequired":20,
      "images":[
        "localhost:8080/images/01.jpg",
        "localhost:8080/images/02.jpg",
        "localhost:8080/images/01.jpg"
      ],
      "attendeeIds":[
        92,
        85,
        91,
        19,
        776
      ]
    }
  ],
  "activeActivityId": null
}
export default INITIAL_STATE

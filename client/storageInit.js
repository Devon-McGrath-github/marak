import {storage} from './dbInit'

const storageRef = storage.ref();

const imagesRef = storageRef.child('images');

const cleanUpRef = storageRef.child('images/cleanUpRef.jpg');

// File or Blob, assume the file is called rivers.jpg

// Upload the file to the path 'images/rivers.jpg'
// We can use the 'name' property on the File API to get our file name
export const uploadImages = (fileList, callback) => {
  for(let i = 0; i < fileList.length; i++) {
    var uploadTask = storageRef.child('images/' + fileList[i].name).put(fileList[i])
    uploadTask.on('state_changed', function(snapshot) {

      }, function(error) {

      }, function() {
        var downloadURL = uploadTask.snapshot.downloadURL;
        callback(uploadTask.snapshot.downloadURL)
        console.log(downloadURL);
    })
  }
}


//       .then()
//       .catch((error) => {
//         console.log(error);
//       })
//     console.log(fileList[i]);
//     }
//   debugger
//   // const uploadTask =
// }

// Register three observers:
// 1. 'state_changed' observer, called any time the state changes
// 2. Error observer, called on failure
// 3. Completion observer, called on successful completion
// uploadTask.on('state_changed', function(snapshot){
//   // Observe state change events such as progress, pause, and resume
//   // See below for more detail
// }, function(error) {
//   // Handle unsuccessful uploads
// }, function() {
//   // Handle successful uploads on complete
//   // For instance, get the download URL: https://firebasestorage.googleapis.com/...
//   var downloadURL = uploadTask.snapshot.downloadURL;
// });

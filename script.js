var app = angular.module('myApp', []);
app.controller('MainCtrl', function($scope,$http) {
  $scope.firstName = "John";
  $scope.lastName = "Doe";
  $scope.message = "Hello, Angular! From John Doe";
  var person = {
    "firstName": "Sowmya",
    "lastName": "Bobbili",
    "imgUrl": "https://vignette.wikia.nocookie.net/p__/images/f/f6/1000px-Mainpage_Navmap_Thumb_-_Jewel.png/revision/latest?cb=20141003135417&path-prefix=protagonist"

  }
  $scope.person = person;
  $http.get("https://api.github.com/users/mojombo")
  .then(function(resp){
    $scope.response={
      "location":resp.data.location
    }
  })
});

//*****************Module 2 in Plural Sight Course************
//***************IIFE************
// // var finalFunction = function() {
// (
//   function() {
//     var createWorker = function() {

//       var workCounter;

//       var task1 = function() {
//         workCounter += 1;
//         console.log("task 1");
//       }

//       var task2 = function() {
//         workCounter += 1;
//         console.log("task 2");
//       }

//       return {
//         job1: task1,
//         job2: task2
//       }

//     }
//     var worker = createWorker();
//     //worker.task1();
//     worker.job1();
//     worker.job2();
//     worker.job1();
//     worker.job2();
//   }()
// );

// // finalFunction();
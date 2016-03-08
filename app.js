//'use strict'
//
// function answer() {
//   console.log('answer()')
//   console.log(x);
//   return x;
// }
// answer();
//
// // global variables
// var x = 42; // seen Hoisting in action
// answer();
//
// //const NAME = 'James'; // const should never change
// //const HOBBY = 'programming';
// function start() {
//   console.log('readddyyyy');
// }
// var app = app || {};
// app.NAME = 'James';
// console.log(app);
// app.start = function() {
//   //console.log('lets go');
// }
//
//
// {
//   // console.log("Today we will discuss Lexical Scope + Closures!");
//   // console.log("We will also explore some concepts that live purely in Node.js (not on the Web).");
//   // console.log("However, Lexical Scope and Closures exist on the web!");
//   // console.log("Are you ready? [Shout YES! when you read this]");
// }
//
// //for (let i = 0; i < 1; i++) {
// //   console.log(i);
// // }
// //console.log(i);
// // for (var j = 0; j < 1; j++) {
// //   //console.log(j);
// // }
// // console.log(j);
//
// if (true) {
//   console.log('huzzah');
//   // non specific block of code...
//   {
//     console.log('yay');
//     console.log(x);
//     app.start();
//     console.log(app);
//   }
// }

//answer();




// closuresssss
function calculatePlanetMass(radius, density) {
  var planet = "Earth";
  console.log(radius);
  console.log(density);
  function toString() {
    var stuff = 'jim\'s guitar';
    return planet + ":" + radius + "," + density;
  }
  //console.log(stuff);
  return toString();
}
calculatePlanetMass(10878, 10);
console.log(calculatePlanetMass(1,1));


function Car(make, model) {
  this.make = make;
  this.model = model;
  this.toString = function() {
    return this.make + ',' + this.model;
  }
}
var Ford = new Car('Ford', '87 Ranger');
console.log(Ford.toString());

// end closures


$.ajax(something).done(function(data) {
  // closure for $.ajax
  console.log(data);
});


$.ajax({
  success: function(data) {
    console.log(data);
  }
})

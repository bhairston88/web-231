/*
============================================
; Title:  hairston-complex-data-structures.js
; Author: Professor Krasso
; Date:   28 June 2020
; Modified by: Brooklyn Hairston
; Description: Demonstrates how to filter
; a collection of array-like objects
;===========================================
*/

//header
const header = require('./hairston-header.js')

console.log(header.display('Brooklyn','Hairston', 'Filtering/Reducing Complex Data Structures'))

//start program

//collection of objects

var composers = [
  {
    firstName: "Claude",
    lastName: "Debussy",
    genre: "Classical",
    rating: 9
  },
  {
    firstName: "Ludwig van",
    lastName: "Beethoven",
    genre: "Classical",
    rating: 6
  },
  {
    firstName: "Wolfgang Amadeus",
    lastName: "Mozart",
    genre: "Classical",
    rating: 8
  },
  {
    firstName: "Antonio",
    lastName: "Vivaldi",
    genre: "Classical",
    rating: 7
  },
  {
    firstName: "Johann",
    lastName: "Strauss",
    genre: "Classical",
    rating: 6
  }
  ];

  var ratings = composers.map(function(music) {
    return music.rating
  });

  var genres = composers.map(function(music) {
    return music.genre
  });

  //new line
  console.log("\n");

  //output
  console.log("--COMPOSER BY RATING--");
  composers.forEach(function(music) {
    console.log("Rating: " + music.rating + "\n" + "Composer: " + music.lastName + "\n")
  });

  //new line
  console.log("\n");

  //output
  console.log("--COMPOSER BY GENRE--")
  composers.forEach(function(music) {
    console.log("Genre: " + music.genre + "\n" + "Composer: " + music.lastName + "\n")
  });

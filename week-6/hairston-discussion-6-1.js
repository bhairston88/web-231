/*
============================================
; Title:  hairston-discussion-6-1.js
; Author: Brooklyn Hairston
; Date:    June 2020
; Modified by: Brooklyn Hairston
; Description: Program using object properties with multiple errors
;===========================================
*/

//header
const header = require('./hairston-header.js')

console.log(header.display('Brooklyn','Hairston','Discussion'))

//start program

//program without errors

var friday = {
              appetizer: "Stuffed Mushrooms",
              entree: "Chicken Alfredo",
              dessert: "Chocolate Cake",
             };

var saturday = {
               appetizer: "Potato Skins",
               entree: "Cheeseburgers",
               dessert: "Ice Cream",
             };

var sunday = {
               appetizer: "French Onion Soup",
               entree: "Club Sandwich",
               dessert: "Apple Pie",
             };

function menu() {
  console.log("Tonight\'s dinner is: " + this.appetizer + ", " + this.entree + " and " + this.dessert + ".");
}
friday.menu = menu;
saturday.menu = menu;
sunday.menu = menu;

console.log("\n");
saturday.menu();

//program with multiple errors

/** expected output:
 * Tonight's dinner is: Potato Skins, Cheeseburgers and Ice Cream.
 */

/**
var friday: {
  appetizer = "Stuffed Mushrooms",
  entree = "Chicken Alfredo",
  dessert = "Chocolate Cake"

}
var saturday: {
   appetizer = "Potato Skins",
   entree = "Cheeseburgers",
   dessert = "Ice Cream"
 };

var sunday = {
   appetizer: "French Onion Soup",
   entree: "Club Sandwich",
   dessert: "Apple Pie"
 };

function menu() {
console.log("Tonight's dinner is: " + this.appetizer + ", " + this.entree + " and " + this.dessert + ".");
}

friday.menu = menu;
saturday.menu = menu;
sundaymenu = menu;

console.log("\n");
saturday.menu();

*/




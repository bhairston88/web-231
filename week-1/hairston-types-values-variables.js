/*
========================================
; Title: Assignment 1.5
; Author: Brooklyn Hairston
; Date: 31 May 2020
; Description: 
;========================================
*/

//variable declaration 

var firstName;
var lastName;
var address;
var payRate;
var hireDate;

//variable assignment record 1

firstName = "Harry";
lastName = "Potter";
address = "12 Grimmauld Place";
payRate = 18.50;
hireDate = new Date(2010, 2, 3); 

//output

console.log(firstName);
console.log(lastName);
console.log(address);
console.log(payRate.toFixed(1));
console.log(hireDate.toLocaleDateString());

//variable assignment record 2
firstName = "Hermione";
lastName ="Granger";
address = "14 Muggleborn Ln";
payRate = 20.00;
hireDate = new Date(2009, 1, 4); 

//output

console.log(firstName);
console.log(lastName);
console.log(address);
console.log(payRate.toFixed(1));
console.log(hireDate.toLocaleDateString());

//variable assignment record 3

firstName = "Ron";
lastName = "Weasley";
address = "The Burrow";
payRate = 17.75; 
hireDate = new Date(2012, 5, 8); 

//output

console.log(firstName);
console.log(lastName);
console.log(address);
console.log(payRate.toFixed(1));
console.log(hireDate.toLocaleDateString());
'use strict';

const triangle = require('./triangle.js');
const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question("Enter all 3 sides of the triangle, separated by one (1) space: ", function (answer) {

	// split the sides
	let sides = answer.split(" ");

	// convert to float
	sides = sides.map(function (side) {
		return +(side);
	});

	// get the triangle classification
	let tri = new triangle(...sides);
	console.log("Classification: " + tri.getClassification());

	rl.close();
});

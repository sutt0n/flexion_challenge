/**
 * Triangle Classifier
 * 
 * @author Joseph Sutton <ebwebdev@gmail.com> <https://github.com/sutt0n>
 * @github https://github.com/sutt0n/flexion_challenge
 */

class triangle {
	/**
	 * Constructor
	 * 
	 * @param {int} a 
	 * @param {int} b 
	 * @param {int} c 
	 */
	constructor(a, b, c) {
		this.sideA = a;
		this.sideB = b;
		this.sideC = c;
	};

	/**
	 * @return {string} ("equilateral", "isosceles", "scalene", "not a triangle")
	 */
	getClassification() {

		let me = this;

		let a = me.sideA,
			b = me.sideB,
			c = me.sideC;
		
		if (a == b && b == c) {
			return "equilateral";
		} else if (a == b || b == c) {
			return "isoceles";
		} else {

			// determine if "scalene" or "not a triangle"

			let sides = [a, b, c];
			let max = sides.reduce(function (a, b) {
				return Math.max(a, b);
			});

			let idx = sides.indexOf(max);
			
			// remove the maximum number
			sides.slice(0, idx);

			let sum = sides.reduce(function (a, b) {
				return a + b;
			});

			return (sum > max) ? "scalene" : "not a triangle";

		}


	}
};
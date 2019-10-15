// @flow
import Position from "../../concepts/position.js";

import Rectangle from "./rectangle.js";

type SquareOptions = {|
	sideLength: number
|} | {|
	diagonalLength: number
|} | {|
	perimeter: number
|} | {|
	area: number
|};

/**
 *
 *
 * @author nnmrts <nanomiratus@gmail.com>
 * @date 2019-09-21
 * @class Square
 * @extends {Rectangle}
 */
class Square extends Rectangle {
	+equilateral = true;

	+isotoxal = true;

	+tangential = true;

	/**
	 * creates an instance of Square
	 * @author nnmrts <nanomiratus@gmail.com>
	 * @date 2019-09-21
	 * @param {SquareOptions} [options={sideLength: 1}]
	 * side length
	 * @param {Position} [position=new Position(0, 0)]
	 * position
	 * @memberof Square
	 */
	constructor(options: SquareOptions = {
		sideLength: 1
	}, position: Position = new Position(0, 0)) {
		let sideLength;

		if (options.sideLength) {
			sideLength = options.sideLength;
		}
		else if (options.diagonalLength) {
			sideLength = options.diagonalLength / Math.sqrt(2);
		}
		else if (options.perimeter) {
			sideLength = options.perimeter / 4;
		}
		else if (options.area) {
			sideLength = Math.sqrt(options.area);
		}

		if (sideLength) {
			super({
				sideALength: sideLength,
				sideBLength: sideLength
			}, position);
		}
		else {
			throw new Error("invalid");
		}
	}
}

export default Square;

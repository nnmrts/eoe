// @flow
import Position from "../../concepts/position.js";

import Parallelogram from "./parallelogram.js";

type RectangleOptions = {|
	sideALength: number,
	sideBLength: number
|};

/**
 *
 *
 * @author nnmrts <nanomiratus@gmail.com>
 * @date 2019-09-23
 * @class Rectangle
 * @extends {Parallelogram}
 */
class Rectangle extends Parallelogram {
	+cyclic = true;

	+isogonal = true;

	+closed = false;

	/**
	 * creates an instance of Rectangle
	 * @author nnmrts <nanomiratus@gmail.com>
	 * @date 2019-09-23
	 * @param {RectangleOptions} [options={
	 * 		sideALength: 1,
	 * 		sideBLength: 2
	 * 	}]
	 * options
	 * @param {Position} position
	 * position
	 * @memberof Rectangle
	 */
	constructor(options: RectangleOptions = {
		sideALength: 1,
		sideBLength: 2
	}, position: Position) {
		super();
	}
}

export default Rectangle;

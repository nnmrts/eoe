// @flow
import Point from "../zero/point.js";

import Parallelogram from "./parallelogram.js";

type RectangleOptions = {|
	edge1Length: number,
	edge2Length: number,
	vertex1: Point
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

	+equiangular = true;

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
		edge1Length: 1,
		edge2Length: 2,
		vertex1: new Point(0, 0)
	}) {
		super();
	}
}

export default Rectangle;

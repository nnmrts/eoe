// @flow

import Point from "./zero/point.js";

/**
 * zero-dimensional space
 *
 * @author nnmrts <nanomiratus@gmail.com>
 * @date 2019-09-19
 * @class ZeroDimensionalSpace
 */
class ZeroDimensionalSpace {
	position: Point;

	x: number;

	y: number;

	z: number;

	/**
	 * creates an instance of ZeroDimensionalSpace
	 * @author nnmrts <nanomiratus@gmail.com>
	 * @date 2019-09-19
	 * @param {Position} position
	 * position
	 * @memberof ZeroDimensionalSpace
	 */
	constructor(position: Point) {
		this.position = position;

		const {
			x,
			y,
			z
		} = position;

		Object.assign(this, {
			x,
			y,
			z
		});
	}
}

export default ZeroDimensionalSpace;

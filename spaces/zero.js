// @flow

import Position from "../concepts/position.js";

/**
 * zero-dimensional space
 *
 * @author nnmrts <nanomiratus@gmail.com>
 * @date 2019-09-19
 * @class Zero
 */
class Zero {
	position: Position;

	x: number;

	y: number;

	z: number;

	/**
	 * creates an instance of Zero
	 * @author nnmrts <nanomiratus@gmail.com>
	 * @date 2019-09-19
	 * @param {Position} position
	 * position
	 * @memberof Zero
	 */
	constructor(position: Position) {
		this.position = position;

		const [
			x,
			y,
			z
		] = position;

		Object.assign(this, {
			x,
			y,
			z
		});
	}
}

export default Zero;

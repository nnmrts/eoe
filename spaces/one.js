// @flow

import Position from "../concepts/position.js";

import ZeroDimensionalSpace from "./zero.js";
import Square from "./two/square.js";

/**
 * one-dimensional space
 *
 * @author nnmrts <nanomiratus@gmail.com>
 * @date 2019-09-20
 * @class OneDimensionalSpace
 * @extends {Array<ZeroDimensionalSpace>}
 */
class OneDimensionalSpace extends Array<ZeroDimensionalSpace> {
	/**
	 * creates an instance of OneDimensionalSpace
	 *
	 * @author nnmrts <nanomiratus@gmail.com>
	 * @date 2019-09-20
	 * @param {Square} boundary
	 * boundary
	 * @param {number} step
	 * step
	 * @memberof OneDimensionalSpace
	 */
	constructor(boundary: Square, step) {
		super();
	}
}

export default OneDimensionalSpace;

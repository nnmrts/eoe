// @flow

import Position from "../concepts/position.js";

import OneDimensionalSpace from "./one.js";

/**
 * two-dimensional space
 *
 * @author nnmrts <nanomiratus@gmail.com>
 * @date 2019-10-11
 * @class TwoDimensionalSpace
 * @extends {Array<OneDimensionalSpace>}
 */
class TwoDimensionalSpace extends Array<OneDimensionalSpace> {
	/**
	 * creates an instance of TwoDimensionalSpace
	 *
	 * @author nnmrts <nanomiratus@gmail.com>
	 * @date 2019-10-11
	 * @memberof TwoDimensionalSpace
	 */
	constructor() {
		super();
	}
}

export default TwoDimensionalSpace;

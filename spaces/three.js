// @flow

import Position from "../concepts/position.js";

import TwoDimensionalSpace from "./two.js";

/**
 * three-dimensional space
 *
 * @author nnmrts <nanomiratus@gmail.com>
 * @date 2019-10-11
 * @class ThreeDimensionalSpace
 * @extends {Array<TwoDimensionalSpace>}
 */
class ThreeDimensionalSpace extends Array<TwoDimensionalSpace> {
	/**
	 * creates an instance of ThreeDimensionalSpace
	 *
	 * @author nnmrts <nanomiratus@gmail.com>
	 * @date 2019-10-11
	 * @memberof ThreeDimensionalSpace
	 */
	constructor() {
		super();
	}
}

export default ThreeDimensionalSpace;

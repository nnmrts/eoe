// @flow
import SmoothCurve from "./smooth-curve.js";

/**
 *
 *
 * @author nnmrts <nanomiratus@gmail.com>
 * @date 2019-10-15
 * @class Oval
 * @extends {SmoothCurve}
 */
class Oval extends SmoothCurve {
	+closed = true;

	+convex = true;

	/**
	 * creates an instance of Oval
	 * @author nnmrts <nanomiratus@gmail.com>
	 * @date 2019-10-15
	 * @memberof Oval
	 */
	constructor() {
		super();
	}
}

export default Oval;

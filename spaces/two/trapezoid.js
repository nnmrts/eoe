// @flow

import Quadrilateral from "./quadrilateral.js";

/**
 *
 *
 * @author nnmrts <nanomiratus@gmail.com>
 * @date 2019-10-02
 * @class Trapezoid
 * @extends {Quadrilateral}
 */
class Trapezoid extends Quadrilateral {
	+convex = true;

	/**
	 * creates an instance of Trapezoid
	 * @author nnmrts <nanomiratus@gmail.com>
	 * @date 2019-10-02
	 * @memberof Trapezoid
	 */
	constructor() {
		super();
	}
}

export default Trapezoid;

// @flow

import Curve from "./curve.js";

/**
 *
 *
 * @author nnmrts <nanomiratus@gmail.com>
 * @date 2019-10-15
 * @class SmoothCurve
 * @extends {Curve}
 */
class SmoothCurve extends Curve {
	+smooth = true;

	/**
	 * creates an instance of SmoothCurve
	 * @author nnmrts <nanomiratus@gmail.com>
	 * @date 2019-10-15
	 * @memberof SmoothCurve
	 */
	constructor() {
		super();
	}
}

export default SmoothCurve;

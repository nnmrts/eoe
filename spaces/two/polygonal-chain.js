// @flow
import Curve from "./curve.js";

/**
 *
 *
 * @author nnmrts <nanomiratus@gmail.com>
 * @date 2019-10-02
 * @class PolygonalChain
 * @extends {Curve}
 */
class PolygonalChain extends Curve {
	+equiangular: boolean;

	/**
	 * creates an instance of PolygonalChain
	 * @author nnmrts <nanomiratus@gmail.com>
	 * @date 2019-10-02
	 * @memberof PolygonalChain
	 */
	constructor() {
		super();
	}
}

export default PolygonalChain;

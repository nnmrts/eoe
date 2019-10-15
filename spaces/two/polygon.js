// @flow
import PolygonalChain from "./polygonal-chain.js";

/**
 *
 *
 * @author nnmrts <nanomiratus@gmail.com>
 * @date 2019-10-02
 * @class Polygon
 * @extends {PolygonalChain}
 */
class Polygon extends PolygonalChain {
	+closed = true;

	/**
	 * creates an instance of Polygon
	 * @author nnmrts <nanomiratus@gmail.com>
	 * @date 2019-10-02
	 * @memberof Polygon
	 */
	constructor() {
		super();
	}
}

export default Polygon;

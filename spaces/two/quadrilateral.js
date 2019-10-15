// @flow
import Polygon from "./polygon.js";

/**
 *
 *
 * @author nnmrts <nanomiratus@gmail.com>
 * @date 2019-10-02
 * @class Quadrilateral
 * @extends {Polygon}
 */
class Quadrilateral extends Polygon {
	+edges = 4;

	+vertices = 4;

	+diagonals = 2;

	/**
	 * creates an instance of Quadrilateral
	 * @author nnmrts <nanomiratus@gmail.com>
	 * @date 2019-10-15
	 * @memberof Quadrilateral
	 */
	constructor() {
		super();
	}
}

export default Quadrilateral;

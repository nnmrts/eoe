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
	static +edges: 4 = 4;

	static +vertices: 4 = 4;

	static +diagonals: 2 = 2;

	constructor() {
	}
}

export default Quadrilateral;

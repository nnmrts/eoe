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
	static +closed: true = true;

	static +diagonals: number;

	static +equilateral: boolean;

	constructor() {
		super();
	}
}

export default Polygon;

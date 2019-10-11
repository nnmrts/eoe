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
	static +edges: number;

	static +vertices: number;

	static +closed: boolean;

	static +cyclic: boolean;

	static +isogonal: boolean;

	static +isotoxal: boolean;

	constructor() {
	}
}

export default PolygonalChain;

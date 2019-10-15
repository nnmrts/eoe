// @flow

/**
 *
 *
 * @author nnmrts <nanomiratus@gmail.com>
 * @date 2019-10-02
 * @class Curve
 */
class Curve {
	+edges: number;

	+vertices: number;

	+diagonals: number;

	+convex: boolean;

	+closed: boolean;

	+cyclic: boolean;

	+tangential: boolean;

	+equilateral: boolean;

	+isogonal: boolean;

	+isotoxal: boolean;

	+smooth: boolean;

	/**
	 * creates an instance of Curve
	 * @author nnmrts <nanomiratus@gmail.com>
	 * @date 2019-10-13
	 * @memberof Curve
	 */
	constructor() {
		const {
			firstPoint,
			lastPoint
		} = this;

		if (firstPoint === lastPoint) {
			this.closed = true;
		}
	}
}

export default Curve;

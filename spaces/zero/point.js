// @flow
import GeometricObject from "../../concepts/geometric-object.js";

/**
 * point
 *
 * @author nnmrts <nanomiratus@gmail.com>
 * @date 2019-09-19
 * @class Point
 * @extends {GeometricObject}
 */
class Point extends GeometricObject {
	x: number;

	y: number;

	z: number;

	/**
	 * creates an instance of Point
	 *
	 * @author nnmrts <nanomiratus@gmail.com>
	 * @date 2019-09-19
	 * @param {...number[]} coordinates
	 * coordinates
	 * @memberof Position
	 */
	constructor(...coordinates: number[]) {
		super();

		const [
			x,
			y,
			z
		] = coordinates;

		Object.assign(this, {
			x,
			y,
			z
		});
	}
}

export default Point;

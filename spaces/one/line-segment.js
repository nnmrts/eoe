// @flow
import GeometricObject from "../../concepts/geometric-object";
import Point from "../zero/point.js";

/**
 *
 *
 * @author nnmrts <nanomiratus@gmail.com>
 * @date 2019-10-16
 * @class LineSegment
 * @extends {GeometricObject}
 */
class LineSegment extends GeometricObject {
	+endPoint1: Point;

	+endPoint2: Point;

	/**
	 * creates an instance of LineSegment
	 * @author nnmrts <nanomiratus@gmail.com>
	 * @date 2019-10-16
	 * @param {Point} endPoint1
	 * one end point
	 * @param {Point} endPoint2
	 * the other end point
	 * @memberof LineSegment
	 */
	constructor(endPoint1: Point, endPoint2: Point) {
		super();

		this.endPoint1 = endPoint1;
		this.endPoint2 = endPoint2;
	}

	/**
	 *
	 *
	 * @memberof LineSegment
	 * @returns {Point}
	 * the midpoint
	 */
	midpoint = (): Point => {
		const {
			endPoint1,
			endPoint2
		} = this;

		return new Point(
			((endPoint1.x + endPoint2.x) / 2),
			((endPoint1.y + endPoint2.y) / 2),
			((endPoint1.z + endPoint2.z) / 2)
		);
	}

	// TODO: 3D
	/**
	 *
	 *
	 * @returns {number}
	 * length
	 */
	length = (): number => {
		const {
			endPoint1,
			endPoint2
		} = this;

		return Math.sqrt(((endPoint2.x - endPoint1.x) ** 2) + ((endPoint2.y - endPoint1.y) ** 2));
	}
}

export default LineSegment;

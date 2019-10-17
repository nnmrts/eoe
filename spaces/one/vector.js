// @flow
import Point from "../zero/point.js";

import LineSegment from "./line-segment.js";

/**
 *
 *
 * @author nnmrts <nanomiratus@gmail.com>
 * @date 2019-10-16
 * @class Vector
 * @extends {LineSegment}
 */
class Vector extends LineSegment {
	tail: Point;

	head: Point;

	/**
	 * creates an instance of Vector
	 * @author nnmrts <nanomiratus@gmail.com>
	 * @date 2019-10-16
	 * @param {Point} tail
	 * initial point
	 * @param {Point} head
	 * terminal point
	 * @memberof Vector
	 */
	constructor(tail: Point, head: Point) {
		super(tail, head);

		this.tail = tail;
		this.head = head;
	}

	/**
	 *
	 *
	 * @param {Vector} vector
	 * vector
	 * @returns {Vector}
	 * the sum of the vectors
	 */
	plus = (vector: Vector): Vector => {
		const {
			tail,
			head
		} = this;

		const {
			tail: addendTail,
			head: addendHead
		} = vector;

		const pointBetweenTails = new Vector(
			tail,
			addendTail
		).midpoint();

		return new Vector(
			pointBetweenTails,
			new Point(
				...[
					"x",
					"y",
					"z"
				].map((axis: "x" | "y" | "z"): number => (
					-tail[axis] +
					head[axis] +
					addendTail[axis] +
					addendHead[axis] -
					pointBetweenTails[axis]
				))

			)
		);
	}

	/**
	 *
	 *
	 * @param {Vector} vector
	 * vector
	 * @returns {Vector}
	 * the sum of the vectors
	 */
	minus = (vector: Vector): Vector => {
		const {
			tail,
			head
		} = this;

		const {
			tail: addendTail,
			head: addendHead
		} = vector;

		const pointBetweenTails = new Vector(
			tail,
			addendTail
		).midpoint();

		return new Vector(
			pointBetweenTails,
			new Point(
				...[
					"x",
					"y",
					"z"
				].map((axis: "x" | "y" | "z"): number => (
					-tail[axis] +
					head[axis] +
					addendTail[axis] -
					addendHead[axis] +
					pointBetweenTails[axis]
				))

			)
		);
	}

	reverse = () => {
		const {
			tail,
			head
		} = this;

		this.tail = head;
		this.head = tail;
	}

	// TODO: 3D
	rotate = (degrees: number) => {
		const {
			tail,
			head
		} = this;

		const x = (
			(
				(head.x - tail.x) * Math.cos(degrees)
			) -
			(
				(head.y - tail.y) * Math.sin(degrees)
			) -
			tail.x
		);

		const y = (
			(
				(head.x - tail.x) * Math.sin(degrees)
			) +
			(
				(head.y - tail.y) * Math.cos(degrees)
			) -
			tail.y
		);

		this.head = new Point(x, y);
	}
}

export default Vector;

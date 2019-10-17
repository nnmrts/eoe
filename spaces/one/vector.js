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
	/**
	 *
	 *
	 * @param {number} angle
	 * angle in degrees
	 * @returns {Vector}
	 * itself
	 */
	rotate = (angle: number): Vector => {
		const {
			tail,
			head
		} = this;

		const angleInRadians = angle * (Math.PI / 180);

		const x = (
			(head.x - tail.x) * Math.cos(angleInRadians)
		) - 
		(
			(tail.y - head.y) * Math.sin(angleInRadians)
		) +
		tail.x;

		const x = (
			(
				(head.x - tail.x) * Math.cos(angleInRadians)
			) -
			(
				(head.y - tail.y) * Math.sin(angleInRadians)
			) -
			tail.x
		);

		const y = (
			(
				(head.x - tail.x) * Math.sin(angleInRadians)
			) +
			(
				(head.y - tail.y) * Math.cos(angleInRadians)
			) -
			tail.y
		);

		this.head = new Point(x, y);

		return this;
	}
}

export default Vector;

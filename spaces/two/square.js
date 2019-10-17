// @flow
import Point from "../zero/point.js";
import GeometricObject from "../../concepts/geometric-object.js";
import Vector from "../one/vector.js";
import LineSegment from "../one/line-segment.js";

import Rectangle from "./rectangle.js";
import Circle from "./circle.js";

type HelpingPoints = {|
	vertex1: Point,
	...{|
		vertex2?: Point
	|} | {|
		vertex3?: Point
	|} | {|
		vertex4?: Point
	|}
|};

type RequiredPoints = {|
	vertex1: Point,
	...{|
		vertex2: Point
	|} | {|
		vertex3: Point
	|} | {|
		vertex4: Point
	|} | {|
		vertex2: Point,
		vertex3: Point
	|} | {|
		vertex2: Point,
		vertex4: Point
	|} | {|
		vertex3: Point,
		vertex4: Point
	|} | {|
		vertex2: Point,
		vertex3: Point,
		vertex4: Point
	|}
|};

type SquareOptions = {|
	edgeLength: number,
	...HelpingPoints
|} | {|
	diagonalLength: number,
	...HelpingPoints
|} | {|
	perimeter: number,
	...HelpingPoints
|} | {|
	area: number,
	...HelpingPoints
|} | RequiredPoints;

/**
 *
 *
 * @author nnmrts <nanomiratus@gmail.com>
 * @date 2019-09-21
 * @class Square
 * @extends {Rectangle}
 */
class Square extends Rectangle {
	+equilateral = true;

	+isotoxal = true;

	+tangential = true;

	vertexMap: Map<"A" | "B" | "C" | "D", Point>;

	/**
	 * creates an instance of Square
	 * @author nnmrts <nanomiratus@gmail.com>
	 * @date 2019-09-21
	 * @param {SquareOptions} [options={edgeLength: 1}]
	 * side length
	 * @param {Position} [position=new Position(0, 0)]
	 * position
	 * @memberof Square
	 */
	constructor(options: SquareOptions = {
		edgeLength: 1,
		vertex1: new Point(0, 0)
	}) {
		const {
			vertex1
		} = options;

		let edgeLength;

		if (options.edgeLength) {
			edgeLength = options.edgeLength;
		}
		else if (options.diagonalLength) {
			edgeLength = options.diagonalLength / Math.sqrt(2);
		}
		else if (options.perimeter) {
			edgeLength = options.perimeter / 4;
		}
		else if (options.area) {
			edgeLength = Math.sqrt(options.area);
		}
		else if (options.vertex2 || options.vertex4) {
			let secondVertex;

			if (options.vertex2) {
				secondVertex = options.vertex2;
			}
			else if (options.vertex4) {
				secondVertex = options.vertex4;
			}

			if (secondVertex) {
				edgeLength = new LineSegment(vertex1, secondVertex).length();
			}
		}
		else if (options.vertex3) {
			const {
				vertex3
			} = options;

			edgeLength = new LineSegment(vertex1, vertex3).length() / Math.sqrt(2);
		}

		if (edgeLength) {
			let vertex2;
			let vertex3;
			let vertex4;

			if (options.vertex2) {
				vertex2 = options.vertex2;
				vertex3 = options.vertex3 || new Vector(vertex2, vertex1).rotate(90).head;
				vertex4 = options.vertex4 || new Vector(vertex3, vertex2).rotate(90).head;
			}
			else if (options.vertex3) {
				vertex3 = options.vertex3;
				vertex2 = new Vector(new Vector(vertex1, vertex3).midpoint(), vertex3).rotate(-90).head;
				vertex4 = options.vertex4 || new Vector(vertex3, vertex2).rotate(90).head;
			}
			else if (options.vertex4) {
				vertex4 = options.vertex4;
				vertex3 = new Vector(vertex4, vertex1).rotate(-90).head;
				vertex2 = new Vector(new Vector(vertex1, vertex3).midpoint(), vertex3).rotate(-90).head;
			}
			else {
				vertex2 = new Point(vertex1.x + edgeLength, vertex1.y);
				vertex3 = new Point(vertex1.x + edgeLength, vertex1.y - edgeLength);
				vertex4 = new Point(vertex1.x, vertex1.y - edgeLength);
			}

			super({
				edge1Length: edgeLength,
				edge2Length: edgeLength,
				vertex1
			});

			this.edgeLength = edgeLength;

			this.vertexMap = new Map();

			this.vertexMap.set("A", vertex1);
			this.vertexMap.set("B", vertex2);
			this.vertexMap.set("C", vertex3);
			this.vertexMap.set("D", vertex4);
		}
		else {
			throw new Error("invalid");
		}
	}

	/**
	 *
	 *
	 * @returns {Point}
	 * midpoint
	 */
	midpoint = (): Point => {
		const {
			vertexMap
		} = this;

		const vertex1 = vertexMap.get("A");
		const vertex2 = vertexMap.get("B");

		if (vertex1 && vertex2) {
			return new Vector(
				vertex1,
				vertex2
			).midpoint();
		}
		throw new Error("midpoint fail");
	}

	/**
	 *
	 *
	 * @param {GeometricObject} object
	 * a geometric object
	 * @returns {boolean}
	 * if passed object is inside current object
	 */
	contains = (object: GeometricObject): boolean => {
		console.info(this.equiangular);
		return true;
	}

	/**
	 *
	 *
	 * @param {number} angle
	 * angle in degrees
	 * @param {boolean} clockwise
	 * clockwise or counterclockwise rotation
	 * @returns {Square}
	 * itself
	 */
	rotate = (angle: number, clockwise: boolean): Square => {
		const {
			vertexMap
		} = this;

		const vertex1 = vertexMap.get("A");
		const vertex2 = vertexMap.get("B");
		const vertex3 = vertexMap.get("C");
		const vertex4 = vertexMap.get("D");

		if (vertex1 && vertex2 && vertex3 && vertex4) {
			vertexMap.set("A", new Vector(this.midpoint(), vertex1).rotate(clockwise ? -angle : angle).head);
			vertexMap.set("B", new Vector(this.midpoint(), vertex2).rotate(clockwise ? -angle : angle).head);
			vertexMap.set("C", new Vector(this.midpoint(), vertex3).rotate(clockwise ? -angle : angle).head);
			vertexMap.set("D", new Vector(this.midpoint(), vertex4).rotate(clockwise ? -angle : angle).head);
		}

		return this;
	}

	/**
	 *
	 *
	 * @param {Circle} object
	 * a geometric object
	 * @returns {function}
	 * function
	 */
	morph = (object: Circle): (point: Point) => Point => {
		const {
			vertexMap
		} = this;

		const vertex1 = vertexMap.get("A");
		const vertex2 = vertexMap.get("B");
		const vertex3 = vertexMap.get("C");
		const vertex4 = vertexMap.get("D");

		if (vertex1 && vertex2 && vertex3 && vertex4) {
			const edgeAB = new Vector(vertex1, vertex2);
			const xAxisParallelThroughA = new Vector(vertex1, new Point(vertex1.x + 10, vertex1.y));

			const angle = Math.acos(
				(
					(xAxisParallelThroughA.head.x * xAxisParallelThroughA.head.y) +
					(edgeAB.head.x * edgeAB.head.y)
				) /
				(
					xAxisParallelThroughA.length() *
					edgeAB.length()
				)
			);

			const orthogonalSquare = new Square({
				vertex1,
				vertex2,
				vertex3,
				vertex4,
			}).rotate(45 - angle, true);

			if (object instanceof Circle) {
				const normalMin = -1;
				const normalMax = 1;

				const {
					vertexMap: orthogonalVertexMap
				} = orthogonalSquare;

				const orthogonalVertex1 = orthogonalVertexMap.get("A");
				const orthogonalVertex2 = orthogonalVertexMap.get("B");
				const orthogonalVertex3 = orthogonalVertexMap.get("C");

				if (orthogonalVertex1 && orthogonalVertex2 && orthogonalVertex3) {
					const squareXMin = orthogonalVertex1.x;
					const squareXMax = orthogonalVertex2.x;
					const squareYMin = orthogonalVertex1.y;
					const squareYMax = orthogonalVertex3.y;

					return (point: Point): Point => {
						const {
							x,
							y
						} = point;

						const normalizedX = (((x - squareXMin) * (normalMax - normalMin)) / (squareXMax - squareXMin)) + normalMin;
						const normalizedY = (((y - squareYMin) * (normalMax - normalMin)) / (squareYMax - squareYMin)) + normalMin;

						const newX = normalizedX * Math.sqrt(1 - (((normalizedY) ** 2) / 2));
						const newY = normalizedY * Math.sqrt(1 - (((normalizedX) ** 2) / 2));

						const denormalizedX = (((newX - normalMin) * (squareXMax - squareXMin)) / (normalMax - normalMin)) + squareXMin;
						const denormalizedY = (((newY - normalMin) * (squareYMax - squareYMin)) / (normalMax - normalMin)) + squareYMin;

						return new Vector(this.midpoint(), new Point(denormalizedX, denormalizedY)).rotate(angle).head;
					};
				}
			}
		}

		return (): Point => new Point(0, 0);
	}
}

export default Square;

// @flow
import Point from "../zero/point.js";
import GeometricObject from "../../concepts/geometric-object.js";

import Rectangle from "./rectangle.js";
import Circle from "./circle.js";
import Vector from "../one/vector.js";

type HelpingPoints = {|
	vertex1: Point,
	...{|
		vertex2?: Point
	|} | {|
		vertex3?: Point
	|}
|};

type RequiredPoints = {|
	vertex1: Point,
	...{|
		vertex2: Point
	|} | {|
		vertex3: Point
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

	/**
	 * creates an instance of Square
	 * @author nnmrts <nanomiratus@gmail.com>
	 * @date 2019-09-21
	 * @param {SquareOptions} [options={sideLength: 1}]
	 * side length
	 * @param {Position} [position=new Position(0, 0)]
	 * position
	 * @memberof Square
	 */
	constructor(options: SquareOptions = {
		edgeLength: 1,
		vertex1: new Point(0, 0)
	}) {
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
		else if (options.vertex2) {
			const {
				vertex1,
				vertex2
			} = options;

			edgeLength = Math.sqrt(((vertex2.x - vertex1.x) ** 2) + ((vertex2.y - vertex1.y) ** 2));
		}
		else if (options.vertex3) {
			const {
				vertex1,
				vertex3
			} = options;

			edgeLength = Math.sqrt(((vertex3.x - vertex1.x) ** 2) + ((vertex3.y - vertex1.y) ** 2)) / Math.sqrt(2);
		}

		if (edgeLength) {
			const {
				vertex1
			} = options;

			const vertex2 = options.vertex2 || options.vertex3 ? new Vector(new Vector(vertex1, options.vertex3).midpoint(), options.vertex3)

			super({
				edge1Length: edgeLength,
				edge2Length: edgeLength,
				vertex1
			});

			this.sideLength = edgeLength;

			this.vertexMap = new Map();

			this.vertexMap.set("A", vertex1);
			this.vertexMap.set("B", vertex2 || new Point(1, 0));
			this.vertexMap.set("C", new Point(position.x, position.y + edgeLength));
			this.vertexMap.set("D", new Point(position.x, position.y + edgeLength));
		}
		else {
			throw new Error("invalid");
		}
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
	 * @param {Circle} object
	 * a geometric object
	 * @returns {function}
	 * function
	 */
	morph = (object: Circle): function => {
		if (object instanceof Circle) {
			const {
				edgeLength
			} = this;

			return (position: Point): Point => {
				const {
					x,
					y
				} = position;

				const normalizedX = (((x - 0) * (1 - -1)) / (edgeLength - 0)) + -1;
				const normalizedY = (((y - 0) * (1 - -1)) / (edgeLength - 0)) + -1;

				const newX = normalizedX * Math.sqrt(1 - (((normalizedY) ** 2) / 2));
				const newY = normalizedY * Math.sqrt(1 - (((normalizedX) ** 2) / 2));

				const denormalizedX = (((newX - -1) * (edgeLength - 0)) / (1 - -1)) + 0;
				const denormalizedY = (((newY - -1) * (edgeLength - 0)) / (1 - -1)) + 0;

				return new Point(denormalizedX, denormalizedY);
			};
		}
		return () => {};
	}
}

export default Square;

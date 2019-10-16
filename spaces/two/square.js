// @flow
import Point from "../zero/point.js";
import GeometricObject from "../../concepts/geometric-object.js";

import Rectangle from "./rectangle.js";
import Circle from "./circle.js";

type SquareOptions = {|
	sideLength: number,
	position: Point
|} | {|
	diagonalLength: number,
	position: Point
|} | {|
	perimeter: number,
	position: Point
|} | {|
	area: number,
	position: Point
|};

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
		sideLength: 1,
		position: new Point(0, 0)
	}) {
		const {
			position
		} = options;

		let sideLength;

		if (options.sideLength) {
			sideLength = options.sideLength;
		}
		else if (options.diagonalLength) {
			sideLength = options.diagonalLength / Math.sqrt(2);
		}
		else if (options.perimeter) {
			sideLength = options.perimeter / 4;
		}
		else if (options.area) {
			sideLength = Math.sqrt(options.area);
		}

		if (sideLength) {
			super({
				sideALength: sideLength,
				sideBLength: sideLength,
				position
			});

			this.sideLength = sideLength;

			this.vertexMap = new Map();

			this.vertexMap.set("A", new Point(position.x, position.y));
			this.vertexMap.set("B", new Point(position.x + sideLength, position.y));
			this.vertexMap.set("C", new Point(position.x, position.y + sideLength));
			this.vertexMap.set("D", new Point(position.x, position.y + sideLength));
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
				sideLength
			} = this;

			return (position: Point): Point => {
				const {
					x,
					y
				} = position;

				const normalizedX = (((x - 0) * (1 - -1)) / (sideLength - 0)) + -1;
				const normalizedY = (((y - 0) * (1 - -1)) / (sideLength - 0)) + -1;

				const newX = normalizedX * Math.sqrt(1 - (((normalizedY) ** 2) / 2));
				const newY = normalizedY * Math.sqrt(1 - (((normalizedX) ** 2) / 2));

				const denormalizedX = (((newX - -1) * (sideLength - 0)) / (1 - -1)) + 0;
				const denormalizedY = (((newY - -1) * (sideLength - 0)) / (1 - -1)) + 0;

				return new Point(denormalizedX, denormalizedY);
			};
		}
		return () => {};
	}
}

export default Square;

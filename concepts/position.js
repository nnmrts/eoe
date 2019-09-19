// @flow

/**
 * position
 *
 * @author nnmrts <nanomiratus@gmail.com>
 * @date 2019-09-19
 * @class Position
 * @extends {Array<number>}
 */
class Position extends Array<number> {
	x: number;

	y: number;

	z: number;

	/**
	 * Creates an instance of Position.
	 *
	 * @author nnmrts <nanomiratus@gmail.com>
	 * @date 2019-09-19
	 * @param {...number[]} coordinates
	 * coordinates
	 * @memberof Position
	 */
	constructor(...coordinates: number[]): number[] {
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

		return Array.of(...coordinates);
	}
}

export default Position;

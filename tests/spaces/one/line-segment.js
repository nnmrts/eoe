// @flow
import test, { type ExecutionContext } from "ava";

import Point from "../../../spaces/zero/point.js";
import LineSegment from "../../../spaces/one/line-segment.js";

const lineSegment = new LineSegment(new Point(0, 0), new Point(6, 8));

test("midpoint", (t: ExecutionContext) => {
	const midpoint = lineSegment.midpoint();
	t.is(midpoint.x, 3);
	t.is(midpoint.y, 4);
});

test("length", (t: ExecutionContext) => {
	const length = lineSegment.length();
	t.is(length, 10);
});

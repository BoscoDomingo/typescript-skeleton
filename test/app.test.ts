import assert from "node:assert";
import { describe, it } from "node:test";
import { main } from "../src/app.js";

describe("main", () => {
	it("should do XYZ", () => {
		assert.strictEqual(main(), undefined);
	});
});

import assert from "assert";
import request from "supertest";
import app from "./api";


describe("developer API should have endpoints to", () => {
	it("get all developers", (done) => {
		//arrange
		//act and assert
		request(app)
			.get("/api/developers")
			.set("Accept", "application/json")
			.expect("Content-Type", /json/)
			.expect((res) => {
				assert.strictEqual(res.body.length, 2);
			})
			.expect(200, done);

	});
});
 
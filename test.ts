import assert from "assert";
import request from "supertest";
import app, { db } from "./api";
import { text } from "express";

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

  it("get developer 1 ", (done) => {
    //act and assert
    request(app)
      .get("/api/developers/1")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect((res) => {
        assert.deepStrictEqual(res.body, db[0]);
      })
      .expect(200, done);
  });

  it("add developer", (done) => {
		//act and assert
		request(app)
			.post("/api/developers")
			.set("Accept", "application/json")
			.send({ name: "Jolene", email: "jolene@jolene.com" })
			.expect("Content-Type", /json/)
			.expect("location", /\api\/developers\//)
			.expect((res) => {
				assert.strictEqual(res.body.name, "Jolene");
			})
			.expect(201, done);
	});
  

    it("delete developer", (done) => {
        //act and assert
        request(app)
            .delete("/api/developers/2")
            .expect(204)
            .end(() => {
                console.log(db);
                done();
            });
	});


    it("update developer", (done) => {
		//act and assert
		request(app)
			.patch("/api/developers/3")
			.set("Accept", "application/json")
			.send({ name: "Beyonce" })
			.expect("Content-Type", /json/)
			.expect("location", /\api\/developers\//)
			.expect((res) => {
				assert.strictEqual(res.body.name, "Beyonce");
			})
			.expect(201, done);
	});
        
});

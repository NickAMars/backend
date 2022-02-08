const assert = require("assert");
const request = require("supertest");
const app = require("../index");

const version = process.env.npm_package_version;

/**
 * testing the rest api with the application
 */
describe("The Rest Api", () => {
  it(`handles a [Get] request to /api/${version}/group`, (done) => {
    request(app)
      .get(`/api/${version}/groups`)
      .set("Accept", "application/json")
      .end((err, res) => {
        let keys = Object.keys(res.body);
        assert.deepEqual(keys, ["colors", "groups"]);
        done();
      });
    // console.log("groups");
    //   assert(true);
  });

  it(`throw error for [Get] request to /api/${version}/group?color=1`, (done) => {
    request(app)
      .get(`/api/${version}/groups?color=1`)
      .expect(400)
      .then((res) => {
        assert(res.body.message, '"color" must be a string');
        done();
      });
  });

  it(`throw error for [POST] request to /api/${version}/group`, (done) => {
    request(app)
      .post(`/api/${version}/groups`)
      .send([{ name: "" }])
      .set("Accept", "application/json")
      .expect(400)
      .then((res) => {
        assert(res.body.message, '"[0].name" is not allowed to be empty');
        done();
      });
  });

  // it(`handles a [POST] request to /api/${version}/group`, () => {
  //   assert(true);
  // });
});

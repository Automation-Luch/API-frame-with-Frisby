const frisby = require("frisby");
const Joi = frisby.Joi; // Frisby exposes Joi for convenience
const {
  setCookieGloballyForAuthentication,
} = require("../lib/helper");

describe("Run all tests with default cookie", function () {
  beforeAll(async function () {
    await setCookieGloballyForAuthentication();
  });

it("Check that the base auth is working", async function () {
  return frisby
  .get('http://seasonvar.ru/?mod=settings')
  .expect('status', 200);
});
  });


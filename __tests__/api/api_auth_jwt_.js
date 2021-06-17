const frisby = require("frisby");
const Joi = frisby.Joi; // Frisby exposes Joi for convenience
const {
  setGlobalSettingsJWT,
} = require("../lib/helper");
const { EMAIL, PASSWORD, INVESTOR_URL } = require("../lib/credentials");

describe("Authorization with global JWT", function () {
  beforeAll(function () {
    setGlobalSettingsJWT();
  });
  afterAll(function () {
    // Remove something
  });

  it("Check that the global token set", function () {
    return frisby
      .get(
        `${INVESTOR_URL}/issuer/list/approved?page=1&limit=9&requireKyc=true&search=group`
      )
      .expect("status", 200);
  });
  
});



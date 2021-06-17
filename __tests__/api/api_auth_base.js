const frisby = require("frisby");
const Joi = frisby.Joi; // Frisby exposes Joi for convenience
const {
  setGlobalSettingsBaseAuth,
} = require("../lib/helper");

describe("Run all tests with default base Authorization", function () {
  beforeAll(async function () {
    await setGlobalSettingsBaseAuth("teteeee@mailinator.com","qwe123");
  });
  afterAll(async function () {
    // Remove said custom handler (if needed)
  });

  });

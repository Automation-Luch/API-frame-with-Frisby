const frisby = require("frisby");
const { tokenGrab } = require("../lib/helper");
const Joi = frisby.Joi; // Frisby exposes Joi for convenience
const { BASE_API, COMPANY_URL, PASSWORD, COMPANY_EMAIL } = require("../lib/credentials");

const {
  setGlobalSettingsJWT,
} = require("../lib/helper");

describe("Check that the response according to the expected result for company dashboard", function () {
  beforeAll(async function () {
    const token = await tokenGrab(COMPANY_EMAIL,PASSWORD,COMPANY_URL)
    await setGlobalSettingsJWT(COMPANY_URL,token);
});


    it("Check sum of cards per page", async function () {
            return frisby
        .get(`${BASE_API}/notification/me?page=1&limit=10`, {
        })
        .expect('status', 200)
        .expect('header', 'content-type', /application\/json/)
        .expect('jsonTypes','data', {
          data: Joi.array(),
        }).then(function (res) {
          expect((res.json.data.data).length).toBe(10)
        })
      });

      
  });


    
const frisby = require("frisby");
const { tokenGrab } = require("../lib/helper");
const Joi = frisby.Joi; // Frisby exposes Joi for convenience
const { BASE_API, COMPANY_URL, PASSWORD, COMPANY_EMAIL } = require("../lib/credentials");

const {
  setGlobalSettingsJWT,
} = require("../lib/helper");


describe("Check that the response according to the expected result", function () {
  beforeAll(async function () {
    const token = await tokenGrab(COMPANY_EMAIL,PASSWORD,COMPANY_URL)
    await setGlobalSettingsJWT(COMPANY_URL,token);
  });


    it("With json parse", async function () {
            return frisby
        .get('https://uat-api.securer.io/notification/me?page=1&limit=10', {
        })
        // .expect('status', 200).inspectBody()
        .expect('status', 200)
        .expect('jsonTypes','data', {
          data: Joi.array(),
          // title: Joi.string(),
          // body: Joi.string()
        })

      });

  });


    
const frisby = require("frisby");
const { tokenGrab } = require("../lib/helper");
const Joi = frisby.Joi; // Frisby exposes Joi for convenience
const {
  setCookieGloballyForAuthentication,
} = require("../lib/helper");

describe("Check that the response according to the expected result", function () {
  beforeAll(async function () {
    await setCookieGloballyForAuthentication();
  });
    it("With json parse", async function () {
      return frisby
      .get('https://api.randomuser.me/0.6?gender=female', {
      })
      .expect('status', 200)
      .then((res)=> {var data = JSON.parse(res['_body'])
      expect(data.results[0]['user']['gender']).toBe("female")})
    });

    it ('should return a list of feed items', function () {
      return frisby
        .get('https://jsonfeed.org/feed.json')
        .expect('status', 200)
        .expect('json', 'version', 'https://jsonfeed.org/version/1')
        .expect('json', 'title', 'JSON Feed')
        .expect('jsonTypes', 'items.*', { // Assert *each* object in 'items' array
          'id': Joi.string().required(),
          'url': Joi.string().uri().required(),
          'title': Joi.string().required(),
          'date_published': Joi.date().iso().required(),
        });
    });
    it("With json parse", async function () {
      return frisby
      .get('https://www.kaggle.com/', {
      })
      .expect('status', 200).then((res)=> { const tt = res.headers
        function logMapElements(value, key, map) {
          if (key === 'set-cookie'){
              const arr = value.split(",")
              for (const i of arr){
                if(i.includes('CSRF-TOKEN')){
                  console.log(i)
                }
              }
          }
        }
        new Map(tt)
          .forEach(logMapElements);
        ;})
    });

    it("With json parse", async function () {
            return frisby
        .get('https://redmine.titanium.codes/projects/i_ts0270/activity', {
        })
        // .expect('status', 200).inspectHeaders()

        
    });
  
    });



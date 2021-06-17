const frisby = require("frisby");
const { BASE_API, INVESTOR_URL, PASSWORD, EMAIL } = require("./credentials");
const TIME_OUT = 30000
const tokenGrab = function (
  email = EMAIL,
  pass = PASSWORD,
  origin = INVESTOR_URL
) {
  const user = {
    email,
    password: pass,
  };
  const token = frisby
    .fetch(`${BASE_API}/identity/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Origin: origin,
      },
      body: JSON.stringify(user),
    })
    .then((res) => res.json.data.jwt.token)
    .then((jwtToken) => "JWT " + jwtToken);
  return token;
};

const investorGetRequest = function (request){
  const token = tokenGrab();
  const response = frisby.fetch(`${BASE_API}${request}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Origin: INVESTOR_URL,
      Authorization: token,
    },
  });
  return response;
};

const setGlobalSettingsJWT = function () {
  frisby.globalSetup({
    request: {
      headers: {
        Authorization: tokenGrab(),
        "Content-Type": "application/json",
        Origin: INVESTOR_URL,
      },
    },timeout: (30*1000)
  });
};

const setGlobalSettingsBaseAuth = function (userName,password) {
  frisby.globalSetup({
    request: {
      headers: {
        'Authorization': 'Basic ' + Buffer.from(`${userName}:${password}`).toString('base64'),
        'Content-Type': 'application/json',
      }
    },timeout: TIME_OUT
  });
};



const setCookieGloballyForAuthentication =  async function (url='https://www.kaggle.com/',tokenName='CSRF-TOKEN'){
  const token = await frisby.fetch(url, {
  })
  .expect('status', 200).then((res)=> { const tt = res.headers
    let all;
      new Map(tt).forEach(
        (value,key,map)=>{
          if (key === 'set-cookie'){
          const arr = value.split(",")
          for (const i of arr){
            if(i.includes(tokenName)){
              all =  i
            }
          }
        }}
      );
      return all
    
    ;})
      
  frisby.globalSetup({
    request: {
      headers: {"Cookie": "__cfduid=d176856abf8fac32169bc796e81a2aec31617193952; svid1=2088322_6be813e87afb45e365013e7604c70e8b; _ym_uid=1617201368167966662; _ym_d=1617201368; _ym_isad=2"
      ,Authorization: token,},
    },timeout: TIME_OUT 
  });
}; 
module.exports = {
  tokenGrab,
  investorGetRequest,
  setGlobalSettingsJWT,
  setGlobalSettingsBaseAuth,
  setCookieGloballyForAuthentication
};

// export function handle (text: string) {
//   return text
// }
// import ApiAi from 'apiai'
// import { Brolog as log } from 'brolog'
// import { Configuration, OpenAIApi } from "openai";


// import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai'

const { GoogleGenerativeAI } = require("@google/generative-ai");
const { setGlobalDispatcher, ProxyAgent } = require("undici");
// const dispatcher = new ProxyAgent({ uri: new URL('http://127.0.0.1:7890').toString() });
// setGlobalDispatcher(dispatcher);
console.log('new');
// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI('AIzaSyBj70xG5gshJ1XefXrwOE9mRpYUf2lVVu0');

export async function handle(text) {

  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt = text

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text1 = response.text();
  console.log(text1);
  return `🤖️:${text1}`
}

// run("Write a story about a magic backpack.");




// const APIAI_API_KEY = '7217d7bce18c4bcfbe04ba7bdfaf9c081'
// const brainApiAi = ApiAi(APIAI_API_KEY)

// var apiai = require('apiai');

// const openai = new OpenAI({
//   apiKey: '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', // This is the default and can be omitted
// });

// OpenAI API 配置

// async function getdata(text) {
//   const res = await axios('https://api.openai.com/v1/chat/completions', {
//     method: 'POST',
//     headers: {
//       Authorization: 'Bearer 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',
//       "Content-Type": "application/json"
//     },
//     data: JSON.stringify({
//       model: 'gpt-3.5-turbo',
//       messages: [
//         {
//           role: "user",
//           content: "hello!"
//         },
//         {
//           role: "user",
//           content: "how are you?"
//         }
//       ]
//     })
//   })
//   console.log(1234, res);
// }

// var app = apiai("7217d7bce18c4bcfbe04ba7bdfaf9c081");
export function handle1(text: string) {

  // var request = app.textRequest(text, {
  //   sessionId: '7217d7bce18c4bcfbe04ba7bdfaf9c0811'
  // });

  // request.on('response', function (response) {
  //   console.log(111111, response);
  // });

  // request.on('error', function (error) {
  //   console.log(error);
  // });
  // getdata(text)
  // start(text)


  // let res = run(text).then(res1 => {
  //   console.log(222, res1);
  //   return `🤖️: ${res1}`
  // })
  // request.end();

}

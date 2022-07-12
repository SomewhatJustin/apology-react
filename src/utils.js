const { Configuration, OpenAIApi } = require("openai")

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

async function getApology(myCrime) {
  const response = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: `Write a long apology on behalf of an Instagram influencer who is guilty of ${myCrime}. 
      Go in to extreme detail about what happened. 
      Mention how other people have done the same thing and gotten away with it.`,
    temperature: 0,
    max_tokens: 4000,
  });

  return response.data.choices[0].text.substring(2)
}

export { getApology }
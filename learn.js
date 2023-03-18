/ set the api endpoint and access token
const apiendpoint = 'https://api.openai.com/v1/engines/davinci-codex/completions';
const accesstoken = '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';
 
// set the prompt text and parameters
const prompttext = 'hello, how are you today?';
const params = {
  prompt: prompttext,
  temperature: 0.7,
  max_tokens: 60,
  top_p: 1,
  frequency_penalty: 0.5,
  presence_penalty: 0.0
};
 
// send the api request
const headers = {
  'content-type': 'application/json',
  'authorization': `bearer ${accesstoken}`
};
axios.post(apiendpoint, params, { headers })
  .then(response => {
    const responsetext = response.data.choices[0].text;
    console.log(`chatgpt response: ${responsetext}`);
  })
  .catch(error => console.error(error));

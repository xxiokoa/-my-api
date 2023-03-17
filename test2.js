
 
// set the api endpoint and access token
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

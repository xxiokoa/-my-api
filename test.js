
// 设置API请求的配置参数，包括API密钥、请求头、请求参数等。
const config = {
    headers: {
         'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + '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'// 用您的API密钥替换YOUR_API_KEY
    }
};

// 定义API请求的URL地址
const apiUrl = 'https://api.openai.com/v1/completions';

// 定义API请求参数
const requestBody = {
    prompt: 'Hello, OpenAI!',
    temperature: 0.5,
    max_tokens: 5
};

// 发送API请求
axios.post(apiUrl, requestBody, config)
    .then((response) => {
        console.log(response.data.choices[0].text);
    })
    .catch((error) => {
        console.error(error);
    });

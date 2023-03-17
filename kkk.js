    axios.post(
                "https://api.openai.com/v1/completions",
                {
                    prompt: '你好啊',
                    max_tokens: 50,
                    model: 'text-davinci-003',
                },
                {
                    headers: {
                        "content-type": "application/json",
                        Authorization: 'Bearer ' + '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', // 将密钥作为Bearer Token传递
                    },
                }
            )
            .then((res) => {
                console.log(res.data.choices[0].text);
            })

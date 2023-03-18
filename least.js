




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

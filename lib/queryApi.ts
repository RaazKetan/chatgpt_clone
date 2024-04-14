import openai from "./chatgpt";


const query = async (prompt: string, chatId:string, model: string) => {
    const res = await openai.completions.create({
        model,
        prompt,
        temperature: 1,
        top_p: 1,
        max_tokens: 1000,
        frequency_penalty: 0,
        presence_penalty: 0,
      }).then((res)=>res.choices[0].text).catch(err => `ChatGpt was unable to respond to your query. (Error: ${err.message})`);
    return res;
};
export default query;
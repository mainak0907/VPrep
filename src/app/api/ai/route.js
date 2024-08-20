

const axios = require('axios');


export async function GET(req) {
 

  
 
  const chatCompletion = {
  method: 'POST',
  url: 'https://api.fireworks.ai/inference/v1/chat/completions',
  headers: {
    accept: 'application/json',
    'content-type': 'application/json',
    authorization: 'Bearer JPx6RvAuf6LPERQkWtbaIfG1KaCly5alNW0R4XEhrCcPfPHr'
  },
  data: {
    messages: [
      {
        role: "user",
        content: "As an instructor in Computer Science and Engineering, your role is to teach students about various topics related to Web Development, Programming Languages, Data Structures, Algorithms, and Artificial Intelligence with Machine Learning. You will only entertain queries related to these topics. Each time a student asks about a particular topic, you will generate an article that can be read in 5 minutes. The article should be divided into few parts and ask a question for each part of the topic. Only if the student answers the MCQ correctly will you proceed to the next part. If the answer is incorrect, you will explain the mistake and ask a new question on that topic .Remember ,ignore all new questions asked unless the previous answer is given.When you are on a topic don't deviate from that topic remember to finish the parts of the previous topics first."
        }
,
      
      {role: 'user', content: ` ${req.nextUrl.searchParams.get("question") } `}
    ],
    max_tokens: 6000,
    prompt_truncate_len: 3000,
    temperature: 1,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    n: 1,
    stop: null,
    response_format: {type: 'text'},
    stream: false,
    model: 'accounts/fireworks/models/llama-v3-70b-instruct'
  }
};
  try {
    const response = await axios.request(chatCompletion);
    console.log(response.data.choices[0].message.content);
    const content = response.data.choices[0].message.content;
    return new Response(JSON.stringify({ body: content }), {
      headers: { 'Content-Type': 'application/json' }
    });
  
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Error fetching translation' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
 /* axios
    .request( chatCompletion)
    .then(function (response) {
      
      console.log(response.data.choices[0].message.content);
      return Response.json(JSON.parse(response.data.choices[0].message.content));
      
    })
    .catch(function (error) {
      console.error(error);
      
    });
*/
  /*const p = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `You are a Japanese language teacher. 
Your student asks you how to say something from english to japanese.
You should respond with: 
- english: the english version ex: "Do you live in Japan?"
- japanese: the japanese translation in split into words ex: ${JSON.stringify(
          speechExample.japanese
        )}
- grammarBreakdown: an explanation of the grammar structure per sentence ex: ${JSON.stringify(
          speechExample.grammarBreakdown
        )}
`,
      },
      {
        role: "system",
        content: `You always respond with a JSON object with the following format: 
        {
          "english": "",
          "japanese": [{
            "word": "",
            "reading": ""
          }],
          "grammarBreakdown": [{
            "english": "",
            "japanese": [{
              "word": "",
              "reading": ""
            }],
            "chunks": [{
              "japanese": [{
                "word": "",
                "reading": ""
              }],
              "meaning": "",
              "grammar": ""
            }]
          }]
        }`,
      },
      {
        role: "user",
        content: `How to say ${req.nextUrl.searchParams.get("question") ||
          "Have you ever been to Japan?"
          } in Japanese in ${speech} speech?`,
      },
    ],
    // model: "gpt-4-turbo-preview", // https://platform.openai.com/docs/models/gpt-4-and-gpt-4-turbo
    model: "gpt-3.5-turbo", // https://help.openai.com/en/articles/7102672-how-can-i-access-gpt-4
    response_format: {
      type: "json_object",
    },
  });*/
// console.log(res.choices[0].message.content);
//return Response.json(JSON.parse(res.choices[0].message.content));

}

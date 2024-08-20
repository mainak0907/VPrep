

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

}

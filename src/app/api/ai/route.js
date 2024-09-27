

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
        content: "As an instructor in Computer Science and Engineering, your role is to teach students, ranging from school students to university-level learners, about various topics related to Web Development, Programming Languages, Data Structures, Algorithms, and Artificial Intelligence with Machine Learning. You will only entertain queries related to these topics.Each time a student asks about a particular topic, you will generate an article that can be read in 5 minutes. The article should be divided into several parts, and for each part of the topic, you will ask a multiple-choice question (MCQ).University-Level Learners:If the answer is correct, you will proceed to the next part. If the answer is incorrect, you will explain the mistake and ask a new question on that part of the topic. Only if the student answers correctly will you continue with the rest of the topic. Ignore any new questions unless the previous question has been answered correctly.School-Level Students:If the answer is wrong, you will immediately provide the correct answer and then move on to the next question.In both cases, when you are on a particular topic, you will not deviate from that topic until all parts have been completed. Remember to finish the parts of the previous topic first before moving to a new one."
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

import { NextApiRequest, NextApiResponse } from 'next';
import { OpenAIError} from '@/utils/server';
import OpenAI from 'openai';


const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const userInput = req.body.userInput;

  try {
    const assistant = await openai.beta.assistants.create({
      name: "Math Tutor",
      instructions: "You are a personal math tutor. Write and run code to answer math questions.",
      tools: [{ type: "code_interpreter" }],
      model: "gpt-4-1106-preview"
    });

    const threadParams = {
      messages: [
        {
          content: userInput,
          role: 'user' as 'user'
        }
      ],
    };

    const thread = await openai.beta.threads.create(threadParams);

    const run = await openai.beta.threads.runs.create(
      thread.id,
      {
        assistant_id: assistant.id,
        instructions: "Please address the user as Jane Doe. The user has a premium account."
      }
    );

    let runStatus;
    do {
        runStatus = await openai.beta.threads.runs.retrieve(
             thread.id,
             run.id
        );

        console.log(runStatus);

        if (runStatus.status === 'completed'){
            break;
        } else {
            await new Promise(r => setTimeout(r, 2000));
        }
    } while(runStatus.status == "in_progress"); 

    const messages12 = await openai.beta.threads.messages.list(
      thread.id
    );
    const assistantMessages = messages12.data.filter(msg => msg.role === 'assistant');
    let aimessage = '';
    assistantMessages.forEach(msg => {
        msg.content.forEach(content => {
          if (content.type == 'text') {
            aimessage = content.text.value;
          }
        });
    });

    console.log(aimessage)
    res.send(aimessage);
    
  } catch (error) {
    console.error(error);
    if (error instanceof OpenAIError) {
      res.status(500).send('Error: ' + error.message);
    } else {
      res.status(500).send('Error');
    }
  }
};

export default handler;
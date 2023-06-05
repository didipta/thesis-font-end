
import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { Configuration, OpenAIApi } from "openai";
import Loading from '../Loading/Loading';

const Legalaid = () => {

  const [inputText, setInputText] = useState('');
  const [textResult, setTextResult] = useState('');
  const [textResult1, setTextResult1] = useState(false);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };
  const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;
  const configuration = new Configuration({
      apiKey: API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    const generateText = async () => {
      setTextResult1(true)
      try {
        const response = await axios.post(
          'https://api.openai.com/v1/engines/text-davinci-003/completions',
          {
            prompt: `My problem is that ${inputText} \n\n give me a solution to my problem,Please help me`,
            temperature: 0.5,
            max_tokens: 300,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
          },
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${API_KEY}`,
            },
          }
        );
    
        setTextResult(response.data.choices[0].text.trim());
        setTextResult1(false);
      } catch (error) {
        console.error('Error generating text:', error);
      }
    }
    
  
  
    return (
        <div>
            <div className="p-3 mb-3 ">
                <h1 className="font-semibold text-lg p-2">Problem Solution</h1>
                <hr/>
            </div>

            <div>
            <div className="p-2">
               <label>
                     <h1 className="font-semibold text-lg">Problems </h1>
               </label>
                <br/>
                <label className="flex justify-center items-center shadow-md rounded-lg overflow-hidden p-2">
                <textarea type="text" rows={4} className="w-full border-gray-300 outline-none focus:border-pink-600" placeholder="Tell me your Problem...." onChange={handleInputChange}  required></textarea>
                <button className="bg-pink-600 text-white p-2 rounded-sm disabled:bg-slate-400" onClick={generateText} disabled={inputText===""&true}>Tell</button>
                </label>
            </div>
            {
                textResult1 ?<div>
                  <Loading></Loading>
                </div>:
                <div className=' p-3 text-justify'>
                       <p>{textResult}</p>
                </div>
            }
          
            </div>
        </div>
    );
};

export default Legalaid;
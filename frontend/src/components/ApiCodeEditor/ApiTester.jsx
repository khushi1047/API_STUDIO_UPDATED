import React, { useState } from 'react';
import axios from 'axios';

const ApiTester = ({ setResponse }) => {
  const [method, setMethod] = useState("GET");
  const [apiUrl, setApiUrl] = useState("");
  const [body, setBody] = useState("");

  const handleSend = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/request', {
        url: apiUrl,
        method,
        body: body ? JSON.parse(body) : undefined
      });
      setResponse(JSON.stringify(res.data, null, 2));
    } catch (error) {
      setResponse(error.message);
    }
  };

  return (
    <div>
      <p className='text-white font-bold text-3xl mb-4'>API Tester</p>
      
      <p className='text-white mb-2'>API URL:</p>
      <input 
        type="text" 
        value={apiUrl}
        className='text-white border w-full p-2 mb-4 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400' 
        placeholder='Enter URL...'  
        onChange={(e) => setApiUrl(e.target.value)}
      />

      <div className='flex flex-row justify-start gap-2 mb-4'>
        <select 
          className='border w-[20%] p-2 bg-black text-white rounded focus:outline-none focus:ring-2 focus:ring-indigo-400'
          onChange={(e) => setMethod(e.target.value)}
          value={method}
        >
          <option>GET</option>
          <option>POST</option>
          <option>PUT</option>
          <option>DELETE</option>
        </select>

        <button 
          className='bg-[#36668b] text-white w-[80%] rounded font-bold hover:cursor-pointer hover:bg-[#29508b] p-2'
          onClick={handleSend}
        >
          Send
        </button>
      </div>

      {(method === 'POST' || method === 'PUT') && (
        <div className="flex flex-col space-y-2">
          <label className="text-gray-300 font-medium">Request Body (JSON):</label>
          <textarea
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder='Example: { "data": "Your data here" }'
            rows={4}
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
      )}
    </div>
  );
};

export default ApiTester;

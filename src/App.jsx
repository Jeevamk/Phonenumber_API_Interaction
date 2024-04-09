import { useState } from 'react';
import axios from 'axios';

function App() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [responseData, setResponseData] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://chimpu.xyz/api/post.php', { Post: phoneNumber });
      console.log(response.headers);
      const headersData = JSON.stringify(response.headers);

      setResponseData(headersData);
      
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto ">
        <label className="block mb-4">
          Phone Number:
          <input
            type="number"
            value={phoneNumber} 
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="block w-full mt-1 p-2 border border-gray-300 rounded"
          />
        </label>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Submit</button>
      </form>
      {responseData && (
        <div>
          <h2 className="mt-8 text-lg font-semibold">Response Headers:</h2>
          <pre className="mt-2 bg-gray-100 p-4">{responseData}</pre>
        </div>
      )}
    </div>
  );
}

export default App;

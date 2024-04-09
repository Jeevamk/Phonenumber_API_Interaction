import  { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [responseData, setResponseData] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://chimpu.xyz/api/post.php', { phonenumber: phoneNumber });

      let headersData = '';
      Object.entries(response.headers).forEach(([key, value]) => {
        headersData += `${key}: ${value}\n`;
      });

      setResponseData(headersData);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Phone Number:
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {responseData && (
        <div>
          <h2>Response Headers:</h2>
          <pre>{responseData}</pre>
        </div>
      )}
    </div>
  );
}

export default App;

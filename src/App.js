import React, { useState } from 'react';

function App() {
  const [url, setUrl] = useState('');
  const [urls, setUrls] = useState([]);

  const handleShorten = () => {
    if (!url.trim()) return;

    const short = Math.random().toString(36).substring(2, 8);
    const newUrl = {
      id: Date.now(),
      original: url,
      short: `https://sho.rt/${short}`,
    };
    setUrls([newUrl, ...urls]);
    setUrl('');
  };

  const handleDelete = (id) => {
    setUrls(urls.filter((item) => item.id !== id));
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  return (
    <div className="container">
      <h1> URL Shortener Created by Siddharth</h1>
      <div className="input-box">
        <input
          type="text"
          placeholder="Enter a long URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button onClick={handleShorten}>Shorten</button>
      </div>

      {urls.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Original URL</th>
              <th>Shortened URL</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {urls.map((item) => (
              <tr key={item.id}>
                <td>{item.original}</td>
                <td>
                  <a href={item.original} target="_blank" rel="noreferrer">
                    {item.short}
                  </a>
                </td>
                <td>
                  <button onClick={() => handleCopy(item.short)}> Copy</button>
                  <button onClick={() => handleDelete(item.id)}> Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;

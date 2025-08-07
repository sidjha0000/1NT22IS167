import React, { useState } from "react";

const ShortenForm = ({ onSubmit }) => {
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (url) {
      onSubmit(url);
      setUrl("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="url"
        placeholder="Enter URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        required
      />
      <button type="submit">Shorten</button>
    </form>
  );
};

export default ShortenForm;

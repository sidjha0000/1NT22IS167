import React, { useState } from "react";
import ShortenForm from "../components/ShortenForm";
import ShortenedUrlCard from "../components/ShortenedUrlCard";
import { shortenUrl } from "../utils/fakeApi";

const HomePage = () => {
  const [shortened, setShortened] = useState(null);

  const handleShorten = (url) => {
    const result = shortenUrl(url);
    setShortened(result);
  };

  return (
    <div>
      <h1>URL Shortener</h1>
      <ShortenForm onSubmit={handleShorten} />
      {shortened && <ShortenedUrlCard data={shortened} />}
    </div>
  );
};

export default HomePage;

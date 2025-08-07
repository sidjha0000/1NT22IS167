import React from "react";
import { Link } from "react-router-dom";

const ShortenedUrlCard = ({ data }) => {
  return (
    <div className="card">
      <p>Short URL: <Link to={`/${data.shortcode}`}>{window.location.origin}/{data.shortcode}</Link></p>
      <p><Link to={`/stats/${data.shortcode}`}>View Stats</Link></p>
    </div>
  );
};

export default ShortenedUrlCard;

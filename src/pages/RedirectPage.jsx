import { useParams } from "react-router-dom";
import { useEffect } from "react";

const RedirectPage = () => {
  const { shortcode } = useParams();

  useEffect(() => {
    const originalUrl = localStorage.getItem(shortcode);
    if (originalUrl) {
      window.location.href = originalUrl;
    } else {
      alert("Shortcode not found!");
    }
  }, [shortcode]);

  return <p>Redirecting...</p>;
};

export default RedirectPage;

export function shortenUrl(originalUrl) {
  const shortcode = Math.random().toString(36).substring(2, 8);
  localStorage.setItem(shortcode, originalUrl);
  return { originalUrl, shortcode };
}

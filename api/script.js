const API_KEY = `c15be415d8c34eef90cd092333240f85`;
const getLatestNews = () => {
  const url = new URL(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
  );
  console.log(url);
  const response = fetch(url);
};

getLatestNews();

const API_KEY = `c15be415d8c34eef90cd092333240f85`;
let news = [];
const getLatestNews = async () => {
  const url = new URL(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
  );
  const response = await fetch(url);
  const data = await response.json();
  news = data.articles;
  console.log(news);
};

getLatestNews();

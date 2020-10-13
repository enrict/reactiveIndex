import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import "./Results.css";
import axios from "axios";

function Results({ category }) {
  const [articles, setArticles] = useState([]);
  const [country, setCountry] = useState("gb");

  // const API_KEY = "863075cd29cb4f6d80356218beb88f31";//NewsApi
  const API_TOKEN = "e3fe2fde97da16aca53e07ae582ef53e"; //GNews

  // displays articles depending on selected topic & country code
  useEffect(() => {
    async function fetchArticles() {
      axios.defaults.headers.post["Content-Type"] = "application/json";
      axios.defaults.headers.post["Access-Control-Allow-Origin"] = true;
      axios.defaults.headers.post["credentials"] = "same-origin";
      const req = await axios.get(
        `https://gnews.io/api/v4/top-headlines?country=${country}&topic=${category}&token=${API_TOKEN}`,
        {
          // header: "Access-Control-Allow-Origin: *",
          mode: "cors",
          method: "GET",
        }
      );
      console.log(req.data.articles);
      setArticles(req.data.articles);
      return req;
    }
    fetchArticles();
  }, [country, category]);

  const selectedCountry = function (e) {
    console.log(e.target.value);
    const res = e.target.value;
    setCountry(e.target.value);
    return res;
  };

  return (
    <div className="results">
      <div className="nav__selector">
        <p className="nav__selector__title">Select a country</p>
        <select onChange={selectedCountry} className="nav__selector__select">
          <option value="gb">United Kingdom</option>
          <option value="us">United States</option>
          <option value="br">Brazil</option>
          <option value="ca">Canada</option>
          <option value="cn">China</option>
          <option value="fr">France</option>
          <option value="hk">Hong Kong</option>
          <option value="in">India</option>
          <option value="it">Italy</option>
          <option value="jp">Japan</option>
          <option value="pt">Portugal</option>
          <option value="ru">Russia</option>
          <option value="se">Sweden</option>
          <option value="sg">Singapore</option>
        </select>
      </div>

      {articles.map((article, idx) => (
        <NewsCard
          key={idx}
          article_title={article.title}
          article_desc={article.description}
          article_image={article.image}
          timestamp={article.publishedAt}
          article_link={article.url}
        />
      ))}
    </div>
  );
}

export default Results;

import React, { useState, useEffect } from "react";
import Table from "./components/Table";
import "./App.scss";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [query, setQuery] = useState("");

  const [categories, setCategories] = useState([]);

  const APIKEY = process.env.REACT_APP_API_KEY;
  const URI = "https://api.currentsapi.services/v1/";

  useEffect(() => {
    fetch("https://api.currentsapi.services/v1/available/categories")
      .then((response) => response.json())
      .then((json) => setCategories(json.categories));
  }, []);

  let url = `${URI}${ query ? `search?keywords=${query}&` : "latest-news?" }apiKey=${APIKEY}`; //prettier-ignore
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        if (selectedOption) {
          setArticles(
            json.news.filter((article) =>
              article.category.includes(selectedOption)
            ) || []
          );
        } else {
          setArticles(json.news || []);
        }
      });
  }, [query, url, selectedOption]);

  return (
    <div className="app">
      <Navbar query={query} setQuery={setQuery} />
      <div className="app-body">
        <Sidebar
          options={categories}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />

        <Table articles={articles} />
      </div>
    </div>
  );
};

export default App;

import React, { useState, useEffect } from "react";
import Table from "./components/Table";
import "./App.scss";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

const App = () => {
  const options = ["top-headlines", "everything"];
  const [articles, setArticles] = useState([]);
  const [selectedOption, setSelectedOption] = useState("top-headlines");
  const [query, setQuery] = useState("tech");

  const APIKEY = process.env.REACT_APP_API_KEY;
  let url = `https://newsapi.org/v2/${selectedOption}?q=${query}&sortBy=publishedAt`;
  useEffect(() => {
    if (selectedOption) {
      fetch(url, { headers: { "X-Api-Key": APIKEY } })
        .then((response) => response.json())
        .then((json) => setArticles(json.articles || []));
    }
  }, [selectedOption, url]);

  return (
    <div className="app">
      <Navbar query={query} setQuery={setQuery} />
      <div className="app-body">
        <Sidebar
          options={options}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />

        <Table articles={articles} />
      </div>
    </div>
  );
};

export default App;

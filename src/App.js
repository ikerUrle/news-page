import React, { useState, useEffect } from "react";
import Table from "./components/Table";
import "./App.scss";
import Sidebar from "./components/Sidebar";
import Searchbar from "./components/Searchbar";

const App = () => {
  const options = ["posts", "comments", "todos"];
  const [articles, setArticles] = useState([]);
  const [selectedOption, setSelectedOption] = useState("posts");
  const [query, setQuery] = useState("");

  let url = `https://jsonplaceholder.typicode.com/${selectedOption}`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setArticles(json));
  }, [url]);

  return (
    <div className="app">
      <Searchbar query={query} setQuery={setQuery} />
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

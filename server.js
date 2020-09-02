const express = require("express");
const app = express();
const { createProxyMiddleware } = require("http-proxy-middleware");
const PORT = process.env.PORT || 5000;

app.use(express.static("build"));

app.use(
  "/api",
  createProxyMiddleware({
    target: "https://newsapi.org/v2",
    changeOrigin: true,
  })
);

app.listen(PORT, () => {
  console.log(`Website serving on port ${PORT}...`);
});

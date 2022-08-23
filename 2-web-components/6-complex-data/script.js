import "./article-item.js";
import articles from "./articles.js";

const containerElement = document.querySelector(".container");

articles.forEach((article) => {
  const articleItemElement = document.createElement("article-item");
  articleItemElement.article = article;
  containerElement.appendChild(articleItemElement);
});

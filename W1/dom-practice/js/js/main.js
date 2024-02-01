const titleEl = document.getElementById("title");
titleEl.style.textAlign = "center";

const pEl = document.querySelector(".cool");

pEl.innerText = "Comment for Today";
pEl.innerHTML = "comments for <strong>Today</strong>";

pEl.style.color = "red";

const linkEl = document.querySelector("a");
linkEl.setAttribute("href", "https://www.google.com");

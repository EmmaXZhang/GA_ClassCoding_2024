const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML = "<h1>SEI Rocks!</h1>";
mainEl.classList.add("flex-ctr");

const topMenuEl = document.querySelector("#top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

// Menu data structure
const menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

const subMenuEl = document.querySelector("#sub-menu");

for (let link of menuLinks) {
  const linkEl = document.createElement("a");
  linkEl.setAttribute("href", link.href);
  linkEl.innerText = link.text;
  topMenuEl.appendChild(linkEl);
}

subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";

subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";

const topMenuLinks = document.querySelectorAll("#topMenu > a");
let showingSubMenu = false;

topMenuEl.addEventListener("click", function (event) {
  event.preventDefault();
  if (event.target.tagName !== "A") return;
  if (event.target.classList.contains("active")) {
    event.target.classList.remove("active");
    showingSubMenu = false;
    subMenuEl.top = "0";
    return;
  }
  //task 5.5
  topMenuLinks.forEach(function (link) {
    link.classList.remove("active");
  });
  event.target.classList.add("active");

  //task 5.6
  const linkData = menuLinks.find(function (link) {
    return link.text === event.target.textContent;
  });

  showingSubMenu = linkData.hasOwnProperty("subLinks");

  //5.7
  if (showingSubMenu) {
    buildSubMenu(linkData.subLinks);
    subMenuEl.style.top = "100%";
  } else {
    subMenuEl.style.top = "0";
    mainEl.innerHTML = "<h1>about</h1>";
  }
});

//5.8
function buildSubMenu(sublinkArr) {
  subMenuEl.innerHTML = "";
  sublinkArr.forEach(function (sublink) {
    const linkEl = document.createElement("a");
    linkEl.setAttribute("href", sublink.href);
    linkEl.innerText = sublink.text;
    subMenuEl.append(linkEl);
  });
}

//6.0
subMenuEl.addEventListener("click", function (event) {
  event.preventDefault();
  if (event.target.tagName !== "A") return;
  showingSubMenu = false;
  subMenuEl.style.top = "0";

  topMenuLinks.forEach(function (link) {
    link.classList.remove("active");
  });
  mainEl.innerHTML = `<h1>${event.target.textContent}</h1>`;
});

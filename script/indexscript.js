function scrollDown() {
  window.scrollTo(0, document.body.scrollHeight);
}
history.scrollRestoration = "manual";
// window.onload = scrollToBottom;

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
function scrolldiv() {
  var elem = document.getElementById("virtybro");
  elem.scrollIntoView();
}
function scrolldivvirty() {
  var elem = document.getElementById("scroll");
  elem.scrollIntoView();
}
function scrolldivcredits() {
  var elem = document.getElementById("credits");
  elem.scrollIntoView();
}

if (/Android|iPhone/i.test(navigator.userAgent)) {
  window.onload = function () {
    alert(
      "Visit this on a Computer for Better View\nElse, turn on 'Desktop Mode'!"
    );
  };
  console.log("using phone");
} else {
  console.log("Not using mobile");
}

const api_url =
  "https://newsapi.org/v2/everything?q=coding&apiKey=7ca85b76c38d41c09f5c0704620bbae8";
let news_data = null;
let counter = 0;
const new_data = async () => {
  await fetch(api_url)
    .then((res) => res.json())
    .then((res) => {
      news_data = res.articles;
    })
    .catch((err) => {
      console.log(err);
    });
  return news_data;
};

const fetchNews = async () => {
  const data = await new_data();
  if (data == null) {
    aut.textContent = "Wait";
  }
  const aut = document.getElementById("authorname");
  const imgNews = document.getElementById("newsimg");
  aut.textContent = data[counter].title;
  const imgData = `<img src=${data[counter].urlToImage} height="90"  />`;
  console.log(data[0].urlToImage);
  imgNews.innerHTML = imgData;
  if (counter <= 20) {
    counter = counter + 1;
  }
  var i = 0;
  function move() {
    if (i == 0) {
      i = 1;
      var elem = document.getElementById("myBar");
      var width = 1;
      var id = setInterval(frame, 45);
      function frame() {
        if (width >= 100) {
          clearInterval(id);
          i = 0;
        } else {
          width++;
          elem.style.width = width + "%";
        }
      }
    }
  }
  move()
};

fetchNews();
setInterval(fetchNews, 5000);

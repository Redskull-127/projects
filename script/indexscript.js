function scrollDown() {
  window.scrollTo(0, document.body.scrollHeight);
}
history.scrollRestoration = "manual";
window.onload = scrollToBottom;

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
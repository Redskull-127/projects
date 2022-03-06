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
function scrolldivvirty() {
  var elem = document.getElementById("scroll");
  elem.scrollIntoView();
}
function scrolldivcredits() {
  var elem = document.getElementById("credits");
  elem.scrollIntoView();
}
$("#your-custom-id").mdbDropSearch();

function carsule() {
  var fileextension = [".png", ".jpg"];
  var dir = "/assets/images/";
  $(data)
    .find(
      "a:contains(" +
        fileextension[0] +
        "), a:contains(" +
        fileextension[1] +
        ")"
    )
    .each(function () {
      $.ajax({
        url: dir,
        success: function (data) {
          //List all .png file names in the page
          $(data)
            .find("a:contains(" + fileextension + ")")
            .each(function () {
              var filename = this.href
                .replace(window.location.host, "")
                .replace("http://", "");
              $("body").append("<img src='" + dir + filename + "'>");
            });
        },
      });
    });
}

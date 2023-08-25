let notification = document.querySelector(".notification-num");
let markAllRead = document.querySelector("h2");
let bcgColor = document.querySelectorAll(".bcg-color");
let redMark = document.querySelectorAll(".red-mark");

function updateStyles(e) {
  e.style.backgroundColor = "#ffffff";
  e.style.boxShadow = "none";
}

markAllRead.addEventListener("click", () => {
  for (let i = 0; i < bcgColor.length; i++) {
    updateStyles(bcgColor[i]);
    redMark[i].style.display = "none";
  }
  notification.style.display = "none";
});

for (let i = 0; i < bcgColor.length; i++) {
  bcgColor[i].addEventListener("click", () => {
    updateStyles(bcgColor[i]);
    redMark[i].style.display = "none";
    notification.innerHTML--;
    if (parseInt(notification.innerHTML) === 0) {
      notification.style.display = "none";
    }
  });
}

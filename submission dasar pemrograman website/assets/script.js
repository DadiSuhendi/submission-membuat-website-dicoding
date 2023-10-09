window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scroll-btn").style.display = "block";
    document.getElementById("header").classList.add("scroll-nav");
  } else {
    document.getElementById("scroll-btn").style.display = "none";
    document.getElementById("header").classList.remove("scroll-nav");
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

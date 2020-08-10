const anchors = document.querySelectorAll('.scroll');

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute('href').substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

document.addEventListener("scroll", () => {
  let scrollTop = window.scrollY;
  const headerWrapper = document.querySelector(".header");

  if (scrollTop > 100) {
    headerWrapper.classList.add("header--fixed");
  }
});

const anchors = document.querySelectorAll('.scroll');

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute('href').substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    })
  })
}

const toggleClass = document.querySelector('.header');

window.addEventListener('scroll',  () => {
  if (window.pageYOffset > toggleClass.getBoundingClientRect().bottom - 75) {
    toggleClass.classList.add('header--fixed');
  } else {
    toggleClass.classList.remove('header--fixed');
  }
});

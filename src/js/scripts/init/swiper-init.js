function initSwiper(slider) {
  if(!slider) {
    return;
  }

  let mySwiper = new Swiper(`.${slider.container}`, {
    pagination: {
      el: `.${slider.containerClass}__pagination`,
      type: `bullets`,
      currentClass: `${slider.containerClass}__current`,
      totalClass: `${slider.containerClass}__total`,
      bulletClass: `${slider.containerClass}__bullet`,
      bulletActiveClass: `${slider.containerClass}__bullet--active`,
      clickable: true,
    },
    navigation: {
      nextEl: `.${slider.containerClass}__button--next`,
      prevEl: `.${slider.containerClass}__button--prev`,
      disabledClass: `${slider.containerClass}__button--disabled`,
    },
    speed: 1000,
    loop: slider.loop,
    slidesPerView: slider.slidesPerView || 1,
    spaceBetween: slider.spaceBetween || 30,
    freeMode: slider.freeMode,
    watchSlidesVisibility: slider.watchSlidesVisibility,
    watchSlidesProgress: slider.watchSlidesProgress,
    wrapperClass: `${slider.containerClass}__list`,
    slideClass: `${slider.containerClass}__item`,
    slideActiveClass: `${slider.containerClass}__item--active`,
    slideDuplicateActiveClass: `${slider.containerClass}__item-duplicate--active`,
    slideVisibleClass: `${slider.containerClass}__item--visible`,
    slideDuplicateClass: `${slider.containerClass}__item-duplicate`,
    slideNextClass: `${slider.containerClass}__item--next`,
    slideDuplicateNextClass: `${slider.containerClass}__item-duplicate--next`,
    slidePrevClass: `${slider.containerClass}__item--prev`,
    slideDuplicatePrevClass: `${slider.containerClass}__item-duplicate--prev`,
    slideBlankClass: `${slider.containerClass}__invisible-blank`,
    bulletClass: `${slider.containerClass}__bullet`,
    bulletActiveClass: `${slider.containerClass}__bullet--active`,
    modifierClass: `${slider.containerClass}__pagination`,
    hiddenClass: `${slider.containerClass}__hidden`,
    progressbarFillClass: `${slider.containerClass}__progressbar-fill`,
    clickableClass: `${slider.containerClass}__clickable`,
    lockClass: `${slider.containerClass}__lock`,
    progressbarOppositeClass: `${slider.containerClass}__progressbar-opposite`
  });
}

const contactsMain = {
  container: 'contacts__inner',
  containerClass: 'contacts'
};


initSwiper(contactsMain);




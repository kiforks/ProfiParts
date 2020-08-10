function contactsToggle() {
  let toggleButton = document.querySelectorAll('.contacts__button-toggle');
  let sliderButton = document.querySelectorAll('.contacts__button');
  let addressList =  document.querySelectorAll('.contacts__address');
  let sliderList =  document.querySelectorAll('.contacts__item--main');
  let thumbsItem = document.querySelectorAll('.contacts__item--thumbs');

  toggleButton.forEach(button => {
    button.onclick = event => {
      let parentRow = event.target.closest('.contacts__address');

      if(!parentRow) return;

      if(parentRow.classList.contains('contacts__address--active')) {
        parentRow.classList.remove('contacts__address--active');
      } else {
        parentRow.classList.add('contacts__address--active');
      }
    };
  })

  function sliderToggle() {
    sliderList.forEach((slider, index) => {
      if(sliderList[index].classList.contains('contacts__item--active') && !addressList[index].classList.contains('contacts__address-active')) {
        console.log(addressList[index]);
        addressList[index].classList.add('contacts__address--active');
      } else {
        addressList[index].classList.remove('contacts__address--active');
      };
    })
  }

  sliderButton.forEach(button => {
    button.onclick = event => {
      event.preventDefault();

      sliderToggle();
    }
  })

  thumbsItem.forEach(button => {
    button.onclick = event => {
      event.preventDefault();

      sliderToggle();
    }
  })
}

contactsToggle();

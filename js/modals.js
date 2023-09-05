const chooseButtonDelivery = document.querySelector(".total__icon-button--delivery");
const buttonDelivery = document.querySelector(".delivery__button");
const modalDelivery = document.querySelector(".modal__delivery-modal");
const closeButton = document.querySelector(".close-button");
const modalButtonChoose = document.querySelector(".addresses-modal__button");

// Открытие модального окна "Способ доставки"
chooseButtonDelivery.addEventListener("click", (evt) => {
  modalDelivery.classList.remove("modal__delivery-modal--close");
})

buttonDelivery.addEventListener("click", (evt) => {
  modalDelivery.classList.remove("modal__delivery-modal--close");
})

// Закрытие окна "Способ доставки"
closeButton.addEventListener("click", (evt) => {
  modalDelivery.classList.add("modal__delivery-modal--close");
})

modalButtonChoose.addEventListener("click", (evt) => {
  modalDelivery.classList.add("modal__delivery-modal--close");
})

// переключение радиокнопок "в пункт выдачи" и "курьером"
const radioButtonPoint = document.querySelector(".type-delivery__input--point");
const radioButtonDelivery = document.querySelector(".type-delivery__label--delivery");
const listAdressesPoint = document.querySelector(".addresses-modal__list--point");
const listAdressesDelivery = document.querySelector(".addresses-modal__list--delivery");

const changeAdresses = () => {
  if(radioButtonPoint.checked) {
    listAdressesPoint.display = "block";
  } 
}

changeAdresses();
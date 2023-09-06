const chooseButtonDelivery = document.querySelector(".total__icon-button--delivery");
const buttonDelivery = document.querySelector(".delivery__button");
const modalDelivery = document.querySelector(".modal__delivery-modal");
const closeButton = document.querySelector(".close-button");
const modalButtonChoose = document.querySelector(".addresses-modal__button");

// инпуты "пункт выдачи" и "курьером"
const radioButtonList = document.querySelectorAll(".type-delivery__input");
// "Пункт выдачи"
const radioButtonPoint = document.querySelector(".type-delivery__input--point");
// Список пунктов выдачи
const listAdressesPoint = document.querySelector(".addresses-modal__list--point");
// "Курьером"
const radioButtonDelivery = document.querySelector(".type-delivery__label--delivery");
// Список адресов для курьера
const listAdressesDelivery = document.querySelector(".addresses-modal__list--delivery");


// Открытие модального окна "Способ доставки"
const openModalDelivery = () => {
  // По нажатию на кнопку с иконкой в разделе итого
  chooseButtonDelivery.addEventListener("click", (evt) => {
    modalDelivery.classList.remove("modal__delivery-modal--close");
  })
  // По нажатию на кнопку "Изменить" в разделе "Способ доставки"
  buttonDelivery.addEventListener("click", (evt) => {
    modalDelivery.classList.remove("modal__delivery-modal--close");
  })
};

// Закрытие окна "Способ доставки"
const closeModalDelivery = () => {
  // По нажатию на крестик в модальном окне
  closeButton.addEventListener("click", (evt) => {
    modalDelivery.classList.add("modal__delivery-modal--close");
  })
  // По нажатию на кнопку "Выбрать" в модальном окне
  modalButtonChoose.addEventListener("click", (evt) => {
    modalDelivery.classList.add("modal__delivery-modal--close");
  })
};

// Переключение контента мобильного окна в зависимости от радиокнопок
const changeAdresses = () => {
  // На каждый инпут вешаем слушатель(клик)
  for (let i = 0; i < radioButtonList.length; i++) { 
    radioButtonList[i].addEventListener("click", (evt) => {
      // Если активна радио-кнопка "Пункт выдачи"
      if (radioButtonList[0].checked) {
        listAdressesPoint.style.display = "block";
        listAdressesDelivery.style.display = "none";
      } else {
        listAdressesPoint.style.display = "none";
        listAdressesDelivery.style.display = "block";
      }
    })
  }
}

export {openModalDelivery, closeModalDelivery, changeAdresses};

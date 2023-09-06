// СПОСОБ ДОСТАВКИ
// Модальное окно
const modalDelivery = document.querySelector(".modal__delivery-modal");
// Кнопки открытия
const chooseButtonDelivery = document.querySelector(".total__icon-button--delivery");
const buttonDelivery = document.querySelector(".delivery__button");
// Кнопки закрытия
const closeButtonDelivery = document.querySelector(".delivery-modal__close-button");
const modalButtonChooseDelivery = document.querySelector(".addresses-modal__button");
// Переключение контента с помощью радиокнопок:
const radioButtonList = document.querySelectorAll(".type-delivery__input"); //инпуты "пункт выдачи" и "курьером"
const listAdressesPoint = document.querySelector(".addresses-modal__list--point"); // Список пунктов выдачи
const listAdressesDelivery = document.querySelector(".addresses-modal__list--delivery");// Список адресов для курьера

// СПОСОБ ОПЛАТЫ
// Модальное окно
const modalPayment = document.querySelector(".modal__payment-modal");
// Кнопки открытия
const chooseButtonPayment = document.querySelector(".total__icon-button--payment");
const buttonPayment = document.querySelector(".payment__button");
// Кнопки закрытия
const closeButtonPayment = document.querySelector(".payment-modal__close-button");
const modalButtonChoosePayment = document.querySelector(".payment-modal__button");


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
  closeButtonDelivery.addEventListener("click", (evt) => {
    modalDelivery.classList.add("modal__delivery-modal--close");
  })
  // По нажатию на кнопку "Выбрать" в модальном окне
  modalButtonChooseDelivery.addEventListener("click", (evt) => {
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

// Открытие модального окна "Способ доставки"
const openModalPayment = () => {
  // По нажатию на кнопку с иконкой в разделе итого
  chooseButtonPayment.addEventListener("click", (evt) => {
    modalPayment.classList.remove("modal__payment-modal--close");
  })
  // По нажатию на кнопку "Изменить" в разделе "Способ доставки"
  buttonPayment.addEventListener("click", (evt) => {
    modalPayment.classList.remove("modal__payment-modal--close");
  })
};

// Закрытие окна "Способ доставки"
const closeModalPayment = () => {
  // По нажатию на крестик в модальном окне
  closeButtonPayment.addEventListener("click", (evt) => {
    modalPayment.classList.add("modal__payment-modal--close");
  })
  // По нажатию на кнопку "Выбрать" в модальном окне
  modalButtonChoosePayment.addEventListener("click", (evt) => {
    modalPayment.classList.add("modal__payment-modal--close");
  })
};

export {openModalDelivery, closeModalDelivery, changeAdresses, openModalPayment, closeModalPayment};

const EMAIL_VALID = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
const NAME_VALID = /^[a-zа-яё]+$/i;
const PHONE_VALID = /(\+7|8)[\s(]*\d{3}[)\s]*\d{3}[\s-]?\d{2}[\s-]?\d{2}/;
const TAXPAYER_VALID = /(\s+)?(\d{10})/;

const form = document.querySelector(".main__form"); //форма, которую будем валидировать
const validateButton = document.querySelector(".total__button"); // кнопка "заказать"+отправка формы
//все поля формы
const nameInput = document.querySelector(".form__input--name");
const surnameInput = document.querySelector(".form__input--surname");
const emailInput = document.querySelector(".form__input--email");
const phoneInput = document.querySelector(".form__input--phone");
const taxpayerNumberInput = document.querySelector(".form__input--taxpayer-number");

form.addEventListener('submit', (evt) => {
  evt.preventDefault();   // Отменяем действие по умолчанию у формы
});

// создаем элемент с ошибкой
const createError = (input, text) => { //функция создания span'a с текстом ошибки в родительском блоке инпута
  const parent = input.parentNode;
  const errorText = document.createElement("span");
  errorText.classList.add("error-text");
  errorText.textContent = text;
  parent.classList.add("error");
  parent.append(errorText);
};

// Удаялем элемент с ошибкой
const removeError = (input) => { //функция удаления span'a с ошибкой и класса error у родительского блока
  const parent = input.parentNode;
  if(parent.classList.contains("error")) {
    parent.querySelector(".error-text").remove();
    parent.classList.remove("error")
  }
};

// ВАЛИДАЦИЯ ПОЛЕЙ
const isNameValid = (value) => { //Имя и фамилия
  return NAME_VALID.test(value);
};

const isEmailValid = (value) => { //Эл.почта
  return EMAIL_VALID.test(value);
};

const isPhoneValid = (value) => { //Эл.почта
  return PHONE_VALID.test(value);
};

const isTaxpayerNumberValid = (value) => { //ИНН
  return TAXPAYER_VALID.test(value);
}

// Универсальная функция проверки инпута
const validInput = (input, isValidFunction, text) => {
  removeError(input); // удаляем ошибки
  if (!isValidFunction(input.value)) {
    createError(input, text);
  }
}

// ВЫВОД ОШИБОК ПОСЛЕ ВАЛИДАЦИИ
nameInput.addEventListener("change", (evt) => {
  validInput(nameInput, isNameValid, "Имя может состоять только из букв");
});

surnameInput.addEventListener("change", (evt) => {
  validInput(surnameInput, isNameValid, "Фамилия может состоять только из букв");
});

emailInput.addEventListener("change", (evt) => {
  validInput(emailInput, isEmailValid, "Проверьте адрес электронной почты");
});

phoneInput.addEventListener("change", (evt) => {
  validInput(phoneInput, isPhoneValid, "Формат: +9 999 999 99 99");
});

taxpayerNumberInput.addEventListener("change", (evt) => {
  validInput(taxpayerNumberInput, isTaxpayerNumberValid, "Проверьте ИНН");
});

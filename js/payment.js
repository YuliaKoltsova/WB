// Кнопка заказа
const totalButton = document.querySelector(".total__button");
// Инпут чекбокса "списать оплату сразу"
const checkboxPayment = document.querySelector(".checkbox-element__input--total");

/* При выборе чекбокса "Списать оплату сразу" 
появляется надпись с суммой к оплате на кнопке "Заказать" */
// Изменение надписи на кнопке заказа
checkboxPayment.addEventListener("click", (evt) => {
  // Если чекбокс выбран - заменяем текст в кнопке на сумму покупки
  if (checkboxPayment.checked) {
    const totalPrice = document.querySelector(".total__total");
    totalButton.textContent  = totalPrice.textContent;
    console.log("1")
  } 
  // Если чекбокс не выбран - возвращаем надпись "заказать"
  else {
    totalButton.textContent = "Заказать";
  }
})
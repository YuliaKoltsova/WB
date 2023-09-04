// Кнопка заказа
const totalButton = document.querySelector(".total__button");
// Инпут чекбокса "списать оплату сразу"
const checkboxPayment = document.querySelector(".checkbox-element__input--total");

// /* Сумма к оплате высчитывается из количества выбранных товаров*/
// // Находим цену каждого товара исходя из выбранного количества
// const goodsCards = document.querySelector(".goods-stock");

// goodsCards.addEventListener('')

// // priceGoods будет содержать 6 цен, т.к. в карточке дублируется разметка блока с ценой для mobile и desktop/tablet
// const priceGoods = document.querySelectorAll(".goods-card__info-price");
// console.log(priceGoods);

/* При выборе чекбокса "Списать оплату сразу" 
появляется надпись с суммой к оплате на кнопке "Заказать" */

// Изменение надписи на кнопке заказа
// Вешаем слушатель(клик) на инпут
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
// Работа инпута с кнопками с количеством в карточке товара
const goodsCardsButtons = document.querySelectorAll(".count__button");

// Цены на единицу товара со скидкой
const PriceGoods = {
  1: 522,
  2: 10500.235,
  3: 247,
}

// Цены на единицу товара без скидки
const OldPriceGoods = {
  1: 1051,
  2: 11500.235,
  3: 475,
}

// Функция отображения сумм в блоке Итого
const calculatedTotal = (array, element) => {
  // Добавляем в массив все цены
  const arrayPrices = new Array(); 
  for (let i = 0; i < array.length; i++) {
    arrayPrices.push(Number(array[i].textContent.replace(/[^0-9]/g,"")));
  }
  // Забираем каждый второй элемент массива, т.к. в разметке дублируется цена для mobile и desktop/tablet
  const sortedArrayPrices = arrayPrices.filter((item, index) => index % 2);
  // Суммируем
  const sumOfNumbers = sortedArrayPrices.reduce((acc, number) => acc + number, 0);
  element.textContent = `${(sumOfNumbers).toLocaleString()} com`;
}

// Функция отображения количества товаров в блоке Итого
const calculatedTotalCount = (array, element) => {
  // Добавляем в массив количество каждого товара
  const arrayPrices = new Array(); 
  for (let i = 0; i < array.length; i++) {
    arrayPrices.push(Number(array[i].value.replace(/[^0-9]/g,"")));
  }
  // Забираем каждый второй элемент массива, т.к. в разметке дублируется блоки с количеством для mobile и desktop/tablet
  const sortedArrayPrices = arrayPrices.filter((item, index) => index % 2);
  // Суммируем
  const sumOfNumbers = sortedArrayPrices.reduce((acc, number) => acc + number, 0);
  if (sumOfNumbers > 1) {
    element.textContent = `${(sumOfNumbers).toLocaleString()} товара`;
  } else {
    element.textContent = `${(sumOfNumbers).toLocaleString()} товар`;
  }
}

// Изменение стоимости товаров в карточках товаров и в полях Итого
const calculationCardPrices = (evt) => {
  // Количество товаров
  let count;
  if (evt.target.classList.contains("count__button")) {
      count = Number(evt.target.parentElement.querySelector(".count__input").value);
  }
  // Цена каждого товара (из объектов с ценами(имит.данных с сервера))
  const priceOneItem = PriceGoods[evt.target.closest(".goods-stock__item").id];
  const oldPriceOnetem = OldPriceGoods[evt.target.closest(".goods-stock__item").id];
  // Находим все элементы со стоимостью в карточке товара, с которой взаимодейтсвуем(изменяем количество)
  const price = evt.target.closest(".goods-stock__item").querySelectorAll(".goods-card__info-price");
  const oldPrice = evt.target.closest(".goods-stock__item").querySelectorAll(".goods-card__info-old-price");
  // Для всех элементов со стоимостью товара(карточки, с которой взаимодействуем): количество * стоимость 1шт товара
  price.forEach(element => {
    element.textContent = `${(Math.round(count * priceOneItem)).toLocaleString()} com`;
  });
  oldPrice.forEach(element => {
    element.textContent = `${(Math.round(count * oldPriceOnetem)).toLocaleString()} com`;
  });

  // Сумма со скидкой
  const prices = document.querySelectorAll(".goods-card__info-price"); // все элементы с ценами со скидкой во всех карточках товаров
  const total = document.querySelector(".total__total"); //элемент в блоке Итого, куда записываем стоимость всех товаров в корзине
  calculatedTotal(prices, total);
  const totalPriceMainPart = document.querySelector(".goods__all-info--total-price");
  calculatedTotal(prices, totalPriceMainPart);
  // Сумма без скидки
  const priceWithoutSale = document.querySelectorAll(".goods-card__info-old-price");
  const totalWithoutSale = document.querySelector(".total__сell--without-discount");
  calculatedTotal(priceWithoutSale, totalWithoutSale)

  // Расчет и отображение скидки
  const totalDiscount = document.querySelector(".total__сell-discoun");
  totalDiscount.textContent = `${((Number(total.textContent.replace(/[^0-9]/g,""))) - Number(totalWithoutSale.textContent.replace(/[^0-9]/g,""))).toLocaleString()} com`

  // Расчет и отображение количества товара
  const totalCount = document.querySelector(".total__сell--count");
  const allCount = document.querySelectorAll(".count__input");
  calculatedTotalCount(allCount, totalCount);
  const allCountMainPart = document.querySelector(".goods__all-info--count");
  calculatedTotalCount(allCount, allCountMainPart);
}

// Работа кнопок + и - в карточках товара
const buttonOperation = () => {
  for (let i = 0; i < goodsCardsButtons.length; i++) {
    goodsCardsButtons[i].addEventListener("click", (evt) => {
      let countGoods; //Создаем переменную для количества товара в остатке
      if (evt.target.closest(".goods-stock__item").querySelector(".goods-card__count-info") !== null) { //Если у выбранного элемента ЕСТЬ поле в разметке с остатком товара на складе, то:
        countGoods = document.querySelector(".goods-card__count-info").textContent.replace(/[^0-9]/g,""); //Количество товара в остатке равно числовому значению указанному в поле с остатком
      } else { // если у выбранного элемента НЕТ в разметке поля с остатком, то количество товара в остатке 100000(столько единиц товара явно не закажут)
        countGoods = 100000; 
      }
      // Если нажали + и количество меньше чем в остатке(countGoods), то:
      if (evt.target.classList.contains("count__button--plus") && evt.target.parentElement.querySelector("input").value < countGoods) {
        ++evt.target.parentElement.querySelector("input").value; // +1
        evt.target.parentElement.querySelector(".count__button--minus").classList.remove("count__button--minus-none"); // кнопку - делаем доступной 
        // Если количество равно остатку, то:
        if (evt.target.parentElement.querySelector("input").value == countGoods) {
            evt.target.classList.add("count__button--plus-none"); // блокируем кнопку +
        }
      }
      // Если нажали - и количество больше чем 1, то:
      else if (evt.target.classList.contains("count__button--minus") && evt.target.parentElement.querySelector("input").value > 1) {
        --evt.target.parentElement.querySelector("input").value; // -1
        evt.target.parentElement.querySelector(".count__button--plus").classList.remove("count__button--plus-none"); //разблокируем кнопку -
        // если количество меньше, либо равно 1, то:
        if (evt.target.parentElement.querySelector("input").value <= 1) {
          evt.target.classList.add("count__button--minus-none"); //блокируем кнопку -
        }
      }
      calculationCardPrices(evt);
    });
  }
}

export {buttonOperation};
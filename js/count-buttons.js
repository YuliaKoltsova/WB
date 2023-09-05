// Работа инпута с кнопками с количеством в карточке товара
const goodsCards = document.querySelector(".goods-stock");

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

// Функция отображения сумм в блоке Итого
const calculatedTotalCount = (array, element) => {
  // Добавляем в массив все цены
  const arrayPrices = new Array(); 
  for (let i = 0; i < array.length; i++) {
    arrayPrices.push(Number(array[i].value.replace(/[^0-9]/g,"")));
  }
  // Забираем каждый второй элемент массива, т.к. в разметке дублируется цена для mobile и desktop/tablet
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
  const count = Number(evt.target.parentElement.querySelector("input").value);
  // Цена каждого товара
  const priceOneItem = PriceGoods[evt.target.closest(".goods-stock__item").id];
  const oldPriceOnetem = OldPriceGoods[evt.target.closest(".goods-stock__item").id];
  // Стоимость на карточке товара
  const price = evt.target.closest(".goods-stock__item").querySelectorAll(".goods-card__info-price");
  const oldPrice = evt.target.closest(".goods-stock__item").querySelectorAll(".goods-card__info-old-price");
    // Стоимость товаров в зависимости от выбранного количества
  price.forEach(element => {
    element.textContent = `${(Math.round(count * priceOneItem)).toLocaleString()} com`;
  });
  oldPrice.forEach(element => {
    element.textContent = `${(Math.round(count * oldPriceOnetem)).toLocaleString()} com`;
  });

  // Сумма со скидкой
  const prices = document.querySelectorAll(".goods-card__info-price");
  const total = document.querySelector(".total__total");
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

// Добавляем слушатель(клик) на список карточек товаров в корзине (те, что есть в наличии) и реализуем работу кнопок + и - (значение в инпуте >= 1)
goodsCards.addEventListener("click", (evt) => {
  let countGoods;
  if (evt.target.closest(".goods-card__info-bottom").querySelector(".goods-card__count-info") !== null) {
    countGoods = document.querySelector(".goods-card__count-info").textContent.replace(/[^0-9]/g,"");
  } else {
    countGoods = 100000;
  }
  // Если нажали + и количество меньше чем в остатке(countGoods), то:
  if (evt.target.classList.contains("count__button--plus") && evt.target.parentElement.querySelector("input").value < countGoods) {
    // +1
    ++evt.target.parentElement.querySelector("input").value;
    // кнопку - делаем доступной 
    evt.target.parentElement.querySelector(".count__button--minus").classList.remove("count__button--minus-none");
    if (evt.target.parentElement.querySelector("input").value == countGoods) {
        evt.target.classList.add("count__button--plus-none");
    }
  }
  // Если нажали - и количество больше чем 1, то
  else if (evt.target.classList.contains("count__button--minus") && evt.target.parentElement.querySelector("input").value > 1) {
    // -1
    --evt.target.parentElement.querySelector("input").value;
    evt.target.parentElement.querySelector(".count__button--plus").classList.remove("count__button--plus-none");
    if (evt.target.parentElement.querySelector("input").value <= 1) {
      evt.target.classList.add("count__button--minus-none");
    }
  }
  calculationCardPrices(evt);
});



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
  1: 522,
  2: 10500.235,
  3: 247,
}

// Изменение стоимости товаров в карточках товаров
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
}

// // Cделать массив только из чисел из полученного NodeList
// const getArray = (list, array) => {
//   list.forEach (element => {
//     array.push(Number(element.textContent.replace(/[^0-9]/g,"")));
//   })
// }

// // Сложить все элементы массива
// const summArray = (array) => {
//   let s = 0;
//   for (let i = 0; i < array.length; i++){
//     s += array[i]
//   }
//   return s
// }

// const getSumm = (list) => {
//   // Создаем пустой массив
//   let arrayNumber = new Array();
//   // Добавляем в пустой массив только числа
//   getArray(list, arrayNumber);
//   // Складываем все числа массива
//   const summ = summArray(arrayNumber);
//   return summ;
// }

// // Изменение стоимости в поле Итого
// const calculationTotalPrice = (evt) => {
//   const total = document.querySelector(".total__total");
//   const allPrices = document.querySelectorAll(".goods-card__info-price--for-total");
//   console.log(getSumm(allPrices))
//   total.textContent = getSumm(allPrices);

// }

const countGoods = document.querySelector(".goods-card__count-info").textContent.replace(/[^0-9]/g,"");

// Добавляем слушатель(клик) на список карточек товаров в корзине (те, что есть в наличии) и реализуем работу кнопок + и - (значение в инпуте >= 1)
goodsCards.addEventListener("click", (evt) => {
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
});
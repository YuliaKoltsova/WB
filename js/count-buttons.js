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

// Добавляем слушатель(клик) на список карточек товаров в корзине (те, что есть в наличии) и реализуем работу кнопок + и - (значение в инпуте >= 1)
goodsCards.addEventListener("click", (evt) => {
  if (evt.target.classList.contains("count__button--plus")) {
    ++evt.target.parentElement.querySelector("input").value;
    evt.target.parentElement.querySelector(".count__button--minus").classList.remove("count__button--minus-none");
  } else if (evt.target.classList.contains("count__button--minus") && evt.target.parentElement.querySelector("input").value > 1) {
    --evt.target.parentElement.querySelector("input").value;
    if (evt.target.parentElement.querySelector("input").value <= 1) {
      evt.target.classList.add("count__button--minus-none");
    }
  }
  if (evt.target.closest(".goods-card__count")) {  // Количество товаров
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
});
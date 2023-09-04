// Работа инпута с кнопками с количеством в карточке товара
const goodsCard = document.querySelector(".goods-stock");

// Добавляем слушатель(клик) на список карточек товаров в корзине (те, что есть в наличии) и реализуем работу кнопок + и - (значение в инпуте >= 1)
goodsCard.addEventListener("click", (evt) => {
  if (evt.target.classList.contains("count__button--plus")) {
    ++evt.target.parentElement.querySelector("input").value;
    evt.target.parentElement.querySelector(".count__button--minus").classList.remove("count__button--minus-none");
  } else if (evt.target.classList.contains("count__button--minus") && evt.target.parentElement.querySelector("input").value > 1) {
    --evt.target.parentElement.querySelector("input").value;
  } else if (evt.target.classList.contains("count__button--minus") && evt.target.parentElement.querySelector("input").value <= 3) {
    evt.target.classList.add("count__button--minus-none");
  }
});

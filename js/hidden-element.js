// "Кнопки" скрытия-показа
const hiddenElementStock = document.querySelector(".goods__hidden-element--stock");
const hiddenElementOutStock = document.querySelector(".goods__hidden-element--out-stock");
// Что скрываем-показываем
const goodsList = document.querySelector(".goods-stock__stock");
const goodsOutStockList = document.querySelector(".goods-stock__out-stock");
const checkboxAll = document.querySelector(".checkbox-element__label");
const goodsInfo = document.querySelector(".goods__all-info");
const checkboxWrapper = document.querySelector(".goods__checkbox-all");

// Скрыть
const hidden = (object, button) => {
  object.style.display = "none";
  object.classList.add("hidden-block");
  button.style.backgroundImage = "url('img/arrow-icon-open.svg')";
  button.style.marginBottom = "18px";
  checkboxWrapper.style.borderBottom = "2px solid rgba(0, 0, 0, 0.1)";
} 
// Показать
const show = (object, button) => {
  object.style.display = "block";
  object.classList.remove("hidden-block");
  button.style.backgroundImage = "url('img/arrow-icon.svg')";
  button.style.marginBottom = "0";
  checkboxWrapper.style.borderBottom = "none";
}

// Скрытие-показ в блоке с товарами в наличии
hiddenElementStock.addEventListener("click", (evt) => {
  if (!goodsList.classList.contains("hidden-block")) {
    hidden(goodsList, hiddenElementStock)
    checkboxAll.style.display = "none";
    goodsInfo.style.display = "block";
  } else {
    show(goodsList, hiddenElementStock)
    checkboxAll.style.display = "flex";
    goodsInfo.style.display = "none";
  }
})

// Скрытие-показ в блоке с товарами не в наличии
hiddenElementOutStock.addEventListener("click", (evt) => {
  if (!goodsOutStockList.classList.contains("hidden-block")) {
    hidden(goodsOutStockList, hiddenElementOutStock)
  } else {
    show(goodsOutStockList, hiddenElementOutStock)
  }
})



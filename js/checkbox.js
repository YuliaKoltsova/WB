/* При выборе чекбокса "Выбрать все", все чекбоксы в списке товаров в корзине тоже 
становятся активными */
// Находим инпут "Выбрать все"
const checkedAll = document.querySelector(".checkbox-element__input--all");
// Находим форму
const basketForm = document.querySelector(".main__form");
// Находим все инпуты в карточках товаров (получаем NodeList дочерних элементов(инпутов) формы)
const checkboxCards = basketForm.querySelectorAll(".checkbox-element__input--card");

// Вешаем слушатель(клик) на инпут "Выбрать все"
checkedAll.addEventListener("click", (evt) => {
  for (let i = 0; i < checkboxCards.length; i++) {
    // если checkbox "Выбрать всё" - отмечен
    if (checkedAll.checked) {
      // Отмечаем все чекбоксы
      checkboxCards[i].checked = true;
    } 
    else {
      // Иначе снимаем отметки со всех чекбоксов
      checkboxCards[i].checked = false;
    }
  }
})

/* Если какой-то из чекбоксов в корзине не выбран, то чекбокс "выбрать все" 
становится не отмеченым */
const removeCheckboxAll = () => {
  for (let i = 0; i < checkboxCards.length; i++) { 
    // Вешаем слушатель(клик) на инпуты в карточках товаров
    checkboxCards[i].addEventListener("click", (evt) => {
      if (!checkboxCards[i].checked) {
        checkedAll.checked = false;
      } 
    })
  }
}

removeCheckboxAll();

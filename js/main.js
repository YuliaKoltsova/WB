import "./checkbox.js";

// работа инпута с кнопками в карточке товара
import "./count-buttons.js"

// подсчет суммы заказа и работа кнопки "заказать"
import "./payment.js"

import "./hidden-element.js"

// Показ/скрытие мод.окон + изменение контента мод.окнаы
import {openModalDelivery, closeModalDelivery, changeAdresses} from "./modals.js";

openModalDelivery();
closeModalDelivery();
changeAdresses();
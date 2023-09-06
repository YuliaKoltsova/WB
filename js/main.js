import "./checkbox.js";

// подсчет суммы заказа и работа кнопки "заказать"
import "./payment.js"

import "./hidden-element.js"

// Показ/скрытие мод.окон + изменение контента мод.окна
import {openModalDelivery, closeModalDelivery, changeAdresses, openModalPayment,closeModalPayment} from "./modals.js";
// работа инпута с кнопками в карточке товара
import { buttonOperation } from "./count-buttons.js";

openModalDelivery();
closeModalDelivery();
changeAdresses();
openModalPayment();
closeModalPayment();

buttonOperation();
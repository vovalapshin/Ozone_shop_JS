'use strict';

import getData from './modules/getData';
import renderCards from './modules/renderCards';
import renderCatalog from './modules/renderCatalog';
import toggleCheckBox from './modules/toggleCheckBox';
import toggleCart from './modules/toggleCart';
import toggleAddCart from './modules/toggleAddCart';
import actionPage from './modules/actionPage';

(async function() {
    const db = await getData();
    renderCards(db);
    renderCatalog();
    toggleCheckBox();
    toggleCart();
    toggleAddCart();
    actionPage();
}());



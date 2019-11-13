export default function toggleAddCart() {
    const card = document.querySelectorAll('.card'),
        cartWrapper = document.querySelector('.cart-wrapper'),
        cartEmpty = document.getElementById('cart-empty'),
        countGoods = document.querySelector('.counter');

    card.forEach((card) => {
        const btn = card.querySelector('button');
        btn.addEventListener('click', () => {
            const cardClone = card.cloneNode(true);
            cartWrapper.appendChild(cardClone);
            showData();

            const removeBtn = cardClone.querySelector('.btn');
            removeBtn.textContent = 'удалить из корзины';
            removeBtn.addEventListener('click', () => {
                cardClone.remove();
                showData();
            });
        });
    });

    function showData() {
        const cartCards = cartWrapper.querySelectorAll('.card'),
            cardsPrice = cartWrapper.querySelectorAll('.card-price'),
            totalPrice = document.querySelector('.cart-total span');

        let sum = 0;

        countGoods.textContent = cartCards.length;

        cardsPrice.forEach((cardPrice) => {
            let price = (parseFloat(cardPrice.textContent));
            sum += price;
        });

        totalPrice.textContent = sum;

        cartCards.length !== 0 ? cartEmpty.remove() : cartWrapper.appendChild(cartEmpty);
    }
}
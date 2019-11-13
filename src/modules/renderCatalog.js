import filter from './filter';

export default function renderCatalog() {
    const cards = document.querySelectorAll('.goods .card');
    const catalogList = document.querySelector('.catalog-list');
    const catalogWrapper = document.querySelector('.catalog');
    const catalogBtn = document.querySelector('.catalog-button');
    const categories = new Set();
    const filterTitle = document.querySelector('.filter-title h5');

    cards.forEach((card) => {
        categories.add(card.dataset.category);
    });

    categories.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item;
        catalogList.appendChild(li);
    });

    const allLi = catalogList.querySelectorAll('li');

    catalogBtn.addEventListener('click', (event) => {
        catalogWrapper.style.display ? catalogWrapper.style.display = ''
            : catalogWrapper.style.display = 'block';

        if (event.target.tagName === 'LI') {
            allLi.forEach((elem) => {
                elem === event.target ? elem.classList.add('active')
                    : elem.classList.remove('active');
            });
            
            filterTitle.textContent = event.target.textContent;
            
            filter();
        }
    });
}
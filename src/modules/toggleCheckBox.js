
export default function toggleCheckBox() {
    const checkbox = document.querySelectorAll('.filter-check_checkbox');

    checkbox.forEach((element) => {
        element.addEventListener('change', function () {
            this.checked ? this.nextElementSibling.classList.add('checked')
                : this.nextElementSibling.classList.remove('checked');
        });
    });
}
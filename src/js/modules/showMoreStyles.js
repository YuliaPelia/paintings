import { getResourse } from "../services/requests";
// trigger - кнопка,  яка викликає показ стилів
// wrapper - обгортка в якій містяться всі карточки
const showMoreStyles = (trigger, wrapper) => {
    const btn = document.querySelector(trigger);

    // cards.forEach(card => {
    //     card.classList.add('animated', 'fadeInUp');
    // });

    // btn.addEventListener('click', () => {
    //     cards.forEach(card => {
    //         card.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
    //         card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
    //     });
    //     // btn.style.display = 'none';
    //     btn.remove();
    // });

    // зробити так що коли сервер не відповідає відобразити це користувачеві на сторінку
    btn.addEventListener('click', function() {
        getResourse('assets/db.json')
            .then(res => createCards(res.styles))
            .catch(error => console.log(error));
            
        this.remove();
    });
    
    // ф-ція яка буде конструювати блоки з картинками і поміщати їх на сторінку
    // response - відповідь від серверу
    function createCards(response) {
        response.forEach(({src, title, link}) => {
            let card = document.createElement('div');

            card.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');

            card.innerHTML = `
                <div class="styles-block">
                    <img src=${src} alt="style">
                    <h4>${title}</h4>
                    <a href=${link}>Детальніше</a>
                </div>
            `;

            // поміщаєм на сторінку
            document.querySelector(wrapper).appendChild(card);
        });
    }


};

export default showMoreStyles;
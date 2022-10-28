import { getData } from "../services/requests";
// trigger - конопка
// styles - стилі які треба буле показати
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
    //     btn.remove();
    // });

    // постимо дані на сторінку через сервер (коли користувач буде натискати на кнопку 
    // в нас буде відправлятись запит на сервер і звідти приходитимуть блоки)

    const message = {
        failure: 'Щось пішло не так...'
    }; 

    btn.addEventListener('click', function () {
        getData('assets/db.json')
        // сервер повертає масив з обєктами і цей масив передаємо в ф-цію createCards
            .then(res => createCards(res.styles))
            .catch(error => {
                let card = document.createElement('div');
                card.classList.add('animated', 'fadeInUp', 'col-sm-4', 'col-sm-offset-4', 'col-xs-6', 'col-xs-offset-1');
                card.innerHTML = `
                    <div class="styles-block">
                        <h4>${message.failure}</h4>
                    </div>
                `;
                document.querySelector(wrapper).appendChild(card);
            }); //  вивести на сторінку повідомлення щощось пішло не так
        this.remove();
    });



    function createCards(response) {
        // беремо цей масив і перебираємо його
        response.forEach(({src, title, link}) => {
            let card = document.createElement('div');

            card.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');

            card.innerHTML = `
                <div class="styles-block">
                    <img src=${src} alt ="style">
                    <h4>${title}</h4>
                    <a href=${link}>Подробнее</a>
                </div>
            `;

            document.querySelector(wrapper).appendChild(card);
        });
    }
};

export default showMoreStyles;


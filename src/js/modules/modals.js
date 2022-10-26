const modals = () => {

    // 5. Створюєм змінну яка буде відповідати за те що вона слідкує чи була нажата хоч одна кнопка
    // по виклику модального вікна (для того щоб дізнатись чи була нажата хоч якась кнопка)
    let btnPressed;
    // ця змінна буде змінюватись коли користувач кліне на любу кнопку по виклику модального вікна

    // trigger - селектор нашої кнопки по якій ми будемо клікати
    // modal - модальне вікно яке ми будемо відкривати
    // close - селекор який закриває модальне вікно (хрестик)
    function bindModal(triggerSelector, modalSelector, closeSelector, gift = false) {

        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector),  
              windows = document.querySelectorAll('[data-modal]'),
              scroll = calcScroll();

    

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                
                // e.target - чи точно існує той елемент на який клікнув користувач
                if(e.target) {
                    e.preventDefault(); // відміняєм стандартну поведінку браузера
                }

                btnPressed = true; // користувач клікнув на кнопку (trigger)
                
                // берем всі модальні вікна які є і при відкритті нового модального вікна старі всі закриваються
                windows.forEach(item => {
                    item.style.display = 'none';
                    item.classList.add('animated', 'fadeIn');
                });

                // коли користувач нажимає на подарунок він пропадає зі сторінки
                if (gift) {
                    item.remove();
                }

                modal.style.display = "block";
                // блокуємо scroll сторінки при відкритті модального вікна
                document.body.style.overflow = "hidden";
                // document.body.classList.add('modal-open');
                document.body.style.marginRight = `${scroll}px`;
                document.querySelector('.fixed-gift').style.marginRight = `${scroll}px`;

    
            });
        });
        // закриття модального вікна при натисканні на хрестик
        close.addEventListener('click', () => {
            windows.forEach(item => {
                item.style.display = 'none';
            });

            modal.style.display = "none";
            document.body.style.overflow = "";
            // document.body.classList.remove('modal-open');
            document.body.style.marginRight = `0px`;
            document.querySelector('.fixed-gift').style.marginRight = `0px`;


        });

        // закриття модального вікна при натисканні на подложку
        modal.addEventListener('click', (e) => {
            if(e.target === modal) {
                windows.forEach(item => {
                    item.style.display = 'none';
                });
                modal.style.display = "none";
                document.body.style.overflow = "";
                // document.body.classList.remove('modal-open'); 
                document.body.style.marginRight = `0px`;
                document.querySelector('.fixed-gift').style.marginRight = `0px`;

            }
        });
    }

    
    
    // функція відкриття модального вікна через певний проміжок часу
    // selector - модальне вікно
    // time - час через який відкриється це модальне вікно
    function showModalByTime(selector, time) {
        setTimeout(function() {
            // якщо користувач вже відкрив модальне вікно тоді ця функція відміняється
            let d;

            document.querySelectorAll('[data-modal]').forEach(item => {
                if(getComputedStyle(item).display !== 'none') {
                    d = 'block';
                }
            });

            // якщо користувач не відкрив ні одного модального вікна, тоді ми його показуємо через певний проміжок часу
            if(!d) {
                document.querySelector(selector).style.display = "block";
                document.body.style.overflow = "hidden";
                let scroll = calcScroll();
                document.body.style.marginRight = `${scroll}px`;
                document.querySelector('.fixed-gift').style.marginRight = `${scroll}px`;
            }
        }, time);
    }

    function calcScroll() {
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }

    function openByScroll(selector) {
        window.addEventListener('scroll', () => {
            if(!btnPressed && (window.scrollY + document.documentElement.clientHeight >= 
                document.documentElement.scrollHeight)) {
                    document.querySelector(selector).click();
                }
        });
    }

    bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
    bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
    bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);
    openByScroll('.fixed-gift');
    // showModalByTime('.popup-consultation', 60000);
};

export default modals;

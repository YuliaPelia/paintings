
const modals = () => {

    let btnPressed;

    function bindModal(triggerSelector, modalSelector, closeSelector, gift = false) {

        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector),  
              windows = document.querySelectorAll('[data-modal]'),
              scroll = calcScroll();

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                
                if(e.target) {
                    e.preventDefault();
                }

                btnPressed = true; // користувач клікнув на кнопку
                
                windows.forEach(item => {
                    item.style.display = 'none';
                    item.classList.add('animated', 'fadeIn');
                });

                if (gift) {
                    item.remove();
                }

                modal.style.display = "block";
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

    
    
    // відкриття модального вікна через певний проміжок часу
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
                // робимо щоб сторінка не дьоргалась
                let scroll = calcScroll();
                document.body.style.marginRight = `${scroll}px`;
                // щоб подарунок не дьоргався
                document.querySelector('.fixed-gift').style.marginRight = `${scroll}px`;
            }
        }, time);
    }

    // створ функцію щоб модальне вікно не дьоргалось
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

    // selector - той елемент який необхідно показати коли виконається певна умова
    function openByScroll(selector) {
        // для того щоб оприділити скільки пікселів прогортав користувач зверху
        // необхідна подія scroll яка навішується на обєкт window
        window.addEventListener('scroll', () => {
            // якщо користувач не клікнув ні на одну кнопку і догортав до кінця
            // вираховуємо чи користувач дійсно догортав сторінку до кінця
            if(!btnPressed && (window.scrollY + document.documentElement.clientHeight >= 
                document.documentElement.scrollHeight)) {
                    // відкриваєм модальне вікно коли умова виконалась
                    document.querySelector(selector).click();
                }
        });
    }

    bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
    bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
    bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);
    openByScroll('.fixed-gift');
    showModalByTime('.popup-consultation', 60000);
};

export default modals;

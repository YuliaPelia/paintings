// slidersSelector - слайди які ми будемо переключати
// dir - сорона по якій буде рухатись слайдер вертикально/горизонтально
// prev/next - кнопкиуть слайдер
const sliders = (slidesSelector, dir, prev, next) => {
    // переший слайдер не містить кнопок prev та next
    let slideIndex = 1, // буде відображати теперішній слайд який показується користувачу
        poused = false; // буде розуміти чи потрібно в поточний момент зупинити переключення слайдів


    const items = document.querySelectorAll(slidesSelector);


    // 2. Створ ф-цію яка буде відповідати за переміщення slideIndex і слайдера
    // n - slideIndex і як він буде змінюватись
    function showSlides(n) {
        // якщо n буде більше к-сті слайдів яка є на сторінці, то ми будемо повертатися на початок
        if(n > items.length) {
            slideIndex = 1;
        } 

        // якщо n буде менше 1 то ми показуємо останній слайд який є
        if(n < 1) {
            slideIndex = items.length;
        }

        // зробити так щоб коли показується певний слайд ми приховуєм всі інші і показуєм саме той слайд який нам потрібен
        // приховує всі неактивні слайди
        items.forEach(item => {
            // для того щоб перегортування відбувалось плавно
            item.classList.add('animated');
            // приховуєм всі слайди
            item.style.display = 'none';
        });
        // показує перший слайд
        items[slideIndex - 1].style.display = 'block';
    }

    showSlides(slideIndex);

    // в цю функцію буде передаватись 1 або -1
    // ця функція буде викликатись коли користувач буде клікати на певні елементи (вперед або назад кнопки)
    function plusSlides(n) {
        // викликаєм функцію showSlides на 1 слайд більше або на 1 слайд менше
        showSlides(slideIndex += n);
    }

    // якщо селектори кнопок не були передані то цей блок коду не мпрацює і не зруйнує код
    try {
        const prevBtn = document.querySelector(prev),
              nextBtn = document.querySelector(next);

        // якщо кнопки є
        prevBtn.addEventListener('click', () => {
            plusSlides(-1);
            // добавляємо анімації при переключенні слайдів
            items[slideIndex - 1].classList.remove('slideInLeft');
            items[slideIndex - 1].classList.add('slideInRight');

        });

        nextBtn.addEventListener('click', () => {
            plusSlides(1);
            items[slideIndex - 1].classList.remove('slideInRight');
            items[slideIndex - 1].classList.add('slideInLeft');
        });
    } catch(e) {}

    // коли користувач наводить мишку на слайдер то ми відключаєм автоматичне прогортування слайдера
    function activateAnimation() {

        // якщо слайдер вертикальний та якщо горизонтальний
        if(dir === 'vertical') {
            poused = setInterval(function() {
                plusSlides(1);
                items[slideIndex - 1].classList.add('slideInDown');

            }, 3000);
        } else {
            poused = setInterval(function() {
                plusSlides(1);
                items[slideIndex - 1].classList.remove('slideInRight');
                items[slideIndex - 1].classList.add('slideInLeft');

            }, 3000);
        }
    }
    activateAnimation();

    items[0].parentNode.addEventListener('mouseenter', () => {
        clearInterval(poused);
    });

    items[0].parentNode.addEventListener('mouseleave', () => {
        activateAnimation();
    });
};

export default sliders;


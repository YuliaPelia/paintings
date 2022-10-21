// slides - селектор який буде відображати ті слайди які ми хочемо переключати
// dir - вказує в яку сторону буде рухатись наш слайдер
// prev/next - селектори які будуть відповідати за кнопки які переключають наш слайдер
const sliders = (slides, dir, prev, next) => {
    let slideIndex = 1, // слайд який показується користувачу
        poused = false;

    const items = document.querySelectorAll(slides);

          
    function showSlides(n) {
        if(n > items.length) {
            slideIndex = 1;
        }

        if(n < 1) {
            slideIndex = items.length;
        }

        items.forEach(item => {
            item.classList.add('animated');
            item.style.display = 'none';
        });

        items[slideIndex - 1].style.display = 'block';
    }      

    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);

    }

    try {
        const prevBtn = document.querySelector(prev),
              nextBtn = document.querySelector(next);

        prevBtn.addEventListener('click', () => {
            plusSlides(-1);
            items[slideIndex - 1].classList.remove('slideInLeft');
            items[slideIndex - 1].classList.add('slideInRight');

        });
        
        nextBtn.addEventListener('click', () => {
            plusSlides(1);
            items[slideIndex - 1].classList.remove('slideInRight');
            items[slideIndex - 1].classList.add('slideInLeft');
        });
    } catch(e) {}

    function activateAnimation() {
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
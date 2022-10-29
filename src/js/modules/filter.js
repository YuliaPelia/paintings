const filter = () => {
    const menu = document.querySelector('.portfolio-menu'),
          items = menu.querySelectorAll('li'),  
          wrapper = document.querySelector('.portfolio-wrapper'),
          markAll = wrapper.querySelectorAll('.all'),
          no = document.querySelector('.portfolio-no');
          

    // створюємо функцію яка буде відповідати за фільтрацію цих елементів 
    // markType - в цей аргумент будемо передавати колекцію певних елементів
    const typeFilter = (markType) => {
        // беремо всі елементи які розташовані в wrapper і приховуємо їх
        markAll.forEach(mark => {
            mark.style.display = 'none';
            mark.classList.remove('animated', 'fadeIn');
        });

        no.style.display = 'none';
        no.classList.remove('animated', 'fadeIn');

        // якщо в аргумент markType хоть щось було передано
        if(markType) {
            markType.forEach(mark => {
                mark.style.display = 'block';
                mark.classList.add('animated', 'fadeIn');
            });
        } else {
            no.style.display = 'block';
            no.classList.add('animated', 'fadeIn');
        }
    };

    function clickBtn (btn, elem) {
        const btnSelect = menu.querySelector(btn);
        const elemSelect = wrapper.querySelectorAll(elem);
        btnSelect.addEventListener('click', () => {
            typeFilter(elemSelect);
        });
    }

    function clickBtnGrand (btn, elem) {
        const btnSelect = menu.querySelector(btn);
        const elemSelect = wrapper.querySelector(elem);
        btnSelect.addEventListener('click', () => {
            typeFilter(elemSelect);
        });
    }

    clickBtn('.all', '.all');
    clickBtn('.lovers', '.lovers');
    clickBtn('.chef', '.chef');
    clickBtn('.girl', '.girl');
    clickBtn('.guy', '.guy');
    clickBtnGrand('.grandmother');
    clickBtnGrand('.granddad');


    menu.addEventListener('click', (e) => {
        let target = e.target;
        // перевіряєм чи цей таргет існує
        if(target && target.tagName == "LI") {
            items.forEach(btn => btn.classList.remove('active'));
            target.classList.add('active');
        } 
    });
};

export default filter;
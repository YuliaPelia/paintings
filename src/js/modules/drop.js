const drop = () => {
    // Є 8 подій повязаниї з пересуванням (прогуглити)
    // ці події використовуються при drag and drop функціональностях
    // відмічені * події спрацьовують на елементі який ми перетягуєм (це не наш випадок, 
    // тому що ми будемо перетягувати файли з нашої файлової системи,
    // щоб працювати з певними DOM - елементами на сторінці)
    // drag *
    // dragend *
    // dragenter - ця подія виникає тоді, коли перетягуваний об'єкт перетягується над dropArea(любий елемент який сприймає цю подію)
    // dragexit *
    // dragleave - об'єкт який перетягується перетягнули за межі dropArea
    // dragover - об'єкт зависає над dropArea і рухається в його межах
    // dragstart *
    // drop - виникає тоді, коли користувач відпустив кнопку миші і перетягуваний обєкт впав в dropArea

    const fileInputs = document.querySelectorAll('[name="upload"]');
    // формуємо масив подій і перебираємо його
    ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, preventDefault, false);

        });
    });

    function preventDefault(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    function highlight(item) {
        item.closest('.file_upload').style.border = "5px solid yellow";
        item.closest('.file_upload').style.backgroundColor = "rgba(0,0,0, .7";
    }

    function unhighlight(item) {
        item.closest('.file_upload').style.border = "none";

        if(item.closest('.calc_form')) {
            item.closest('.file_upload').style.backgroundColor = "#fff";
        } else {
            item.closest('.file_upload').style.backgroundColor = "#ededed";
        }

    }

    ['dragenter', 'dragover'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => highlight(input), false);

        });
    });

    ['dragleave', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => unhighlight(input), false);

        });
    });

    fileInputs.forEach(input => {
        input.addEventListener('drop', (e) => {
            input.files = e.dataTransfer.files;
            let dots;
            // уомва на перевірку назви довжини зображення
            const arr =input.files[0].name.split('.');
            arr[0].length > 6 ? dots = "..." : dots = '.';
            const name = arr[0].substring(0, 6) + dots + arr[1];
            input.previousElementSibling.textContent = name;
        });
    });
};

export default drop;
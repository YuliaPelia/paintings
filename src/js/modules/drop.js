const drop = () => {
    const fileInputs = document.querySelectorAll('[name="upload"]');

    ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, preventDefaults, false);
        });
    });

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation(); // зупиняєм спливання
        // добавляєм індикатор який дозволить користувачу розуміти що він може перетягнути зображення над потрібною областю
        // створюємо 2 ф-ції 
    }
    function highlight(item) {
        item.closest('.file_upload').style.border = "5px solid yellow";
        item.closest('.file_upload').style.backgroundColor = "rgba(0,0,0, .7)";
    }
    // робимо зворотню функцію, коли в буде виконуватись певна подія будемо забирати цю мітку (що в першій ф-ції)
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
            input.addEventListener(eventName, () => unhighlight(input), false);;
        });
    });

    fileInputs.forEach(input => {
        input.addEventListener('drop', (e) => {
            input.files = e.dataTransfer.files;

            let dots;
            const filesName = input.files[0].name.split('.');
            filesName[0].length > 5 ? dots = '...' : dots = '.';
            const name = filesName[0].substring(0, 6) + dots + filesName[1];
            input.previousElementSibling.textContent = name;
        });
    });
};

export default drop;
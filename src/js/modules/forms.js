import { postData } from "../services/requests";

const forms = () => {
    // зробити дві змінні
    // 1 - це всі форми які є на сторінці 
    // 2 - всі input які є в цих формах
    // потрібно буде навішати один і той самий обробиник події на всі одинакові форми
    const form = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input'),
          upload = document.querySelectorAll('[name="upload"]');

    // checkNumImputs('input[name="user_phone"]');

    
    const message = {
        loading: 'Завантаження...',
        success: 'Дякую! Скоро ми з вами звяжемся',
        failure: 'Щось пішло не так...',
        spiner: 'assets/img/spinner.gif',
        ok: 'assets/img/ok.png',
        fail: 'assets/img/fail.png'
    };

    // створ змінна в якій будуть знаходитися шляхи по яким будуть розміщуватися наші дані
    const path = {
        designer: 'assets/server.php',
        question: 'assets/question.php'
    };



    // очищення інпутів
    const clearInputs = () => {
        inputs.forEach(i => {
            i.value = '';
        });
        // очищаєм назву зображення з форми після її відправки
        upload.forEach(i => {
            i.previousElementSibling.textContent = "Файл не вибраний";
        });
    };

    // перебираєм всі інпути з назвою upload
    upload.forEach(i => {
        i.addEventListener('input', () => {
            console.log(i.files[0]);
            // якщо зображення яке загружає користувач більше 6 симфолів воно буде скорочуватись і ставитись ...
            let dots;
            const filesName = i.files[0].name.split('.');
            filesName[0].length > 5 ? dots = '...' : dots = '.';
            const name = filesName[0].substring(0, 6) + dots + filesName[1];
            i.previousElementSibling.textContent = name;
        });
    });

    form.forEach(i => {
        i.addEventListener('submit', (e) => {
            e.preventDefault();



            // створюємо змінну яка буде поміщати на сторінку статуси завантаження
            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            statusMessage.style.textAlign = 'center';
            // поміщаєм цей блок на сторінку
            i.parentNode.appendChild(statusMessage); // поміщаєм цей блок в кінець нашої форми
            
            // робимо форму прозорую
            i.classList.add('animated', 'fadeOutUp');
            // після того як форма стала прозорою вона пропаде зі сторінки
            setTimeout(() => {
                i.style.display = 'none';
            }, 400);

            // відображення статусу на сторінці
            let statusImg = document.createElement('img');
            statusImg.setAttribute('src', message.spiner);
            statusImg.classList.add('animated', 'fadeInUp');
            // поміщаємо блок на сторінку
            statusMessage.appendChild(statusImg);

            // добавляєм текстове повідомлення статусу завантаження
            let textMessage = document.createElement('div');
            textMessage.textContent = message.loading;
            statusMessage.appendChild(textMessage);




            const formData = new FormData(i); // цей обєкт найде всі інпути збере всі ці дані в спеціальну структуру,
            // яку ми помістимо в змінну formData

            // створюєм змінну для того щоб сформувати динамічний шлях куда ми будемо все це відправляти
            let api;
            // створюжсо умова що якщо форма буде вміщати цей клас тоді ми будемо відправляти дані на сервер
            i.closest('.popup-design') || i.classList.contains('calc_form') ? api = path.designer : api = path.question;
            console.log(api);

            // коли formData буду повністю сформована ми її відправляємо
            // відправляємо тіло запиту на сервер
            postData(api, formData)
                .then(res => {
                    console.log(res);
                    statusImg.setAttribute('src', message.ok);
                    textMessage.textContent = message.success;
                })
                .catch(() => {
                    statusImg.setAttribute('src', message.fail);
                    textMessage.textContent = message.failure;
                })
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                        i.style.display = 'block';
                        i.classList.remove('fadeOutUp');
                        i.classList.add('fadeInUp');
                    }, 5000);
                });
        });
    });



};

export default forms;
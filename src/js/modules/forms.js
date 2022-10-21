
const forms = () => {

    const form = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input'),
          upload = document.querySelectorAll('[name="upload"]');


    // checkNumImputs('input[name="user_phone"]');

    
    const message = {
        loading: 'Завантаження...',
        success: 'Дякую! Скоро ми з вами звяжемся',
        failure: 'Щось пішло не так...',
        spiner: 'assets/img/spiner.gif',
        ok: 'assets/img/ok.png',
        fail: 'assets/img/fail.png'
    };

    // створюємо змінну в якій розмістимо шляхи по яких будуть відправлятися дані
    const path = {
        designer: 'assets/server.php',
        question: 'assets/question.php'
    };

    const postData = async (url, data) => {
        let res = await fetch(url, {
            method: "POST",
            body: data
        });

        return await res.text();
    };

    const clearInputs = () => {
        inputs.forEach(i => {
            i.value = '';
        });
        upload.forEach(i => {
            i.previousElementSibling.textContent = "Файл не вибраний";
        })
    };

    upload.forEach(item => {
        item.addEventListener('input', () => {
            console.log(item.files[0]);
            let dots;
            // уомва на перевірку назви довжини зображення
            const arr = item.files[0].name.split('.');
            arr[0].length > 6 ? dots = "..." : dots = '.';
            const name = arr[0].substring(0, 6) + dots + arr[1];
            item.previousElementSibling.textContent = name;
        });
    });

    form.forEach(i => {
        i.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            i.parentNode.appendChild(statusMessage); 

            i.classList.add('animated', 'fadeOutUp'); // анімації
            setTimeout(() => {
                i.style.display = 'none';
            }, 400);

            // відображення статуса
            let statusImg = document.createElement('img');
            statusImg.setAttribute('src', message.spiner);
            statusImg.classList.add('animated', 'fadeInUp');
            statusMessage.appendChild(statusImg);
            // добавляєм текстове повідомлення 
            let textMessage = document.createElement('div');
            textMessage.textContent = message.loading;
            statusMessage.appendChild(textMessage);

            const formData = new FormData(i); 
            let api;
            i.closest('.popup-design') || i.classList.contains('calc_form') ? api = path.designer : api = path.question;
            console.log(api);


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
                    }, 3000);
                });
        });
    });



};

export default forms;
const mask = (selector) => {

    let setCursorPosition = (pos, elem) => {
        elem.focus();

        if(elem.setSelectionRange) {
            elem.setSelectionRange(pos, pos);
        } else if (elem.createTextRange) {
            let range = elem.createTextRange();

            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
    };

    function createMask(e) {
        // створюємо матрицю на яку будемо орієнтуватись при створенні маски

        let matrix = '+38 (0__) ___ __ __', 
            i = 0,
            // статичне значення працює на основі матриці
            def = matrix.replace(/\D/g, ''), // получаєм всі не цифри які є
            val = this.value.replace(/\D/g, ''); // динамічне значення працює на основі того що ввів користувач
    
        // прописуєм умову що якщо к-сть цифр яка залишиться в матриці після дії по видаленню всіх не цифр всередині(def)
        // якщо воно буде більше або рівне к-сті цифр які будуть в value, тоді це значення потрібно буде замінити на стандартне 
        // коли користувач щось вводить в матрицю і починає видаляти +380 то ми йому цього зробити не дамо,
        // тому що при видаленні 380 val.length буде менше ніж def.length
        if(def.length >= val.length) {
            val = def;
        }

            
        //перебираємо всі симфоли що знаходяться в матриці і при заповненні матриці цифрами ми будемо видаляти __ і підставляти замість них цифри
        // /./ - кожний елемент який існує в рядку
        // a - кожен символ який буде перебиратись всередині матриці
        this.value = matrix.replace(/./g, function(a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
        });

        // користувач перестав щось вводити
        if(e.type === 'blur') {
            // якщо к-сть символів в інпуті буде = 2, тоді ми очистимо інпут
            if(this.value.length == 4) {
                this.value = '';
            }
        } else {
            // setCursorPosition() - встановлює позицію курсору
            setCursorPosition(this.value.length, this);
        }
    }

    let inputs = document.querySelectorAll(selector);

    inputs.forEach(input => {
        input.addEventListener('input', createMask);
        input.addEventListener('focus', createMask);
        input.addEventListener('blur', createMask);

    });
};

export default mask;


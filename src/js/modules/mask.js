const mask = (selector) => {

    let setCursorPosition = (pos, elem) => {
        elem.focus();

        if(elem.setSelectionRange) {
            elem.setSelectionRange(pos, pos);
        } else if(elem.createTextRange) {
            let range = elem.createTextRange();

            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
    };

    function createMask(e) {
        let matrix = '+38 (0__) ___ __ __',
            i = 0,
            def = matrix.replace(/\D/g, ""), // статичне працює на основі матриці
            val = this.value.replace(/\D/g, ""); // динамічне працює на основі того що ввів користувач

        if (def.length >= val.length) {
            val = def;
        }    

        this.value = matrix.replace(/./g, function(a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a;
        }); // проходимся по всіх елементах які є в рядку

        if(e.type === 'blur') {
            if (this.value.length == 2) {
                this.value = "";
            }
        } else {
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
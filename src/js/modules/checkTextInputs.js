const checkTextInputs = (selector) => {
    const txtInputs = document.querySelectorAll(selector);

    txtInputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if(e.key.match(/[^а-яіїє 0-9]/ig)) {
                e.preventDefault();
            }
        });
    });
};

export default checkTextInputs;


// зробити так щоб коли користувач вибирав з автозаповнення англ букви вони не заповнювались
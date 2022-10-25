const calc = (size, material, options, promocode, result) => {
    const sizeBlock = document.querySelector(size),
          materialBlock = document.querySelector(material),
          optionsBlock = document.querySelector(options),
          promocodeBlock = document.querySelector(promocode),
          resultBlock = document.querySelector(result);

    // створюєм змінну яка буде відповідати за суму (її ми будемо поміщати на сторінку)      
    let sum = 0;      

    // на ці 4 блоки які ми получили навішуємо подію change а в promocodeBlock будумо вводити input
    // створ ф-цію яка буде спрацьова=увати при виборі елемента користувачем
    const calcFunc = () => {
        // 1) підраховуємо суму
        // беремо суму від вибору розміру картинки і множимо на той коеф при виборі матеріалу і додоати додаткові послуги
        sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));

        if(sizeBlock.value == '' || materialBlock.value == '') {
            resultBlock.textContent = "Будь ласка, виберіть розмір і матеріал картини";

        } else if (promocodeBlock.value === 'IWANTPOPART') {
            resultBlock.textContent = Math.round(sum * 0.7);
        } else {
            resultBlock.textContent = sum;
        }
    };

    sizeBlock.addEventListener('change', calcFunc);
    materialBlock.addEventListener('change', calcFunc);
    optionsBlock.addEventListener('change', calcFunc);
    promocodeBlock.addEventListener('input', calcFunc);


};

export default calc;
const pictureSize = (imgSelector) => {
    const blocks = document.querySelectorAll(imgSelector);

    //  на кожного з блоків навішуємо подію
    // 1 подія - це коли наша курсор находиться над блоком (mouseover), показуємл потрібну картинку і приховуєм ті елементи що зараз знаходяться в верстці
    // 2 подія - це коли курсор виходить за межи блока (mouseout)

    // створюєм 2 ф-ції
    // перша буде показувати зображення, а друга - приховувати
    function showImg(block) {
        const img = block.querySelector('img');
        // замінюєм картинку
        img.src = img.src.slice(0, -4) + '-1.png';
        // приховуєм лишні параграфи
        // p:not(.sizes-hit) - вибираєм всі параграфи крім .sizes-hit
        block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
            p.style.display = 'none';
        });
    }

    // створ ф-цію яка буде приховувати зображення коли ф-ція буде виходити за межі блоку
    function hideImg(block) {
        const img = block.querySelector('img');
        // замінюєм картинку
        img.src = img.src.slice(0, -6) + '.png';
        // приховуєм лишні параграфи
        // p:not(.sizes-hit) - вибираєм всі параграфи крім .sizes-hit
        block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
            p.style.display = 'block';
        });
    }

    blocks.forEach(block => {
        block.addEventListener('mouseover', () => {
            showImg(block);
        });
        block.addEventListener('mouseout', () => {
            hideImg(block);
        });
    });
};

export default pictureSize;
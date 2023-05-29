
const toLevel = (number) => {

    if (number >= 90) {
        return '甲';
    }
    if (number >= 80) {
        return '乙';
    }

    if (number >= 70) {
        return '丙';
    }
    if (number >= 60) {
        return '丁';
    }
    if (number < 60) {
        return '不及格';
    }
}








const calcLevel = () => {
    let number = document.querySelector('#number');

    if (!number) {
        alert('沒有輸入框');
        return;
    }

    if (!number.value) {
        alert('請輸入分數');
        return
    }

    let response = document.querySelector('#response');
    response.innerHTML = `你的等級為 ${toLevel(number.value)}`;
    number.value = '';
    number.focus();
}


let level = document.querySelector('#level');

level.addEventListener('click', calcLevel);


let number = document.querySelector('#number');

// name.addEventListener('change', () => {
//     if (!name.value) {
//         alert('請輸入姓名');
//         name.focus();
//     }
// })

// name.addEventListener('blur', () => {
//     console.log(`blur: ${name.value}`);
// })

// name.addEventListener('keypress', () => {
//     console.log(`keypress: ${name.value}`);
// })

number.addEventListener('keyup', (e) => {
    if (e.key == 'Enter') {
        calcLevel();
    }
})
const genTable = () => {
    let n1 = document.querySelector('#n1');
    let n2 = document.querySelector('#n2');

    if (!n1) {
        return;
    }

    if (n1.value <= 0) {
        return;
    }

    if (!n2) {
        return;
    }

    if (n2.value <= 0) {
        return;
    }

    let result = [];
    for (let i = 1; i <= n1.value; i++) {
        for (let j = 1; j <= n2.value; j++) {
            result.push(`${i} x ${j} = ${i * j}`);
        }
    }

    console.log(result);


}


let make = document.querySelector('#make');

make.addEventListener('click', genTable);

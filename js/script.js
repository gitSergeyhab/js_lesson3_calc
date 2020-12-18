const rub = document.querySelector('#rub');
const usd = document.querySelector('#usd');
console.log(rub);
rub.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    request.addEventListener('load', () => {
        if (request.status === 200) {
            const usdvalue = +rub.value / JSON.parse(request.response).current.usd;
            usd.value = usdvalue.toFixed(2);
        } else {
            usd.value = 'something wrong';
        }
    })  

    // request.addEventListener('readystatechange', () => {
    //     if (request.readyState === 4 && request.status === 200) {
    //         const usdvalue = +rub.value / JSON.parse(request.response).current.usd;
    //         usd.value = usdvalue;
    //     }
    // })    
})
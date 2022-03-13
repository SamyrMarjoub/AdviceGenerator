const advice = document.querySelector('.advice')
const number = document.querySelector('.number')
const dado = document.querySelector('.dado')
const img = document.querySelector('.img-svg')

advice.innerHTML = 'Loading...'
number.innerHTML = '#XXX'
img.style.animation = 'spin 3s ease'
setTimeout(function () {
    var requestURL = 'https://api.adviceslip.com/advice';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function () {
        var advices = request.response;
        advice.innerHTML = `"${advices.slip.advice}"`
        number.innerHTML = `#${advices.slip.id}"`
    }
    img.style.animation = 'none'
}, 3000)
dado.addEventListener('click', function () {
    img.style.animation = 'spin 3s ease'
    setTimeout(function () {
        var requestURL = 'https://api.adviceslip.com/advice';
        var request = new XMLHttpRequest();
        request.open('GET', requestURL);
        request.responseType = 'json';
        request.send();

        request.onload = function () {
            var advices = request.response;
            console.log(advices.slip.id)
            advice.innerHTML = `"${advices.slip.advice}"`
            number.innerHTML = `#${advices.slip.id}`
        }

    }, 2600)
    setTimeout(function () {
        img.style.animation = 'none'
    }, 3000)
})
function timer() {
    //----------------------------------
    // Реализация таймера
    //----------------------------------
    let deadline = "2024-07-26";

    // Получаем оставшееся время и записываем данные в функцию
    function  getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),  //Дата дедлайна - текущая дата
            seconds = Math.floor((t/1000) % 60),  //Math.floor - округление, t/1000 % 60 - получение секунд
            minutes = Math.floor((t/1000/60) % 60), // - Получение минут
            hours = Math.floor((t/(1000*60*60)) % 60), //  - Получение часов
            days = Math.floor(((t/1000/60/60) % 24)); // - получение дней

        return {
            "total" : t,
            "hours" : hours,
            "minutes" : minutes,
            "seconds" : seconds
        };
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return "0" + num
        } else {
            return num
        }
    }

    //Получаем элементы на странице и запускаем функцию каждые 1000мс
    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector(".hours"),
            minutes = timer.querySelector(".minutes"),
            seconds = timer.querySelector(".seconds"),
            timeInterval = setInterval(updateClock, 1000)


        //Получаем данные из функции и обновляем информация на сайте
        function updateClock() {
            let t = getTimeRemaining(endtime);

            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);


            if (t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }

    }

    setClock("timer", deadline)
}
module.exports = timer;
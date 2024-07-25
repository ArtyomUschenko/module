function tabs() {
    //----------------------------------
    //Реализация табов.
    //----------------------------------

    let tab = document.querySelectorAll(".info-header-tab"), // Получаем все табы-кнопки
        info = document.querySelector(".info-header"), //Получаем родителя с табами-кнопками
        tabContent = document.querySelectorAll(".info-tabcontent"), //Получаем весь таб-контент
        btntab = document.querySelectorAll(".description-btn");


    // Цикл, который проходит по табам с индексом от 1 до 4 и меняет классы.
    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove("show");
            tabContent[i].classList.add("hide");
            //btntab[i].addEventListener("click", modalWindow);  // активируем кнопку на открытие модального окна
        }
    }
    hideTabContent(1); // Передаем 1, чтоб таб с индексом 0 отображался на странице
    //btntab[0].addEventListener("click", modalWindow); // Активируем кнопку с модальным окном на 0 табе

    // Передаем индекс таба, чтоб сменить класс
    function showTabContent(b) {
        if (tabContent[b].classList.contains("hide")) {
            tabContent[b].classList.remove("hide");
            tabContent[b].classList.add("show");
        }
    }

    info.addEventListener("click", function (event) {
        let target = event.target;
        if (target && target.classList.contains("info-header-tab")) {
            for(let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0); // Скрываем 0 таб, который отображается по умолчанию
                    showTabContent(i); //Отображаем таб
                    break;
                }
            }
        }
    });
}

module.exports = tabs;
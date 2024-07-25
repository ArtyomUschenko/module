function modal() {
    //----------------------------------
    // Реализация модального окна (Modal)
    //----------------------------------
    let more = document.querySelector(".more"),   //Кнопка вызова модального окна
        overlay = document.querySelector(".overlay"), //Форма модального окна
        close = document.querySelector(".popup-close"), // Кнопка "X" закрытия модального окна
        btntab = document.querySelectorAll(".description-btn"),
        tabContent = document.querySelectorAll(".info-tabcontent"); //Получаем весь таб-контент


    function modalWindow(event) {
        overlay.style.display = "block";
        this.classList.add("more-splash"); //Анимация кнопки
        document.body.style.overflow = "hidden"; //Запрещаем прокрутку страницы
    }

    more.addEventListener("click", modalWindow);

    // Активируем кнопку на открытие модального окна
    function activeBtnTab(a) {
        for (let i = a; i < tabContent.length; i++) {
            btntab[i].addEventListener("click", modalWindow);
        }
    }
    activeBtnTab(0)

    //Закрываем модальное окно
    close.addEventListener("click", function () {
        overlay.style.display = "none";
        more.classList.remove("more-splash"); //Анимация кнопки
        document.body.style.overflow = ""; //Снимаем ограничение на прокрутку страницы
    });

}

module.exports = modal;


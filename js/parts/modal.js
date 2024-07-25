function modal() {
    //----------------------------------
    // Реализация модального окна (Modal)
    //----------------------------------
    let more = document.querySelector(".more"),   //Кнопка вызова модального окна
        overlay = document.querySelector(".overlay"), //Форма модального окна
        close = document.querySelector(".popup-close"); // Кнопка "X" закрытия модального окна


    function modalWindow(event) {
        overlay.style.display = "block";
        this.classList.add("more-splash"); //Анимация кнопки
        document.body.style.overflow = "hidden"; //Запрещаем прокрутку страницы
    }

    more.addEventListener("click", modalWindow);

    //Закрываем модальное окно
    close.addEventListener("click", function () {
        overlay.style.display = "none";
        more.classList.remove("more-splash"); //Анимация кнопки
        document.body.style.overflow = ""; //Снимаем ограничение на прокрутку страницы
    });
}

module.exports = modal;
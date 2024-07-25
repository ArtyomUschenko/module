function slider() {
    //----------------------------------
// Реализация слайдера (Slider)
//----------------------------------

    let slideIndex = 3,  // Какой слайд показываем по умолчанию
        slides = document.querySelectorAll(".slider-item"),
        prev = document.querySelector(".prev"),
        next = document.querySelector(".next"),
        dotsWrap = document.querySelector(".slider-dots"),
        dots = document.querySelectorAll(".dot");

    showSlides(slideIndex)
    function showSlides(n) {
        //Если закончились слайды, то мы возвращаемся на 1
        if (n > slides.length) {
            slideIndex = 1;
        }
        //Если мы крутим слайдер в обратную сторону, то отображается последний слайд
        if(n < 1) {{
            slideIndex = slides.length;
        }}


        slides.forEach((item) => item.style.display = "none");  //Перебираем и скрываем все слайды
        dots.forEach((item) => item.classList.remove("dot-active")); //Перебираем и скрываем точки

        slides[slideIndex-1].style.display = "block"; // Отображаем слайд по умолчанию
        dots[slideIndex-1].classList.add("dot-active"); // Отображаем точку по умолчанию
    }
    function  plusSlider(n) {
        showSlides(slideIndex += n)
    }
    function currentSlider(n) {
        showSlides(slideIndex = n);
    }
    //Реализация кнопки на слайдере назад
    prev.addEventListener("click", function () {
        plusSlider(-1);
    });
    //Реализация кнопки на слайдере вперед
    next.addEventListener("click", function () {
        plusSlider(1);
    });

    dotsWrap.addEventListener('click', function (event) {
        //Делегирование
        //Запускаем цикл на 1 раз больше
        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains("dot") && event.target == dots[i-1]) {
                currentSlider(i)
            }
        }
    })
}

module.exports = slider;
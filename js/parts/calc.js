function calc() {
    //----------------------------------
    // Реализация калькулятора (calc)
    //----------------------------------
    let persons = document.querySelectorAll(".counter-block-input")[0],
        restDays = document.querySelectorAll(".counter-block-input")[1],
        place = document.getElementById("select"),
        totalValue = document.getElementById("total"),
        personsSum = 0,
        daysSum = 0,
        total = 0,
        sum = 0;

    totalValue.innerHTML = 0;

    persons.addEventListener("change", function () {
        personsSum = +this.value; //Получаем что ввел пользователь в поле с количеством человек
        total = (daysSum + personsSum)*4000;

        //Проверяем заполнено ли поле количество дней, если нет, то сумму не меняем
        if(restDays.value =="" || persons.value =="" ) {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;

        }
    });

    restDays.addEventListener("change", function () {
        daysSum = +this.value; //Получаем что ввел пользователь в поле с днями
        total = (daysSum + personsSum)*4000;

        if(persons.value =="" || restDays.value =="") {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;

        }
    });
    place.addEventListener("change", function (){
        if (restDays.value =="" || persons.value =="") {
            totalValue.innerHTML = 0;
        } else {
            let a = total; //Исправление бага чтоб выбор не увеличивал постоянно значения
            totalValue.innerHTML = a * this.options[this.selectedIndex].value;  //Получаем определенный value от элемента
        }
    })

}

module.exports = calc;
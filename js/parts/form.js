function form() {
    //----------------------------------
    // Реализация формы (Form)
    //----------------------------------
    let message = {
        loading: "Загрузка...",
        success: "Спасибо! Скоро мы с вами свяжемся!",
        failure: "Что-то пошло не так..."
    };

    let form = document.querySelector(".main-form"),
        contactForm = document.querySelector("#form"),
        input = form.getElementsByTagName("input"),
        statusMassage = document.createElement("div"); //Создаем новый элемент div, где будем размещать статус отправки формы

    statusMassage.classList.add("status");

    //----------------------------------------------------
    //ВАЖНО! Отслеживаем, когда форма отправляет на сервер, а не кнопка. (Форма контактов и модального окна)

    function sendForm(elem) {
        elem.addEventListener("submit", function (event) {
            event.preventDefault(); //Отменяем стандартное поведение браузера
            elem.appendChild(statusMassage); //Вставляем в конец формы наш элемент div

            let formData = new FormData(elem); //Получаем данные из формы

            function postData(data) {
                return new Promise(function (resolve, reject) {
                    let request = new XMLHttpRequest(); //Создаем объект через который будем выполнять HTTP-запросы

                    request.open("POST", "server.php"); //Инициализируем запрос на сервер

                    request.setRequestHeader('Content-type', 'application/json; charset=utf-8'); //Указываем заголовок HTTP-запроса. Указываем на JSON

                    //Перебираем массив через forEach и заполняем список для дальнейшего формирования JSON
                    let obj = {};
                    formData.forEach( function (value, key) {
                        obj[key] = value;
                    })
                    //Преобразуем в JSON формат
                    let json = JSON.stringify(obj);

                    request.onreadystatechange = function () {
                        //Отслеживаем загрузку, т.к. 4 статус DONE
                        if (request.readyState < 4 ) {
                            resolve()
                        } else if (request.status === 4) {
                            if (request.status === 200 && request.status < 300) {
                                resolve()
                            }
                            else {
                                reject()
                            }
                        }
                    }
                    request.send(json); // Отправляем данные в формате JSON
                })
            } // End postData
            // Очищаем форму (все input) от введенных значений
            function clearInput(){
                for (let i = 0; i < input.length; i++) {
                    input[i].value = '';
                }
            }

            postData(formData)
                .then(() => statusMassage.innerHTML = message.loading)//при первом положительном ответе мы выводим message.loading
                .then(() => statusMassage.innerHTML = message.success)//при первом положительном ответе мы выводим message.loading
                .catch(() => statusMassage.innerHTML = message.failure)
                .then(clearInput)
        });
    }
    sendForm(form);
    sendForm(contactForm);
}
module.exports = form;
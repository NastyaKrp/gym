// Получаем ссылку на кнопку "Открыть окно"
var openModalBtn = document.getElementById("open-modal");

// Получаем ссылку на всплывающее окно
var modal = document.getElementById("myModal");

// Получаем ссылку на элемент закрытия окна
var closeBtn = document.getElementsByClassName("close")[0];

// Когда пользователь кликает на кнопку, открываем окно
openModalBtn.onclick = function() {
    modal.style.display = "block";
}

// Когда пользователь кликает на крестик (x), закрываем окно
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Когда пользователь кликает вне окна, закрываем его
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

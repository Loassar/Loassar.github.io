// Инициализируем переменные
const sections = document.querySelectorAll("section");
const tabs = document.querySelectorAll("a");

// Обрабатываем событие нажатия на вкладку
tabs.forEach((tab) => {
  tab.addEventListener("click", (event) => {
    // Получаем индекс выбранной вкладки
    const index = tabs.indexOf(event.target);

    // Скролим страницу к соответствующему блоку
    sections[index].scrollIntoView({
      behavior: "smooth",
    });
  });
});

//---------------------------------------------------------------------------------------
// window
//---------------------------------------------------------------------------------------

// window.open
// Cинтаксис открытия нового окна: window.open(url, name, params):
// - url - URL для загрузки в новом окне.
// - name - Имя нового окна. 
// - params - Строка параметров для нового окна.

//  Параметры в строке params:
//    - Позиция окна:
//        left/top (числа) – координаты верхнего левого угла нового окна на экране. Существует ограничение: новое окно не может быть позиционировано вне видимой области экрана.
//        width/height (числа) – ширина и высота нового окна. Существуют ограничения на минимальную высоту и ширину, которые делают невозможным создание невидимого окна.
//    - Панели окна:
//        menubar (yes/no) – позволяет отобразить или скрыть меню браузера в новом окне.
//        toolbar (yes/no) – позволяет отобразить или скрыть панель навигации браузера (кнопки вперёд, назад, перезагрузки страницы) нового окна.
//        location (yes/no) – позволяет отобразить или скрыть адресную строку нового окна. Firefox и IE не позволяют скрывать эту панель по умолчанию.
//        status (yes/no) – позволяет отобразить или  скрыть строку состояния. Как и с адресной строкой, большинство браузеров будут принудительно показывать её.
//        resizable (yes/no) – позволяет отключить возможность изменения размера нового окна. Не рекомендуется.
//        scrollbars (yes/no) – позволяет отключить полосы прокрутки для нового окна. Не рекомендуется.

const getButtonOneElementForOpenNewWindow = document.querySelector(".openNewWindowBtnOneClass");

getButtonOneElementForOpenNewWindow.addEventListener('click', () => {
  window.open("/", "new window", `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
  width=0,height=0,left=-1000,top=-1000`);
});

// Вызов open возвращает ссылку на новое окно. Эта ссылка может быть использована для управления свойствами окна, например, изменения положения и др.

const getButtonTwoElementForOpenNewWindow = document.querySelector(".openNewWindowBtnTwoClass");

getButtonTwoElementForOpenNewWindow.addEventListener('click', () => {

  const createNewWindow = window.open("about:blank", "New Window", "width=200,height=200");

  createNewWindow.document.write("Hello, world! <input type=button class=\"btnClass\"  value=\"Закрыть окно\">");

  console.log("createNewWindow.closed : ", createNewWindow.closed) // Для проверки, закрыто ли окно: win.closed.

  createNewWindow.onload = () => { // окно загружено полностью
    createNewWindow.close();   // Чтобы закрыть окно: win.close()
  }
});

// Методы для передвижения и изменения размеров окна:

const getButtonThreeElementForOpenNewWindow = document.querySelector(".openNewWindowBtnThreeClass");

getButtonThreeElementForOpenNewWindow.addEventListener("click", () => {
  const createNewWindow = window.open("/", "size window", "width=200,height=200");
  createNewWindow.moveTo(100, 100); // Переместить окно относительно текущей позиции на x пикселей вправо и y пикселей вниз. Допустимы отрицательные значения (для перемещения окна влево и вверх).
  createNewWindow.moveBy(400, 200); // Переместить окно на координаты экрана (x,y).
  createNewWindow.resizeBy(500, 400); // Изменить размер окна на указанные значения width/height относительно текущего размера. Допустимы отрицательные значения.
  createNewWindow.resizeTo(300, 300); // Изменить размер окна до указанных значений. 

  // событие window.onresize.
  createNewWindow.onresize = () => {
    console.log("onresize event", [createNewWindow.outerWidth, createNewWindow.outerHeight]);
  }
});

// Прокрутка окна

const getButtonFourElementForOpenNewWindow = document.querySelector(".openNewWindowBtnFourClass");

getButtonFourElementForOpenNewWindow.addEventListener("click", () => {
  const createNewWindow = window.open("/", "scroll window", "width=200,height=200");
  createNewWindow.document.write("Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text");
  createNewWindow.scrollBy(400, 300); // Прокрутить окно на x пикселей вправо и y пикселей вниз относительно текущей прокрутки. Допустимы отрицательные значения.
  createNewWindow.scrollTo(700, 700); // Прокрутить окно до заданных координат (x,y).

  // событие window.onscroll.
  createNewWindow.onscroll = () => {
    console.log("onscroll event", [createNewWindow.scrollX, createNewWindow.scrollY]);
  }
});

// Установка и потеря фокуса
// установить попап в фокус можно с помощью метода window.focus(),
// а убрать из фокуса – с помощью window.blur()
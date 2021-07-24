//---------------------------------------------------------------------------------------
// setTimeout и setInterval
//---------------------------------------------------------------------------------------

// setTimeout позволяет вызвать функцию один раз через определённый интервал времени.

// Синтаксис:
// let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...), где
// - func|code -  Функция или строка кода для выполнения. Обычно это функция. По историческим причинам можно передать и строку кода, но это не рекомендуется.
// - delay -  Задержка перед запуском в миллисекундах (1000 мс = 1 с). Значение по умолчанию – 0.
// - arg1, arg2… -  Аргументы, передаваемые в функцию (не поддерживается в IE9-) 
// clearTimeout() - отменяет выполнение

const getBtnSetTimeOutStartEl = document.querySelector('.class-btn-set-timeout-start');

getBtnSetTimeOutStartEl.addEventListener('click', () => {
  setTimeout(() => {
    alert("сообщение через 5 секунд");
  }, 5000)
})


// setInterval позволяет вызывать функцию регулярно, повторяя вызов через определённый интервал времени.

// Синтаксис:
// Метод setInterval имеет такой же синтаксис как setTimeout:
// let timerId = setInterval(func|code, [delay], [arg1], [arg2], ...)
// clearInterval() - отменяет выполнение

const getBtnSetIntervalStartEl = document.querySelector('.class-btn-set-interval-start');
const getBtnSetIntervalStopEl = document.querySelector('.class-btn-set-interval-stop');

getBtnSetIntervalStopEl.disabled = true;

let newInterval;

getBtnSetIntervalStartEl.addEventListener('click', () => {
  let i = 0
  newInterval = setInterval(() => {
    getBtnSetIntervalStartEl.innerHTML = i++;
    getBtnSetIntervalStartEl.disabled = true;
    getBtnSetIntervalStopEl.disabled = false;
  }, 1000)
})

getBtnSetIntervalStopEl.addEventListener('click', () => {
  clearInterval(newInterval);
  getBtnSetIntervalStartEl.disabled = false;
  getBtnSetIntervalStopEl.disabled = true;
});

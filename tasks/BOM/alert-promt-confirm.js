//---------------------------------------------------------------------------------------
// alert, prompt, confirm
//---------------------------------------------------------------------------------------


// alert - показывает сообщение и ждёт, пока пользователь нажмёт кнопку «ОК».

const getElementBtnAlert = document.querySelector(".class-alert-box__btn");

getElementBtnAlert.addEventListener('click', () => {

  const getInputAlertElement = document.querySelector(".class-alert-box__input");

  alert(getInputAlertElement.value);  // добавляем значение строки input
});


// prompt - модальное окно с текстом, полем для ввода текста и кнопками OK/Отмена.

// result = prompt(title, [default]), где
// title -  Текст для отображения в окне.
// default -  Необязательный второй параметр, который устанавливает начальное значение в поле для текста в окне. 

const getElementBtnPrompt = document.querySelector(".class-prompt-box__btn");

getElementBtnPrompt.addEventListener('click', () => {

  const getInputQuestionPromptElement = document.querySelector(".class-prompt-box__input-question");

  const promptResult = prompt(getInputQuestionPromptElement.value)  // добавляем начальное значение из input и сохраняем ответ

  const getInputAnswerPromptElement = document.querySelector(".class-prompt-box__input-answer");

  if (promptResult) getInputAnswerPromptElement.value = promptResult // Если был ответ - вставляем в input

});

// Confirm отображает модальное окно с текстом вопроса question и двумя кнопками: OK и Отмена.

// result = confirm(question);
// Результат – true, если нажата кнопка OK. В других случаях – false.

const getElementBtnConfirm = document.querySelector(".class-confirm-box__btn");

getElementBtnConfirm.addEventListener('click', () => {

  const getInputQuestionConfirmElement = document.querySelector(".class-confirm-box__input-question");

  const confirmResult = confirm(getInputQuestionConfirmElement.value)  // добавляем начальное значение из input и сохраняем ответ

  const getInputAnsweConfirmElement = document.querySelector(".class-confirm-box__input-answer");

  getInputAnsweConfirmElement.value = confirmResult // ответ вставляем в input

});

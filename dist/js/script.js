document.addEventListener('DOMContentLoaded', () => {

  const emailForm = document.querySelector("#email-form");
  const phoneForm = document.querySelector("#phone-form");
  const smsCodeForm = document.querySelector("#sms-code-form");
  const loginEmail = document.querySelector("#login-email");
  const loginPhone = document.querySelector("#login-phone");
  const sendSmsCode = document.querySelector("#send-sms-code");

  if (loginEmail) {
    loginEmail.addEventListener("click", () => showForm(emailForm, [phoneForm, smsCodeForm]));
  }
  if (loginPhone) {
    loginPhone.addEventListener("click", () => showForm(phoneForm, [emailForm, smsCodeForm]));
  }
  if (sendSmsCode) {
    sendSmsCode.addEventListener("click", () => showForm(smsCodeForm, [phoneForm, emailForm]));
  }

  function showForm(formToShow, formsToHide) {
    formsToHide.forEach(form => {
      form.style.display = "none";
      $('#phone').inputmask("+7 (999) 999-99-99");
    });

    formToShow.style.display = "flex";

  }

  const editableInputs = document.querySelectorAll(".editable");
  const editButton = document.querySelector("#profile-info__edit");
  const saveButton = document.querySelector("#profile-info__save");

  editableInputs.forEach(input => {
    input.addEventListener("click", function () {
      if (editButton.classList.contains("editing")) {
        input.removeAttribute("disabled");
        input.focus();
      }
    });
  });

  editButton.addEventListener("click", function () {
    if (editButton.classList.contains("editing")) {
      editableInputs.forEach(input => {
        input.setAttribute("disabled", true);
      });
      saveButton.style.display = "none";
      editButton.textContent = "Редактировать";
      editButton.classList.remove("editing");
    } else {
      editableInputs.forEach(input => {
        input.removeAttribute("disabled");
      });
      saveButton.style.display = "inline-block";
      editButton.style.display = "none";
      editButton.classList.add("editing");
    }
  });

  saveButton.addEventListener("click", function () {
    editableInputs.forEach(input => {
      input.setAttribute("disabled", true);
    });
    saveButton.style.display = "none";
    editButton.style.display = "inline-block";
    editButton.classList.remove("editing");
  });

  // Получаем форму и поля ввода
  const form = document.getElementById('profile-form');
  const nameInput = document.getElementById('profile-name');
  const birthdateInput = document.getElementById('profile-birthdate');
  const phoneInput = document.getElementById('profile-phone');
  const emailInput = document.getElementById('profile-email');

  // Получаем элементы для отображения ошибок
  const phoneError = document.getElementById('phone-error');
  const emailError = document.getElementById('email-error');

  // Функция для валидации номера телефона
  function validatePhone() {
    const phonePattern = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
    if (!phonePattern.test(phoneInput.value)) {
      phoneError.textContent = 'Пожалуйста, введите номер телефона в формате +7 (999) 999-99-99';
      phoneInput.classList.add('error');
      return false;
    } else {
      phoneError.textContent = '';
      phoneInput.classList.remove('error');
      return true;
    }
  }

  // Функция для валидации электронной почты
  function validateEmail() {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(emailInput.value)) {
      emailError.textContent = 'Пожалуйста, введите корректный адрес электронной почты в формате example@gmail.com';
      emailInput.classList.add('error');
      return false;
    } else {
      emailError.textContent = '';
      emailInput.classList.remove('error');
      return true;
    }
  }

  // Обработчик события при отправке формы
  form.addEventListener('submit', function (e) {
    // Предотвращаем отправку формы
    e.preventDefault();

    // Вызываем функции валидации
    const isPhoneValid = validatePhone();
    const isEmailValid = validateEmail();

    // Если все поля прошли валидацию, можно отправить форму
    if (isPhoneValid && isEmailValid) {
      form.submit();
    }
  });

  // Обработчик события при нажатии кнопки "Редактировать"
  document.getElementById('profile-info__edit').addEventListener('click', function () {
    nameInput.removeAttribute('disabled');
    birthdateInput.removeAttribute('disabled');
    phoneInput.removeAttribute('disabled');
    emailInput.removeAttribute('disabled');
  });

  // Обработчик события при нажатии кнопки "Сохранить"
  document.getElementById('profile-info__save').addEventListener('click', function () {
    // Снова валидируем поля перед сохранением
    const isPhoneValid = validatePhone();
    const isEmailValid = validateEmail();

    // Если все поля прошли валидацию, можно сохранить данные
    if (isPhoneValid && isEmailValid) {
      nameInput.setAttribute('disabled', true);
      birthdateInput.setAttribute('disabled', true);
      phoneInput.setAttribute('disabled', true);
      emailInput.setAttribute('disabled', true);
    }
  });


});
document.addEventListener('DOMContentLoaded', () => {
  // Предполагается, что данные о пользователе, баллах и специальных предложениях доступны через объект user

  document.getElementById("login-email").addEventListener("click", showEmailForm);
  document.getElementById("login-phone").addEventListener("click", showPhoneForm);
  document.getElementById("send-sms-code").addEventListener("click", sendSMSCode);

  function showEmailForm() {
    document.getElementById("email-form").style.display = "flex";
    document.getElementById("phone-form").style.display = "none";
    document.getElementById("sms-code-form").style.display = "none";
  }

  function showPhoneForm() {
    document.getElementById("email-form").style.display = "none";
    document.getElementById("phone-form").style.display = "flex";
    document.getElementById("sms-code-form").style.display = "none";
    // Применить маску к номеру телефона
    $('#phone').inputmask("+7 (999) 999-99-99");
  }

  function sendSMSCode() {
    // Здесь можно добавить код для отправки SMS-кода на введенный номер телефона
    // После отправки SMS кода можно переключиться на форму ввода кода.
    document.getElementById("sms-code-form").style.display = "flex";
    document.getElementById("phone-form").style.display = "none";
  }

  // Заполняем данные о пользователе
  document.getElementById("profile-name").textContent = user.name;
  document.getElementById("profile-birthdate").textContent = user.birthdate;
  document.getElementById("profile-phone").textContent = user.phone;
  document.getElementById("profile-email").textContent = user.email;

  // Обработчик формы редактирования
  document.getElementById("edit-form").addEventListener("submit", function (e) {
    e.preventDefault();
    // Собираем измененные данные
    const editedName = document.getElementById("edit-name").value;
    const editedBirthdate = document.getElementById("edit-birthdate").value;
    const editedPhone = document.getElementById("edit-phone").value;
    const editedEmail = document.getElementById("edit-email").value;

    // Обновляем данные о пользователе
    user.name = editedName;
    user.birthdate = editedBirthdate;
    user.phone = editedPhone;
    user.email = editedEmail;

    // Обновляем отображение данных
    document.getElementById("profile-name").textContent = editedName;
    document.getElementById("profile-birthdate").textContent = editedBirthdate;
    document.getElementById("profile-phone").textContent = editedPhone;
    document.getElementById("profile-email").textContent = editedEmail;

    // Здесь вы можете также отправить измененные данные на сервер
  });

  // Заполняем данные о баллах
  document.getElementById("available-points").textContent = user.availablePoints;

  // Заполняем данные о специальных предложениях
  const specialOffers = user.specialOffers;
  const specialOffersList = document.querySelector("#profile-rewards ul");
  specialOffersList.innerHTML = ""; // Очищаем список
  specialOffers.forEach((offer) => {
    const li = document.createElement("li");
    li.textContent = offer;
    specialOffersList.appendChild(li);
  });

  const btnEditProfile = querySelector('#profile-info__edit'); а
  const editProfile = querySelector('#profile-edit');

  btnEditProfile.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('test');
    editProfile.style.display = "flex";
  })


});
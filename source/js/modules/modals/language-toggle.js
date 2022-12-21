const languageCurrent = document.querySelectorAll('.language-toggle__link');

function definesLang() {
  languageCurrent.forEach((item) => {
    item.addEventListener('click', function () {
      item.style.color = '#372e11';
    });
    item.addEventListener('blur', function () {
      if (item !== '') {
        item.style.color = '#9b9b99';
      } else {
        item.style.color = '#372e11';
      }
    });
  });
}

export {definesLang};

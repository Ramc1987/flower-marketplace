import JustValidate from 'just-validate';

// const userName = document.getElementById('#user-name');

// const form = document.querySelector('.form');
const buttonPrev = document.querySelector('.form__button-prev');
const buttonNext = document.querySelector('.form__button-next');
const firstFieldSet = document.querySelector('.form__first-fieldset');
const secondFieldSet = document.querySelector('.form__second-fieldset');
const fieldFirst = firstFieldSet.querySelectorAll('.form__input-field');
const fieldNextStep = secondFieldSet.querySelectorAll('.form__input-field');
const CODELENGTH = 4;
const CHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let code = '';

const validationForm = () => {
  const validation = new JustValidate(
      '#form',
      {
        errorFieldCssClass: 'is-invalid',
        errorLabelCssClass: 'is-label-invalid',
        focusInvalidField: true,
        lockForm: true,
        validateBeforeSubmitting: true,
      }
  );
  validation.addField('#user-name', [
    {
      rule: 'required',
    },
    {
      rule: 'minLength',
      value: 3,
    },
    {
      rule: 'maxLength',
      value: 40,
    },
    {
      rule: 'customRegexp',
      value: /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/,
    }
  ]);

  validation.addField('#company', [{
    rule: 'required',
  }]);

  validation.addField('#email', [{
    rule: 'required',
  },
  {
    rule: 'customRegexp',
    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
  }
  ]);

  validation.addField('#phone', [
    {
      rule: 'customRegexp',
      value: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
    }
  ]);
};

function opensNextStep() {
  if (buttonNext) {
    buttonNext.addEventListener('click', () => {
      fieldFirst.forEach((item) => {
        if (item.value !== '') {
          buttonNext.disabled = true;
        } else {
          buttonNext.disabled = false;
          secondFieldSet.classList.toggle('hidden-form');
          firstFieldSet.classList.toggle('hidden-form');
        }
      });

    });
  }
}


function returnFormPrev() {
  if (buttonPrev) {
    buttonPrev.addEventListener('click', () => {
      firstFieldSet.classList.toggle('hidden-form');
      secondFieldSet.classList.toggle('hidden-form');
    });
  }
}


function generateCapcheCode() {
  for (let i = 0; i <= CODELENGTH; i++) {
    let randomNumber = Math.floor(Math.random() * CHARS.length);
    code += CHARS.substring(randomNumber, randomNumber + 1);
  }
  document.querySelector('.capche-code').value = code;
}

export {generateCapcheCode, returnFormPrev, opensNextStep, validationForm};

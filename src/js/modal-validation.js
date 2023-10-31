// Validação Modal

const container = document.getElementById("exampleModal");
const modal = new bootstrap.Modal(container);

const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');

const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
const telefoneRegex = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/;

let isValidForm = false;


form.addEventListener('submit', (event) => {
  event.preventDefault();

  nameValidate();
  emailValidate();
  telefoneValidate();
  planValidate();
  mainPasswordValidate();
  comparePassword();

  modal.hide();

  if (isValidForm) {
    toast.classList.add("active");
    progress.classList.add("active");

    setTimeout(() => {
      toast.classList.remove("active");
    }, 5300)

    closeAlert.addEventListener("click", () => {
      toast.classList.remove("active");

      setTimeout(() => {
        progress.classList.remove("active");
      }, 300)
    })
  }

})

function setError(index) {
  campos[index].style.border = '2px solid #e63636'
  spans[index].style.display = 'block'
}

function removeError(index) {
  campos[index].style.border = ''
  spans[index].style.display = 'none'
}

function nameValidate() {
  isValidForm = true;

  if (campos[0].value === "") {
    setError(0)
    isValidForm = false;
  } else {
    removeError(0)
  }
}

function emailValidate() {
  isValidForm = true;
  if (!emailRegex.test(campos[1].value || campos[1].value === "")) {
    setError(1)
    isValidForm = false;
  } else {
    removeError(1)
  }
}

function telefoneValidate() {
  isValidForm = true;

  campos[2].value = maskPhoneNumber(campos[2].value)

  if (!telefoneRegex.test(campos[2].value || campos[2].value === "")) {
    setError(2)
    isValidForm = false;
  } else {
    removeError(2)
  }
}

const maskPhoneNumber = (value) => {
  if (!value) return ""
  value = value.replace(/\D/g, '')
  value = value.replace(/(\d{2})(\d)/, "($1) $2")
  value = value.replace(/(\d)(\d{4})$/, "$1-$2")
  return value
}

function planValidate() {
  isValidForm = true;
  if (campos[3].selectedIndex == 0) {
    setError(3)
    isValidForm = false;
  } else {
    removeError(3)
  }
}

function mainPasswordValidate() {
  isValidForm = true;
  if (campos[4].value.length < 8) {
    setError(4)
    isValidForm = false;
  } else {
    removeError(4)
    comparePassword();
  }
}

function comparePassword() {
  isValidForm = true;

  if (campos[4].value == campos[5].value && campos[5].value.length >= 8) {
    removeError(5)
  } else {
    setError(5)
    isValidForm = false;
  }
}
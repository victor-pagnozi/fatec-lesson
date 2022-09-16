console.log('Está funcionando');

const text = 'bla bla bla bla';
const formValue = document.getElementsByClassName('form-control');
document.getElementById('fields-to-complete').innerText +=
  ' ' + formValue.length;

function populateDueDate() {
  const selectDueDate = document.getElementById('dueDate');
  const options = [5, 10, 15, 20, 25];

  options.forEach((option) => {
    // selectDueDate.innerHTML += `<option value="${option}">${option}</option>`;
  });

  const selectDueDateMapped = options.map(
    (option) => `<option value="${option}">${option}</option>`
  );

  selectDueDate.innerHTML = selectDueDateMapped;
}

function validatePrice(event) {
  const value = event.target.value;
  if (value < 0) {
    event.target.value = 0;
    return;
  }
}

function showTotalPrice() {
  const price = parseInt(document.getElementById('price').value) | 0;
  const installation =
    parseInt(document.getElementById('installation').value) | 0;

  document.getElementById('totalPrice').innerHTML = price + installation;
}

function saveOnlyForExample(event) {
  event.preventDefault();
  const form = document.getElementById('formPaymentInformation');
  const formElements = Array.from(form.elements);

  const lengthOfFormElements = formElements.length;
  const elementsMapped = formElements.map((element, index) => {
    if (index < lengthOfFormElements - 2) {
      return element.value;
    }
    return '';
  });
  console.log(elementsMapped);
  toastr.success('Save Successfully!');
}

function save(event) {
  event.preventDefault();
  const paymentForm = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    cardNumber: document.getElementById('cardNumber').value
  };

  validateInputEmpty(paymentForm.name);

  toastr.success(
    `Congrats ${paymentForm.name}, Save Successfully!`,
    'Success!'
  );
}

function validateInputEmpty(input) {
  if (!input) {
    toastr.warning('Some input has been empty!', 'Warning');
    return;
  }
}

populateDueDate();
showTotalPrice();

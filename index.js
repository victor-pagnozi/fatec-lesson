console.log('Está funcionando');

const text = 'bla bla bla bla';
const formValue = document.getElementsByClassName('form-control');
document.getElementById('fields-to-complete').innerText +=
  ' ' + formValue.length;

function save(event) {
  event.preventDefault();

  toastr.success('Are you the 6 fingered man?');
}

function populateDueDate() {
  const selectDueDate = document.getElementById('dueDate');
  const options = [5, 10, 15, 20, 25];

  options.forEach((option) => {
    selectDueDate.innerHTML += `<option value="${option}">${option}</option>`;
  }); //substituir por map para exemplo
}

populateDueDate();

console.log('Está funcionando');

const text = 'bla bla bla bla';
const formValue = document.getElementsByClassName('form-control');
document.getElementById('fields-to-complete').innerText +=
  ' ' + formValue.length;

function save(event) {
  event.preventDefault();

  toastr.success('Are you the 6 fingered man?');
}

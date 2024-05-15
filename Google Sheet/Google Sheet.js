const scriptURL = 'https://script.google.com/macros/s/AKfycbxk3cFolTIoJhbrEWHg-tM_kq3FzSg5TcGhrg5qmcs2aaoAQpzLpmZN76QdrSuGu-Xg/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
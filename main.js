
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('paymentForm');
  const modal = document.getElementById('modal');
  const closeModal = document.getElementById('closeModal');
  const submitBtn = document.getElementById('submitBtn');
  const botField = document.getElementById('bot-field');

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    // simple bot protection check
    if (botField && botField.value) return;

    // validation
    const email = form.querySelector('#email').value.trim();
    const txn = form.querySelector('#txn').value.trim();
    const file = form.querySelector('#screenshot').files[0];
    if (!email) { alert('Please enter your email'); return; }
    if (!txn) { alert('Please enter transaction number'); return; }
    if (!file) { alert('Please upload screenshot'); return; }

    submitBtn.disabled = true;
    submitBtn.textContent = 'Submitting...';

    // Build FormData and POST to Netlify (this same site)
    const formData = new FormData(form);

    fetch('/', {
      method: 'POST',
      body: formData
    })
    .then(function(res){
      if (res.ok) {
        // show modal
        modal.setAttribute('aria-hidden','false');
        // clear form
        form.reset();
      } else {
        alert('There was a problem submitting the form. Please try again.');
      }
    })
    .catch(function(err){
      console.error(err);
      alert('Network error: could not submit form.');
    })
    .finally(function(){
      submitBtn.disabled = false;
      submitBtn.textContent = 'Submit';
    });
  });

  closeModal.addEventListener('click', function(){
    modal.setAttribute('aria-hidden','true');
  });
});

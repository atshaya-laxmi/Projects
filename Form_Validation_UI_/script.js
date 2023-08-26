function submitForm() {
    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;
    const purpose = document.getElementById('purpose').value;
    const remark = document.getElementById('remark').value;
  
    document.querySelectorAll('.error-message').forEach(error => error.textContent = '');
  
    let hasErrors = false;
    if (!email) {
      document.getElementById('emailError').textContent = 'Email is required.';
      hasErrors = true;
    }
  
    if (!name) {
      document.getElementById('nameError').textContent = 'Name is required.';
      hasErrors = true;
    }
  
    if (!purpose) {
      document.getElementById('purposeError').textContent = 'Purpose is required.';
      hasErrors = true;
    }
  
    if (!remark) {
      document.getElementById('remarkError').textContent = 'Remark is required.';
      hasErrors = true;
    }
  
    if (!hasErrors) {
      alert(`Your Copy of response is also sent on your given email id ${email}`);
    }
    return !hasErrors;
  }
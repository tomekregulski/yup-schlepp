console.log('you called?');

const agentRegFormHandler = async (e) => {
  e.preventDefault();
  let first_name = document.getElementById('first-name').value;
  let last_name = document.getElementById('last-name').value;
  let email = document.getElementById('email').value;
  let phone_number = document.getElementById('phone-number').value;
  let password = document.getElementById('password').value;
  let passwordConfirm = document.getElementById('password-confirm').value;

  if (password !== passwordConfirm) {
    alert('make sure your password matches!');
  } else {
    const createUser = await fetch(`/api/users`, {
      method: 'POST',
      body: JSON.stringify({ email, password, first_name, last_name, phone_number }),
      headers: { 'Content-Type': 'application/json' },
    });

    console.log(createUser.ok);
    if (createUser.ok) {
      alert(`Welcome aboard ${first_name} ${last_name}`);
      document.location.replace('/');
    }
  }
};

document.querySelector('.agent-reg-form').addEventListener('submit', agentRegFormHandler);

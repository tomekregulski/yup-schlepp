const cancelBtn = document.querySelector('.cancel-btn');

// cancel button
cancelBtn.addEventListener('click', () => {
  document.location.replace('/');
});

// add/edit listing - mgmt dropdown card '/new-listing/management'
const mgmtFormHandler = () => {
  const mgmt = document.getElementById('mgmt');
  const mgmtForm = document.querySelector('.mgmt-form');
  const mgmtId = document.querySelector('.mgmt-id');

  mgmtForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const mgmtVal = mgmt.value.trim();
    if (mgmtVal === '') {
      alert('Please enter a valid management company before submitting');
    } else {
      confirm(`Select OK to add management company: ${mgmtVal}`);
      const updateMgmt = await fetch(`/api/managements/${mgmtId}`, {
        method: 'PUT',
        body: JSON.stringify({ management_name: mgmtVal }),
        headers: { 'Content-Type': 'application/json' },
      });

      updateMgmt.ok ? document.location.replace(`/managements/${mgmtId}`) : alert('No good');
    }
  });
};

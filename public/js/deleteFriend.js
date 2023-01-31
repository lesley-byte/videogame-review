const id = document.querySelector('input[name="friend-id"]').value;
const deleteFriendFormHandler = async (event) => {
  event.preventDefault();
  // get the values from the form

  await fetch(`/friends/${id}`, {
    method: 'DELETE',
  });
  document.location.replace('/');
};

document
    .querySelector('#delete-btn')
    .addEventListener('click', deleteFriendFormHandler);
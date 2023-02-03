const id = document.querySelector('input[name="friend-id"]').value;
const deleteFriendFormHandler = async (event) => {
  event.preventDefault();
  console.log('called delete function');
  // get the values from the form

  await fetch(`../api/friends/${id}`, {
    method: 'DELETE',
  });
  document.location.replace('/friends');
};

document
  .querySelector('#delete-btn')
  .addEventListener('click', deleteFriendFormHandler);

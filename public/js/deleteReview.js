//This will be the fetch to delete a review
const id = document.querySelector('input[name="review-id"]').value;
const deleteReviewFormHandler = async (event) => {
  event.preventDefault();
  // get the values from the form

  await fetch(`/reviews/${id}`, {
    method: 'DELETE',
  });
  document.location.replace('/');
};

document
  .querySelector('#delete-review-form')
  .addEventListener('submit', deleteReviewFormHandler);

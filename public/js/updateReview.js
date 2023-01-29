//This will be the fetch to update/put a review
const id = document.querySelector('input[name="review-id"]').value;
const newReviewFormHandler = async (event) => {
  event.preventDefault();
  // get the values from the form
  const title = document.querySelector('#title').value;
  const text = document.querySelector('#newreview').value;
  // const reviewUser = document.querySelector('#review_user').value.trim();
  // const reviewGame = document.querySelector('#gamename').value.trim();

  await fetch(`/reviews/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      text,
      title,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

document
  .querySelector('#update-review-form')
  .addEventListener('submit', newReviewFormHandler);

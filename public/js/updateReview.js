//This will be the fetch to update/put a review
const id = document.querySelector('input[name="review-id"]').value;
const newReviewFormHandler = async (event) => {
  event.preventDefault();
  // get the values from the form
  const review_rating = document.querySelector(
    'input[name="rate"]:checked'
  ).value;
  const title = document.querySelector('#title').value;
  const text = document.querySelector('#newreview').value;
  // const reviewUser = document.querySelector('#review_user').value.trim();
  // const reviewGame = document.querySelector('#gamename').value.trim();
  console.log(review_rating);
  console.log(title);
  console.log(text);
  console.log(review_rating);
  await fetch(`/api/reviews/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      review_rating,
      text,
      title,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  document.location.replace(`/reviews/${id}`);
};

document
  .querySelector('#update-review-form')
  .addEventListener('submit', newReviewFormHandler);

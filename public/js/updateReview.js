//This will be the fetch to update/put a review

const newReviewFormHandler = async (event) => {
  event.preventDefault();
  // get the values from the form
  const reviewTitle = document.querySelector('#title').value;
  const reviewText = document.querySelector('#newreview').value;
  // const reviewUser = document.querySelector('#review_user').value.trim();
  // const reviewGame = document.querySelector('#gamename').value.trim();

  const data = { title: reviewTitle, text: reviewText };

  await fetch(`/reviews/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      reviewTitle,
      reviewText,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

document
  .querySelector('#update-review-form')
  .addEventListener('submit', newReviewFormHandler);
